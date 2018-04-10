UPDATE menu_items SET name = $1, price = $2, description = $3, image_url = $4
WHERE id = $5
RETURNING *;