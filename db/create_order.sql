INSERT INTO orders (restaurant_id, customer_id, total, sub_total, sales_tax)
VALUES ($1, (SELECT id FROM customer_profiles WHERE user_id = $2), $3, $4, $5)
RETURNING *;