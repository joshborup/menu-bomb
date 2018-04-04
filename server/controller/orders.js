module.exports = {
    customer: (req, res) => {
        const db = req.app.get('db');
        const { customerId } = req.query;
        console.log(customerId);
        db.get_orders_by_customer_id(customerId).then(response => {
            console.log(response)
            res.status(200).send(response)
        }).catch(error => console.log(error));
    }
}