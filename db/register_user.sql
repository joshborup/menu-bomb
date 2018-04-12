INSERT INTO users ( email, phone, address_1, address_2, first_name, last_name, password, user_type ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
RETURNING *;