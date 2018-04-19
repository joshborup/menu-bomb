SELECT M.*, R.name as restaurant_name FROM menu_items M
JOIN restaurant_profiles R
ON (M.restaurant_id = R.id)
WHERE M.deleted = false
AND (SELECT deleted FROM categories WHERE id = M.category_id) = false
AND (M.name ILIKE CONCAT('%', $1 , '%')
OR R.name ILIKE CONCAT('%', $1 , '%')
OR M.description ILIKE CONCAT('%', $1 , '%'))
LIMIT 20;