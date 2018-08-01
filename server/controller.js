



module.exports = {
    allResorts: (req, res) => {
        const dbInstance = req.app.get('db');

        dbInstance.get_resorts().then(resorts => res.status(200).send(resorts))
        .catch( err => {
            res.status(500).send({errorMessage: 'not cool man!'})
            console.log(err)
        })
    },

    specificResort: (req, res) => {
        const dbInstance = req.app.get('db');
        const {params} = req;

        dbInstance.get_resort(params.id).then(resorts => res.status(200).send(resorts))
        .catch(err => {
            res.status(500).send({errorMessage: 'not cool man'})
            console.log(err)
        })
    }
}