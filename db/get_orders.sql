SELECT * FROM orders
WHERE restaurant_id = (SELECT id FROM restaurant_profiles WHERE user_id = (SELECT id FROM users WHERE id = $1));