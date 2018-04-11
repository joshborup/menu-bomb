INSERT INTO customer_profiles (user_id)
VALUES ($1)
RETURNING *;