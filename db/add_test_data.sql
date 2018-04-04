INSERT INTO users (first_name, last_name, email, phone, address_1, address_2, user_type, password)
VALUES('Jordan', 'Bush', 'jordanmbush@gmail.com', '1231231234', '123 N St.', 'Suite 150', 'restaurant', 'testPassword'),
('Anna', 'Lewandowski', 'annalewandowski@gmail.com', '1231231234', '123 N St.', 'Building E', 'restaurant', 'testPassword'),
('Josh', 'Borup', 'joshborup@gmail.com', '1231231234', '123 N St.', NULL, 'restaurant', 'testPassword'),
('Will', 'Dodson', 'willdidson@gmail.com', '1231231234', '123 N St.', NULL, 'customer', 'testPassword'),
('Jerry', 'Springer', 'jerryspringer@gmail.com', '4561231234', '456 N St.', NULL, 'customer', 'testPassword'),
('Kelly', 'Springer', 'kellyspringer@gmail.com', '4561231234', '456 N St.', NULL, 'customer', 'testPassword');

INSERT INTO restaurant_profiles (user_id, name, description, logo_url, background_url, delivers, alcohol)
VALUES(1, 'Taco Bell Pizza', 'The Best Burrito Restaurant', 'https://www.truepics.com/images/funny/joshborup.png', 'http://cdn-image.foodandwine.com/sites/default/files/1501607996/opentable-scenic-restaurants-marine-room-FT-BLOG0818.jpg', TRUE, FALSE),
(2, 'Pizza Hut Burgers','The Best Sandwich Restaurant', 'https://www.truepics.com/images/funny/joshborup.png', 'https://res.cloudinary.com/simpleview/image/upload/c_fill,f_auto,h_734,q_60,w_1920/v1/clients/fortwayne/restaurants_header_slide_2_86f7b8a6-81ba-46c7-9685-91ea117c0705.jpg', FALSE, TRUE),
(3, 'Burger King Tacos','The Best Crepes Restaurant', 'https://www.truepics.com/images/funny/joshborup.png', 'https://static.tacdn.com/TripAdvisorInsights/wp-content/uploads/2018/01/premiumforrestaurants_0.jpg', TRUE, TRUE);

INSERT INTO business_hours (restaurant_id, day, open_time, close_time)
VALUES(1, 0, '07:00:00', '18:00:00'),
(1, 1, '07:00:00', '18:00:00'),
(1, 2, '07:00:00', '18:00:00'),
(1, 3, '07:00:00', '18:00:00'),
(1, 4, '07:00:00', '18:00:00'),
(1, 5, '07:00:00', '20:00:00'),
(1, 6, '07:00:00', '20:00:00'),
(2, 1, '07:00:00', '20:00:00'),
(2, 2, '07:00:00', '20:00:00'),
(2, 3, '07:00:00', '20:00:00'),
(2, 4, '07:00:00', '20:00:00'),
(2, 5, '07:00:00', '22:00:00'),
(3, 0, '12:00:00', '20:00:00'),
(3, 5, '12:00:00', '02:00:00'),
(3, 6, '12:00:00', '24:00:00');

INSERT INTO categories (restaurant_id, category)
VALUES(1, 'Drinks'),
(1, 'Entre'),
(1, 'Sides'),
(1, 'Cool Treats'),
(1, 'Desserts'),
(1, 'Sea Food'),
(2, 'Drinks'),
(2, 'Entre'),
(2, 'Sides'),
(2, 'Cool Treats'),
(2, 'Desserts'),
(2, 'Sea Food'),
(3, 'Drinks'),
(3, 'Entre'),
(3, 'Sides'),
(3, 'Cool Treats'),
(3, 'Desserts'),
(3, 'Sea Food');

INSERT INTO menu_items (restaurant_id, name, price, description, image_url, category_id)
VALUES(1, 'Cheeseburger', 12.34, '1/2lb of drizzling charbroiled goodness', 'https://www.redrobin.com/content/dam/web/menu/2015-june/gourmet-cheeseburger-1100.jpg', 2),
(1, 'Fries', 5.50, 'Deep fried patato sticks', 'https://cms.splendidtable.org/sites/default/files/styles/w2000/public/french-fries.jpg?itok=FS-YwUYH', 3),
(1, 'Shake', 6.00, 'Better than a twirk', 'http://www.eatformula.com/wp-content/uploads/2017/03/Second-MilkShake-Recipe-575x428.jpg', 4),
(1, 'Rootbeer', 3.25, 'Rootbeer', 'https://www.dsvendinginc.com/images/product/medium/8917.jpg', 1),
(1, 'Coca-Cola', 3.25, 'Coca-Cola', 'https://s-i.huffpost.com/gen/765642/images/o-COKE-MYANMAR-facebook.jpg', 1),
(1, 'Sprite', 3.25, 'Sprite', 'https://cdn.shopify.com/s/files/1/0959/7176/products/sprite-logo_1024x1024.jpg?v=1454413466', 1),
(1, 'Cheesecake', 8.75, 'Sweet and delicious', 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/12/9/0/FNK_Cheesecake_s4x3.jpg.rend.hgtvcom.616.462.suffix/1387411272847.jpeg', 5),
(1, 'Ribeye Steak', 25.00, '10oz of mouth watering charbroiled goodness', 'https://s3.amazonaws.com/anovarecipes/images/finish_step/20171028_165329.jpg', 2),
(1, 'Shrimp', 20.25, '10 peices of crazy good crustaceans', 'http://tiphero.com/wp-content/uploads/2017/03/Honey-Garlic-Shrimp-FI-750x364.jpg', 6),
(2, 'Cheeseburger', 20.25, '1/2lb of drizzling charbroiled goodness', 'https://thumb1.shutterstock.com/display_pic_with_logo/916646/310491326/stock-vector-food-logo-310491326.jpg', 1),
(2, 'Cheeseburger', 20.25, '1/2lb of drizzling charbroiled goodness', 'https://thumb1.shutterstock.com/display_pic_with_logo/916646/310491326/stock-vector-food-logo-310491326.jpg', 1),
(2, 'Cheeseburger', 20.25, '1/2lb of drizzling charbroiled goodness', 'https://thumb1.shutterstock.com/display_pic_with_logo/916646/310491326/stock-vector-food-logo-310491326.jpg', 1),
(2, 'Cheeseburger', 20.25, '1/2lb of drizzling charbroiled goodness', 'https://thumb1.shutterstock.com/display_pic_with_logo/916646/310491326/stock-vector-food-logo-310491326.jpg', 1),
(2, 'Cheeseburger', 20.25, '1/2lb of drizzling charbroiled goodness', 'https://thumb1.shutterstock.com/display_pic_with_logo/916646/310491326/stock-vector-food-logo-310491326.jpg', 1),
(2, 'Cheeseburger', 20.25, '1/2lb of drizzling charbroiled goodness', 'https://thumb1.shutterstock.com/display_pic_with_logo/916646/310491326/stock-vector-food-logo-310491326.jpg', 1),
(2, 'Cheeseburger', 20.25, '1/2lb of drizzling charbroiled goodness', 'https://thumb1.shutterstock.com/display_pic_with_logo/916646/310491326/stock-vector-food-logo-310491326.jpg', 1),
(2, 'Cheeseburger', 20.25, '1/2lb of drizzling charbroiled goodness', 'https://thumb1.shutterstock.com/display_pic_with_logo/916646/310491326/stock-vector-food-logo-310491326.jpg', 1),
(2, 'Cheeseburger', 20.25, '1/2lb of drizzling charbroiled goodness', 'https://thumb1.shutterstock.com/display_pic_with_logo/916646/310491326/stock-vector-food-logo-310491326.jpg', 1),
(2, 'Cheeseburger', 20.25, '1/2lb of drizzling charbroiled goodness', 'https://thumb1.shutterstock.com/display_pic_with_logo/916646/310491326/stock-vector-food-logo-310491326.jpg', 1),
(3, 'Cheeseburger', 20.25, '1/2lb of drizzling charbroiled goodness', 'https://thumb1.shutterstock.com/display_pic_with_logo/916646/310491326/stock-vector-food-logo-310491326.jpg', 1),
(3, 'Cheeseburger', 20.25, '1/2lb of drizzling charbroiled goodness', 'https://thumb1.shutterstock.com/display_pic_with_logo/916646/310491326/stock-vector-food-logo-310491326.jpg', 1),
(3, 'Cheeseburger', 20.25, '1/2lb of drizzling charbroiled goodness', 'https://thumb1.shutterstock.com/display_pic_with_logo/916646/310491326/stock-vector-food-logo-310491326.jpg', 1);

INSERT INTO customer_profiles (user_id)
VALUES(1),
(2),
(3);

INSERT INTO orders (restaurant_id, customer_id, total, open, pickup_time, order_time)
VALUES(1, 1, 11.50, TRUE,'2018-01-01 07:00:00', '2018-01-01 05:02:34'),
(1, 2, 25.0, TRUE,'2018-01-01 16:00:00', '2018-01-01 07:05:34'),
(1, 3, 33.09, TRUE,'2018-01-01 14:00:00', '2018-01-01 12:02:00');

INSERT INTO order_items (order_id, menu_item_id, quantity, notes)
VALUES(1,2,1,'Small'),
(1,3,1,'Medium'),
(2,8,1,'Medium Rare'),
(3,4,2,'Small'),
(3,1,1,NULL),
(3,7,1,NULL),
(3,2,1,NULL);
-- ORDER ITEMS FOR ORDER 3
-- 12.34 cheeseburger
-- 3.25 drink
-- 3.25 drink
-- 8.75 cheesecake
-- 5.50 fries
