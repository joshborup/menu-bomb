SELECT M.id as id, M.restaurant_id as restaurantId, name, price, description, image_url as imageUrl, C.id as categoryId, C.category FROM categories C
FULL JOIN menu_items M ON C.id = M.category_id
WHERE C.restaurant_id = $1;