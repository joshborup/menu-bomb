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
  }
}