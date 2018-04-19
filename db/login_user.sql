SELECT * from users
JOIN restaurant_profiles
    ON (users.id = restaurant_profiles.user_id)
WHERE email ILIKE $1;