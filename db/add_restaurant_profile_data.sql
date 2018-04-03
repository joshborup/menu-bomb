INSERT INTO restaurant_profiles (description, logo_url, background_url, delivers, alcohol)
VALUES($2,$3,$4,$5,$6)
WHERE user_id = $1
RETURNING *;

-- CREATE TABLE restaurant_profiles (
--   id SERIAL PRIMARY KEY,
--   user_id INTEGER REFERENCES users(id),
--   description TEXT,
--   logo_url TEXT,
--   background_url TEXT,
--   delivers BOOLEAN,
--   alcohol BOOLEAN
-- );