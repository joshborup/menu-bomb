UPDATE restaurant_profiles
SET description = $7,
logo_url = $5,
name = $6
WHERE user_id = $1;

UPDATE users
SET email=$4,
first_name = $2,
last_name = $3,
address_1 = $8,
address_2 = $9,
phone = $10
WHERE id = $1;

SELECT users.*, restaurant_profiles.id as restuarantid,	restaurant_profiles.user_id as rest_user_id, restaurant_profiles.name, restaurant_profiles.description, restaurant_profiles.logo_url, restaurant_profiles.background_url, restaurant_profiles.delivers, restaurant_profiles.alcohol FROM users
JOIN restaurant_profiles
ON (users.id = restaurant_profiles.user_id)
WHERE users.id = $1;


