-- SELECT restaurant_profiles.name, restaurant_profiles.logo_url, orders.* FROM
-- restaurant_profiles JOIN Orders
-- ON (restaurant_profiles.user_id = orders.restaurant_id)
-- WHERE customer_id = $1;

-- SELECT * FROM orders
-- JOIN order_items on(orders.id = order_items.order_id)
-- WHERE customer_id = $1;


SELECT restaurant_profiles.name, orders.order_time, orders.pickup_time, orders.total FROM customer_profiles
JOIN users
ON (customer_profiles.user_id = users.id)
JOIN orders
ON (customer_profiles.id = orders.customer_id)
JOIN order_items 
ON(order_items.order_id = orders.id)
JOIN restaurant_profiles
ON(restaurant_profiles.id = orders.restaurant_id)
WHERE customer_profiles.id = $1
LIMIT 1;