const axios = require('axios')
const Dev = require('../models/Dev')
const parseStringAsArray = require('../utils/parseStringAsArray')

module.exports = {

	async index(req, res) {
		const devs = await Dev.find()

		return res.json(devs)
	},

	async store(req, res) {
		const { github_username, techs, latitude, longitude } = req.body

		let dev = await Dev.findOne({ github_username })

		if (!dev) {
			const github = await axios.get(`https://api.github.com/users/${github_username}`)

			const { name = login, avatar_url, bio } = github.data

			const textArray = parseStringAsArray(techs)

			const location = {
				type: 'Point',
				coordinates: [longitude, latitude]
			}

			dev = await Dev.create({
				techs: textArray,
				name,
				github_username,
				avatar_url,
				bio,
				location
			})

		}


		return res.json(dev)
	}
}