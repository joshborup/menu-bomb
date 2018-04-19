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
    const {restuarantid} = req.session.user;
    db.get_orders(restuarantid).then(response => {
      console.log(response)
      res.send(response);
    })
  },
  getOrderItems: (req, res) => {
    const {customerId} = req.query;
    const db = req.app.get('db');
    console.log( customerId )
    db.get_order_info([customerId]).then(response => {
      console.log(response)
      res.send(response);
    })
  },
  updateInformation: (req, res) => {
    const db = req.app.get('db');
    const { firstName, lastName, email, logo, restaurantName, description, address2, address1, phone } = req.body
    
    db.update_rest_info([req.session.user.id, firstName, lastName, email, logo, restaurantName, description, address2, address1, phone]).then(response => {
      console.log('updateInfo', response);

      const user = {
        id: response[0].id,
        email: response[0].email,
        phone: response[0].phone,
        address1: response[0].address_1,
        address2: response[0].address_2,
        firstName: response[0].first_name,
        lastName: response[0].last_name,
        userType: response[0].user_type,
        restaurantName: response[0].name,
        logo: response[0].logo_url,
        description: response[0].description,
        restuarantid: response[0].restuarantid
    }

    req.session.user = user

      res.status(200).send(req.session.user)
    })
  }
}
