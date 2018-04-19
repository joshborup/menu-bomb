SELECT M.*, R.name as restaurant_name FROM menu_items M
JOIN restaurant_profiles R
ON (M.restaurant_id = R.id)
WHERE M.name ILIKE CONCAT('%', $1 , '%')
OR R.name ILIKE CONCAT('%', $1 , '%')
OR M.description ILIKE CONCAT('%', $1 , '%')
LIMIT 20;