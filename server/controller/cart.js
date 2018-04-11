module.exports = {
  addItem: (req, res) => {
    const db = req.app.get('db');
    const quantity = 1; // QUANTITY IS HARDED-CODED FOR NOW
    const {id, restaurantid, name, price, description, categoryid, imageurl, category, notes} = req.body; 
    const cart = Object.assign({}, req.session.cart);
    const items = cart.items.splice();

    // CHECK IF RESTAURANT IS THE SAME
    // if(cart.restaurantid !== restaurantid) {
    //   console.log('You can just go to hell.')
    // };

    // CREATE A NEW ITEM OBJECT TO THROW INTO THE CART
    // WARNING:::: CHILDREN NOT ALLOWED IN CART
    const newItem = {
      cartItemId: cart.nextId,
      itemId: id,
      quantity: quantity,
      notes: notes,
    };
    // INCREMENT nextId FOR THE NEXT CART ITEM THAT WILL BE ADDED
    cart.nextId++;
    // ADD NEW ITEM TO ITEMS ARRAY, AND PUT ITEMS BACK INTO CART
    items.push(newItem);
    cart.items = items;
    req.session.cart = cart;

    res.json(newItem);
    
  },
// ===========================================================================================================
deleteItem: (req, res) => {
  const id = req.params.id;
  
  const db = req.app.get('db');
  db.delete_menu_item(id).then( response => {
    res.status(200).send();
  }).catch( err => {
    console.log('deleteItem err: ', err);
    res.status(500);
  });
},
// ===========================================================================================================
  updateItem: (req, res) => {
    const {name, price, description, id, imageurl} = req.body;
    const db = req.app.get('db');
    db.update_menu_item(name, price, description, imageurl, id).then( response => {
      console.log(response)
      res.json(response[0]);
      
    }).catch( err => {
      console.log('updateItem err: ', err);
      res.status(500);
    });
  },
}