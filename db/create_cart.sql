INSERT INTO carts (restaurant_id, customer_id)
VALUES ($1,(SELECT id from customer_profiles WHERE user_id = $2))
RETURNING *;