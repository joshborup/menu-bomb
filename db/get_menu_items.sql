SELECT M.id as id, M.restaurant_id, name, price, description, image_url, C.id as category_id, C.category FROM menu_items M
FULL JOIN categories C ON M.category_id = C.id
WHERE M.restaurant_id = $1;
