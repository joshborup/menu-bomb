module.exports = {
  getCart: (req, res) => {
    res.json(req.session.cart);
  },
  addItem: (req, res) => {
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
}