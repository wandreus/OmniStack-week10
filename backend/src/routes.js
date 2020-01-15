const {Router} = require('express')
const DevController = require('./controllers/DevController')
const SearchController = require('./controllers/SearchController')

const routes = Router()

// Controlles params:
// index, show, store, update, destroy

routes.get('/devs', DevController.index)
routes.get('/search', SearchController.index)

routes.post('/devs', DevController.store)

module.exports = routes