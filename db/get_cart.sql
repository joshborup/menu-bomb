SELECT id FROM carts WHERE 
customer_id = (SELECT id from customer_profiles WHERE user_id = $1);