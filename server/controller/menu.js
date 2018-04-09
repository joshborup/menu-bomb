module.exports = {
  getMenuItems: (req, res) => {
    
    const id = req.params.id;
    
    const db = req.app.get('db');
    db.get_menu_items(id).then( items => {
      res.json(items);
    }).catch( err => {
      console.log('getMenuItems err: ', err);
      res.status(500);
    })
  },
  getMenuCategories: (req, res) => {
    const id = req.params.id;
    
    const db = req.app.get('db');
    db.get_menu_categories(id).then( categories => {
      res.json(categories);
    }).catch( err => {
      console.log('getMenuCategories err: ', err);
      res.status(500);
    })
  },
  addCategory: (req, res) => {
    let {restaurantId, category} = req.body;
    
    const db = req.app.get('db');
    db.add_category([restaurantId, category]).then( category => {
      res.json(category[0]);
    }).catch( err => {
      console.log('addCategory err: ', err);
      res.status(500);
    })
  },
  addItem: (req, res) => {
    const db = req.app.get('db');
    let {restaurantId, name, price, description, catId, imageUrl} = req.body

    
    db.add_new_menu_item([restaurantId, name, price, description, imageUrl, catId]).then(response=> {
      console.log(response);
      res.status(200).send(response)
    }).catch(error => console.log(error));
  },
  deleteItem: (req, res) => {
    const id = req.params.id;

    const db = req.app.get('db');
    db.delete_menu_item(id).then( response => {
      res.status(200).send();
    }).catch( err => {
      console.log('deleteItem err: ', err);
      res.status(500);
    })
  }
}