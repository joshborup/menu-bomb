module.exports = {
  addProfileData: (req, res) => {
    const db = req.app.get('db');
    // const userId = req.session.user.id; //GRAB userId FROM SESSIONS
    const userId = 1; //TESTING - REMOVE FOR PRODUCTION
    const { description, logoURL, backgroundURL, delivers, alcohol } = req.body;

    db.add_restaurant_profile_data(userId, description, logoURL, backgroundURL, delivers, alcohol).then( profile => {
      res.json(profile[0]);
    }).catch( err => {
      console.log('restaurant controller - addProfileData err: ', err);
      res.status(400).send();
    });
  },

  getRestaurantInfo: (req, res) => {
    const db = req.app.get('db');
    const user_id = req.session.user.id;
    db.get_restaurant_info(user_id).then(restaurant_info => {
      res.status(200).send(restaurant_info);
    }).catch( error => {
      console.log('error at getRestaurantInfo controller', error);
      res.status(400).send();
    })
  },

  getRestaurantUserInfo: (req, res) => {
    const db = req.app.get('db');
    const {id} = req.session.user;
    db.get_user_info(id).then(restaurant_user_info => {
      res.status(200).send(restaurant_user_info);
    }).catch( error => {
      console.log('error at getRestaurantUserInfo controller', error);
      res.status(400).send();
    })
  },

  getOrders: (req, res) => {
    const db = req.app.get('db');
    const {id} = req.session.user;
    db.get_orders(id).then(response => {
      console.log(response)
      res.send(response);
    })
  },
  getOrderItems: (req, res) => {
    const {customerId} = req.query;
    const db = req.app.get('db');
    console.log( customerId )
    db.get_order_info([customerId]).then(response => {
      res.send(response);
    })
  }
}
