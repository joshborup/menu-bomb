module.exports = {
    update: (req, res) => {
        const db = req.app.get('db');
        const {firstName, lastName, email} = req.body;
        db.update_customer([email, firstName, lastName, req.session.user.id]).then(response => {
            res.status(200).send(response)
        })
    }
}