// EXAMPLE OF USER OBJECT
// const user = {
//   id: id
//   email: email
//   phone: phone
//   address1: address1
//   address2: address2
//   firstName: firstName
//   lastName: lastName
//   userType: userType ('restaurant' or 'customer')
// } 
module.exports = function(req, res, next) {
	// const user = req.session.user;
	if (!req.session.user) {
			console.log('checkSession.js - user not found');
			res.status(401).send();
	} else {
			console.log('go to next')
			next();
	}
}
