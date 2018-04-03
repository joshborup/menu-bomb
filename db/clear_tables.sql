DROP TABLE IF EXISTS user;
CREATE TABLE user (
  id SERIAL PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone INTEGER NOT NULL,
  address_1 TEXT NOT NULL,
  address_2 TEXT,
  user_type TEXT NOT NULL,
  password TEXT NOT NULL
);
DROP TABLE IF EXISTS user;
CREATE TABLE restaurant_profile (
  id SERIAL PRIMARY KEY,
  user_id TEXT REFERENCES user(id),
  description TEXT,
  logo_url TEXT,
  background_url TEXT,
  delivers BOOLEAN,
  alcohol BOOLEAN
);
DROP TABLE IF EXISTS restaurant_hours;
CREATE TABLE restaurant_hours (
  id SERIAL PRIMARY KEY,
  restaurant_id INTEGER REFERENCES restaurant_profile(id),
  open_time DATE,
  close_time DATE
);
DROP TABLE IF EXISTS menu_item;
CREATE TABLE menu_item (
  id SERIAL PRIMARY KEY,
  restaurant_id INTEGER REFERENCES restaurant_profile(id),
  name TEXT NOT NULL,
  price NUMERIC,
  description TEXT,
  image_url TEXT,
  category_id INTEGER REFERENCES category(id)
);
DROP TABLE IF EXISTS customer_profile;
CREATE TABLE customer_profile (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES user(id)
);
DROP TABLE IF EXISTS order_items;
CREATE TABLE order_items (
  id SERIAL PRIMARY KEY,
  menu_item_id INTEGER REFERENCES menu_item(id),
  order_id INTEGER REFERENCES order(id),
  quantity INTEGER NOT NULL,
  notes TEXT
);
DROP TABLE IF EXISTS order;
CREATE TABLE order (
  id SERIAL PRIMARY KEY,
  customer_id TEXT REFERENCES customer_profile(id),
  total NUMERIC,
  open BOOLEAN,
  pickup_time DATE,
  order_time DATE
);
DROP TABLE IF EXISTS category;
CREATE TABLE category (
  id SERIAL PRIMARY KEY,
  restaurant_id INTEGER REFERENCES restaurant_profile(id),
  name TEXT NOT NULL
);

