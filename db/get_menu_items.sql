SELECT * FROM menu_items M
FULL JOIN categories C ON M.category_id = C.id
WHERE M.restaurant_id = $1;