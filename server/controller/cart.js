module.exports = {
  getCart: (req, res) => {
    res.json(req.session.cart);
  },
  addItem: (req, res) => {
    console.log('sessions:', req.session);
    const db = req.app.get('db');
    // const {id, restaurantid, name, price, description, categoryid, imageurl, category, notes} = req.body; 
    const cart = Object.assign({}, req.session.cart);

    // CHECK IF RESTAURANT IS THE SAME
    // if(cart.restaurantid !== restaurantid) {
    //   console.log('You can just go to hell.')
    // };

    // CREATE A NEW ITEM OBJECT TO THROW INTO THE CART
    // WARNING:::: CHILDREN NOT ALLOWED IN CART
    const newItem = Object.assign({}, req.body);
    newItem.cartItemId = cart.nextId;

    // INCREMENT nextId FOR THE NEXT CART ITEM THAT WILL BE ADDED
    cart.nextId++;
    // ADD NEW ITEM TO ITEMS ARRAY, AND PUT ITEMS BACK INTO CART
    cart.items.push(newItem);
    req.session.cart = cart;
    res.json(newItem);
    
  },
// ===========================================================================================================
  deleteItem: (req, res) => {
    const id = req.params.cartItemId;
    const cart = Object.assign({}, req.session.cart);
    const itemIndex = cart.items.findIndex( item => item.cartItemId === parseInt(id))
    cart.items.splice(itemIndex, 1);
    req.session.cart = cart;
    
    res.status(200).send()
  },
// ===========================================================================================================
  updateItem: (req, res) => {
    const {name, price, description, id, imageurl} = req.body;
    const db = req.app.get('db');
    db.update_menu_item(name, price, description, imageurl, id).then( response => {
      res.json(response[0]);
      
    }).catch( err => {
      console.log('updateItem err: ', err);
      res.status(500);
    });
  },
// ===========================================================================================================
  checkout: (req, res) => {
    const cart = req.body;
    const restaurantId = cart.items[0].restaurantid;
    const userId = req.session.user.id;
    const {total, subTotal, salesTax} = cart;
    const db = req.app.get('db');
    
    db.create_order([restaurantId, userId, total, subTotal, salesTax]).then( order => {
      let addItemsQuery = `INSERT INTO order_items (order_id, name, price, description, image_url, category, quantity, notes) VALUES `;
      cart.items.map( (item, i, arr) => {
        let {name, price, description, imageurl, category, quantity, notes} = item;
        let statementSuffix = i === arr.length -1 ? ' RETURNING *;' : ', ';
        addItemsQuery +=  `(${order[0].id}, '${name}',${price},'${description}','${imageurl}','${category}',${quantity})${statementSuffix}, '${notes}'`;
      });
      
      db.query(addItemsQuery).then( addedItems => {
        req.session.cart = {nextId: 0,items: []};
        res.json(req.session.cart);
      }).catch( err => console.log('addItemsQuery err: ', err));
    }).catch(err => console.log('createOrder err: ', err));
  }

}
// CREATE TABLE orders (
//   id SERIAL PRIMARY KEY,
//   restaurant_id INTEGER REFERENCES restaurant_profiles(id),
//   customer_id INTEGER REFERENCES customer_profiles(id),
//   total NUMERIC,
//   open BOOLEAN,
//   order_time DATE,
//   pickup_time DATE
// );

// CREATE TABLE order_items (
//   id SERIAL PRIMARY KEY,
//   menu_item_id INTEGER REFERENCES menu_items(id),
//   order_id INTEGER REFERENCES orders(id),
//   quantity INTEGER NOT NULL,
//   notes TEXT
// );