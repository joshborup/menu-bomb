SELECT M.id as id, M.restaurant_id as restaurantId, name, price, description, image_url as imageUrl, C.id as categoryId, C.category FROM categories C
FULL JOIN menu_items M ON M.category_id = C.id
WHERE M.restaurant_id = $1;
