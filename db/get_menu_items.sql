SELECT M.id as id, M.restaurant_id as restaurantId, name, price, description, image_url as imageUrl, C.id as categoryId, C.category FROM menu_items M
FULL JOIN categories C ON M.category_id = C.id
WHERE M.restaurant_id = $1 AND  M.deleted = false;
