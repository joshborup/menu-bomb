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

SELECT * FROM users
JOIN restaurant_profiles
ON (users.id = restaurant_profiles.user_id)
WHERE users.id = $1;


