INSERT INTO carts (restaurant_id, customer_id)
VALUES ($1,$2)
RETURNING *;