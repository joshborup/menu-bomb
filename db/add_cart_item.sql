INSERT INTO cart_items (cart_id, menu_item_id, quantity, notes)
VALUES ($1, $2, $3, $4)
RETURNING *;