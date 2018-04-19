
const bcrypt = require('bcrypt');

module.exports = {
    register: (req, res) => {
         //setting db name variable
         const db = req.app.get('db');

         // user registration info deconstructed from body
         
         const { email, phone, address1, address2, firstName, lastName, password, userType, restaurantName } = req.body;

         //saltrounds for bcrypt hashing
         const saltRounds = 12;
        
         bcrypt.hash(password, saltRounds).then(hashedPassword => {
            db.register_user([email, phone, address1, address2, firstName, lastName, hashedPassword, userType]).then(response =>{
                 //set user to a session if succsesful login
                 const user = {
                    id: response[0].id,
                    email: response[0].email,
                    phone: response[0].phone,
                    address1: response[0].address_1,
                    address2: response[0].address_2,
                    firstName: response[0].first_name,
                    lastName: response[0].last_name,
                    userType: response[0].user_type
                }

                
                if(user.userType === 'customer') {
                    db.create_customer_profile(user.id).then( customer => {
                        console.log('customer created: ', customer)

                        req.session.user = user;
                        req.session.user.customerId = customer.id
                        req.session.cart = {items: []};

                        console.log(req.session.user);
                        res.send(req.session.user);
                    });
                }else if(user.userType === 'restaurant'){
                     console.log('hitititititti')
                    db.add_restaurant_profile_data([user.id, restaurantName, null, null, null, null, null]).then( restaurant => {
                        console.log('restaurant created: ', restaurant)
                        user.restaurantName = restaurant[0].name
                        user.restuarantid = restaurant[0].id
                        req.session.user = user;
                        req.session.cart = {items: []};
                        res.send(req.session.user);
                    });
                }
                
                // res.redirect(`/${req.session.user.userType}`)

            }).catch(error => console.log(error))
        }).catch(error => console.log(error))
    },
    login: (req, res) => {
         //setting db name variable
         const db = req.app.get('db');

         // deconstruct email and password from passed in body
         const { email, password } = req.body;
         console.log(email, password)
        //checking to see if the requested email is on the database 
        db.login_user(email).then(users => {
            //check that data is returned
            console.log(users)
            if(users.length){
                bcrypt.compare(password, users[0].password).then(passwordMatch => {
                    //if passwords match = true set users session
                    console.log(passwordMatch)
                    if(passwordMatch){
                        const user = {
                            id: users[0].id,
                            email: users[0].email,
                            phone: users[0].phone,
                            address1: users[0].address_1,
                            address2: users[0].address_2,
                            firstName: users[0].first_name,
                            lastName: users[0].last_name,
                            userType: users[0].user_type,
                            restaurantName: users[0].name,
                            logo: users[0].logo_url,
                            description: users[0].description,
                            customerId: users[0].customerid,
                            restuarantid: users[0].restuarantid
                        }
                        
                        req.session.user = user;
                        req.session.cart = {nextId: 0,items: []};
                        
                        res.send(req.session.user);
                    } else {
                        console.log('wrong password')
                        res.json({message:"Wrong username/password"})
                    }
                }).catch(error => console.log(error))
            } else {
                console.log('wrong username')
                res.json({message:"Wrong username/password"})
            }
            
        }).catch(error => console.log(error));
    },
    logout: (req, res)=> {
        req.session.destroy();
        res.status(200).send('logged out');
    },
    data: (req, res) => {
        const db = req.app.get('db');

        db.get_user(req.session.user.email).then(response => {
           console.log('hit aww yeah', response)
            res.status(200).send(response)
        })
    },
    sessionData: (req, res) => {
            console.log(req.session.user)
            res.status(200).send(req.session.user)
        
    }
}

        