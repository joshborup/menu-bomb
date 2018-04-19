SELECT users.*, restaurant_profiles.id as restuarantid,	restaurant_profiles.user_id as rest_user_id, restaurant_profiles.name, restaurant_profiles.description, restaurant_profiles.logo_url, restaurant_profiles.background_url, restaurant_profiles.delivers, restaurant_profiles.alcohol, customer_profiles.id as customerid FROM users
FULL JOIN restaurant_profiles
    ON (users.id = restaurant_profiles.user_id)
FULL JOIN customer_profiles
    ON (users.id = customer_profiles.user_id)
WHERE email ILIKE $1;