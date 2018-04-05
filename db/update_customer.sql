UPDATE users
SET email = $1,
    first_name = $2,
    last_name = $3
WHERE id = $4
RETURNING *;