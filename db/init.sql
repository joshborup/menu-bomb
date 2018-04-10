
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  phone TEXT NOT NULL,
  address_1 TEXT NOT NULL,
  address_2 TEXT,
  user_type TEXT NOT NULL,
  password TEXT NOT NULL
);

CREATE TABLE restaurant_profiles (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  name TEXT NOT NULL,
  description TEXT,
  logo_url TEXT,
  background_url TEXT,
  delivers BOOLEAN,
  alcohol BOOLEAN
);

CREATE TABLE business_hours (
  id SERIAL PRIMARY KEY,
  restaurant_id INTEGER REFERENCES restaurant_profiles(id),
  day INTEGER NOT NULL,
  open_time TIME NOT NULL,
  close_time TIME NOT NULL
);

CREATE TABLE categories (
  id SERIAL PRIMARY KEY,
  restaurant_id INTEGER REFERENCES restaurant_profiles(id),
  category TEXT NOT NULL,
  deleted BOOLEAN NOT NULL DEFAULT FALSE
);

CREATE TABLE menu_items (
  id SERIAL PRIMARY KEY,
  restaurant_id INTEGER REFERENCES restaurant_profiles(id),
  name TEXT NOT NULL,
  price NUMERIC,
  description TEXT,
  image_url TEXT,
  category_id INTEGER REFERENCES categories(id),
  deleted BOOLEAN NOT NULL DEFAULT FALSE
);

CREATE TABLE customer_profiles (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id)
);

CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  restaurant_id INTEGER REFERENCES restaurant_profiles(id),
  customer_id INTEGER REFERENCES customer_profiles(id),
  total NUMERIC,
  open BOOLEAN,
  order_time DATE,
  pickup_time DATE
);

CREATE TABLE order_items (
  id SERIAL PRIMARY KEY,
  menu_item_id INTEGER REFERENCES menu_items(id),
  order_id INTEGER REFERENCES orders(id),
  quantity INTEGER NOT NULL,
  notes TEXT
);

CREATE TABLE carts (
  id SERIAL PRIMARY KEY,
  restaurant_id INTEGER REFERENCES restaurant_profiles(id),
  customer_id INTEGER REFERENCES customer_profiles(id),
  total NUMERIC,
);

CREATE TABLE cart_items (
  id SERIAL PRIMARY KEY,
  menu_item_id INTEGER REFERENCES menu_items(id),
  order_id INTEGER REFERENCES orders(id),
  quantity INTEGER NOT NULL,
  notes TEXT
);


