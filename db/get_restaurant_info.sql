SELECT * FROM restaurant_profiles
FULL JOIN business_hours 
    ON (restaurant_profiles.id = business_hours.restaurant_id)
WHERE user_id = $1;