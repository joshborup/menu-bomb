
SELECT order_items.*, users.first_name, users.last_name, users.phone FROM order_items
JOIN orders ON(orders.id = order_id)
JOIN customer_profiles ON(customer_profiles.id = orders.customer_id)
JOIN users ON (customer_profiles.user_id  = users.id)
WHERE order_id = $1;