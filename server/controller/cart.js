module.exports = {
  addItem: (req, res) => {
    const db = req.app.get('db');
    const userId = req.session.user.id;
    // ONLY USING restaurantid FROM req.body
    let {id, restaurantid, name, price, description, categoryid, imageurl, category, notes} = req.body; 
    const quantity = 1; // QUANTITY IS HARDED-CODED FOR NOW

    // FIND THE USER'S CART FIRST - IF ONE DOES NOT EXIST, CREATE ONE
    db.get_cart(userId).then( cart => {
      console.log('cart: ', cart);
      // CART DOES NOT EXISTS
      if(!cart.length) {
        // create_cart.sql USES A SUBQUERY TO FIND THE CUSTOMER_PROFILE ID BASED OFF OF THE USER ID;
        db.create_cart([restaurantid, userId]).then( newCart => {
          db.add_cart_item([newCart[0].id, id, quantity, notes]).then( cartItem => {
            res.json(cartItem[0]);
          }).catch( err => console.log('addItem err: ', err));
        })
      // CART EXISTS
      } else {
        db.add_cart_item([cart[0].id, id, quantity, notes]).then( cartItem => {
          res.json(cartItem[0]);
        }).catch( err => console.log('else addItem err: ', err));
      }
    }).catch(err => console.log('getCart err: ', err));
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