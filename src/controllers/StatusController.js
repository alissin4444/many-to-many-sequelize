const Status = require("../models/Status");

module.exports = {
    async index(req, res) {
        try {
            const status = await Status.findAll();
            return res.json(status)
        } catch (error) {
            return res.status(400).json(error)
        }
    },

    async store(req, res) {
        try {
            const { description } = req.body;

            const status = await Status.findOrCreate({
                where: {
                    description
                }
            })

            return res.json(status);
        } catch (error) {
            console.log(error)
            return res.status(400).json(error)
        }
    },

    async show(req, res) {
        try {
            const { id } = req.params;

            const status = await Status.findByPk(id);

            return res.json(status);
        } catch (error) {
            return res.status(400).json(error)
        }
    },

    async update(req, res) {
        try {
            const { id } = req.params;
            const { description } = req.body;

            const status = await Status.findByPk(id);
            
            if(!id) {
                return res.status(400).json({ error: "Status isn't founded" })
            }

            status.description = description;
            status.save();

            return res.json(status)
        } catch (error) {
            return res.status(400).json(error)
        }
    },

    async destroy(req, res) {
        try {
            const { id } = req.params;

            await Status.destroy({
                where: {
                    id
                }
            });

            return res.json({ status: "ok" });
        } catch (error) {
            return res.status(400).json(error)
        }
    },
}