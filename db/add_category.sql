INSERT INTO categories (restaurant_id, category)
VALUES ($1, $2)
RETURNING *;