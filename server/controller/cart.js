module.exports = {
  addItem: (req, res) => {
    const db = req.app.get('db');
    const userId = req.session.user.id;
    let {id, restaurantid, name, price, description, categoryid, imageurl, category, notes} = req.body

    const quantity = 1;
    db.get_cart(userId).then( cart => {
      if(!cart.length) {
        db.create_cart([restaurantid, userId]).then( newCart => {
          db.add_cart_item([newCart[0].id, id, quantity, notes]).then( cartItem => {
            res.json(cartItem[0]);
          }).catch( err => console.log('addItem err: ', err));
        })
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