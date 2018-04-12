SELECT menu_items.*, restaurant_profiles.name as restaurant_name FROM menu_items
JOIN restaurant_profiles
ON (menu_items.restaurant_id = restaurant_profiles.id)
WHERE menu_items.name ILIKE CONCAT('%', $1 , '%')
LIMIT 20;