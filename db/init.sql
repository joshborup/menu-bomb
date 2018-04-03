CREATE TABLE user (
  id SERIAL PIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone INTEGER NOT NULL,
  address_1 TEXT NOT NULL,
  address_2 TEXT,
  user_type TEXT NOT NULL,
  password TEXT NOT NULL
);
CREATE TABLE restaurant_profile (
  id SERIAL PIMARY KEY,
  user_id TEXT REFERENCES user(id),
  description TEXT,
  logo_url TEXT,
  delivers BOOLEAN,
  alcohol BOOLEAN
);
CREATE TABLE restaurant_hours (
  id SERIAL PIMARY KEY,
  restaurant_id INTEGER REFERENCES restaurant(id),
  open_time DATE,
  close_time DATE
);
CREATE TABLE menu_item (
  id SERIAL PIMARY KEY,
  restaurant_id INTEGER REFERENCES restaurant(id),
  name TEXT NOT NULL,
  cost NUMERIC,
  description TEXT,
  image_url TEXT,
  menu_category INTEGER
);
CREATE TABLE customer (
  id SERIAL PIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  address TEXT
);
CREATE TABLE order_items (
  id SERIAL PIMARY KEY,
  menu_item_id TEXT,
)
CREATE TABLE orders (
  id SERIAL PIMARY KEY,
  customer_id TEXT,
)
CREATE TABLE reservations (
  id SERIAL PIMARY KEY,
  customer_id TEXT,
)



-- email|logo_url|open_time|cost|email|quantity||date/time
-- address|delivers?|close_time|description|phone|||
-- contact_first_name|alcohol? Heck yeah!||image_url|address|||
-- contact_last_name|weed? Ja Man!||menu_type||||
-- |||menu_category||||
