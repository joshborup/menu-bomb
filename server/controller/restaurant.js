module.exports = {
  addProfileData: (req, res) => {
    const db = req.app.get('db');
    // const userId = req.session.user.id; //GRAB userId FROM SESSIONS
    const userId = 1; //TESTING - REMOVE FOR PRODUCTION
    const { description, logoURL, backgroundURL, delivers, alcohol } = req.body;

    db.add_restaurant_profile_data(userId, description, logoURL, backgroundURL, delivers, alcohol).then( profile => {
      res.json(profile);
    }).catch( err => {
      console.log('restaurant controller - addProfileData err: ', err);
      res.status(400).send();
    });
  }
}
