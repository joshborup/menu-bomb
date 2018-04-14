SELECT orders.*, users.first_name, users.last_name FROM orders
JOIN customer_profiles ON (customer_profiles.id = orders.customer_id)
JOIN users ON (customer_profiles.user_id = users.id)
WHERE restaurant_id = (SELECT id FROM users WHERE id = $1);