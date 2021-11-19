const Clarifai = require('clarifai')

const app = new Clarifai.App({
    apiKey: '1a8f92632a894777a5183f0039e4da00'
})

const handleApiCall = (req, res) => {
    app.models
    .predict(Clarifai.FACE_DETECT_MODEL, req.body.input)
    .then(data =>{
        req.json(data)
    })
    .catch(err=> res.status(400).json('unable to work with api'))
}

const handlerImage = db => (req, res) => {
    const { id } = req.body
    db('users').where('id', '=', id)
        .increment('entries', 1)
        .returning('entries')
        .then(entries => {
            res.json(entries[0])
        })
        .catch(err => res.status(400).json('enable to get entries'))
}

modele.exports = {
    handleApiCall,
    handlerImage
}