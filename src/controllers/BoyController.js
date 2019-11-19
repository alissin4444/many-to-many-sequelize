const Boy = require("../models/Boy");
const Status = require("../models/Status");

module.exports = {
    async index(req, res) {
        try {
            const boys = await Boy.findAll({
                include: [
                    {
                        model: Status,
                        as: 'status'
                    }
                ]
            });

            return res.json(boys);
        } catch (error) {
            return res.status(400).json(error)
        }
    },

    async store(req, res) {
        try {
            const { id } = req.params;
            const { name, idade } = req.body;

            const status = await Status.findByPk(id);

            if(!status) {
                return res.status(401).json({ error: "Status is not founded" })
            }

            const boy = await Boy.create({
                status_id: id,
                name, 
                idade
            });

            return res.json(boy);
        } catch (error) {
            console.log(error)
            return res.status(400).json(error)
        }
    },

    async show(req, res) {
        try {
            const { id } = req.params;

            const boy = await Boy.findByPk(id);

            return res.json(boy);
        } catch (error) {
            return res.status(400).json(error)
        }
    },

    async update(req, res) {
        try {
            const { id } = req.params;
            const { name, idade, status_id } = req.body;

            const boy = await Boy.findByPk(id);

            if(!boy) {
                return res.status(401).json({ error: "Boy is not founded "})
            };

            const status = await Status.findByPk(status_id);

            if(!status) {
                return res.status(401).json({ error: "Status is not founded" })
            }

            boy.name = name;
            boy.idade = idade;
            boy.status_id = status_id;
            boy.save();

            return res.json(boy);
        } catch (error) {
            return res.status(400).json(error)
        }
    },

    async destroy(req, res) {
        try {
            const { id } = req.params;

            await Boy.destroy({
                where: {
                    id
                }
            });

            return res.json({ status: "ok" });
        } catch (error) {
            return res.status(400).json(error)
        }
    }
}