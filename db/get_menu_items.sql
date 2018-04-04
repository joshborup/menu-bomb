SELECT * FROM menu_items M
FULL JOIN categories C ON M.category_id = C.id
WHERE restaurant_id = $1;