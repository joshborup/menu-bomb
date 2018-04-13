-- SELECT orders.*, users.first_name, users.last_name, customer_profiles.user_id, order_items.menu_item_id, order_items.notes, menu_items.name as item_name, restaurant_profiles.name FROM orders
-- JOIN customer_profiles ON(orders.customer_id = customer_profiles.id)
-- JOIN users ON(customer_profiles.user_id = users.id)
-- JOIN order_items ON(orders.id = order_items.order_id)
-- JOIN menu_items ON(order_items.menu_item_id = menu_items.id)
-- JOIN restaurant_profiles ON(orders.restaurant_id = restaurant_profiles.id)
-- WHERE restaurant_profiles.user_id = $1 AND orders.customer_id = $2;

SELECT orders.*, order_items.id as order_item_table_id, order_items.order_id, order_items.name, order_items.price, order_items.description, order_items.image_url, order_items.category, order_items.quantity, order_items.notes FROM orders
JOIN order_items ON(orders.id = order_items.order_id)
WHERE orders.customer_id = $1;