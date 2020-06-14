var Problem = require('../models/index').problem;

module.exports = {

    create(req, res){
        return Problem.create({
            problemId: req.body.problemId,
            title: req.body.title,
            statement: req.body.statement,
            sampleInput: req.body.sampleInput,
            sampleOutput: req.body.sampleOutput,
            testInputFile: config.testInputPath + id,
            testOutputFile: config.testOutputPath + id,
        })
        .then((problem) => res.send(problem))
        .catch((error) => res.send(error));
    },

    list(req, res){
        return Problem.findAll({
            attributes: ['problemId', 'title'],
            order: [
                ['problemId', 'ASC']
            ],
        })
        .then((problem) => res.send(problem))
        .catch((error) => res.send(error));
    },

    retrieve(req, res){
        return Problem.findOne({
            where: {problemId: req.params.problemId},
            attributes: ['problemId', 'title', 'statement', 'sampleInput', 'sampleOutput']
        })
        .then((problem) => res.send(problem))
        .catch((error) => res.send(error));
    },

    update(req, res){
        return Problem.findOne({
            where: {problemId: req.params.problemId},
            attributes: ['problemId', 'title', 'statement', 'sampleInput', 'sampleOutput']
        })
        .then((problem) => {
            if(!problem){
                return res.status(404).send({
                    message: '找不到這筆留言',
                });
            }
            return problem.update({
                problemId: req.body.problemId || problem.problemId,
                title: req.body.title || problem.title,
                statement: req.body.statement || problem.statement,
                sampleInput: req.body.sampleInput || problem.sampleInput,
                sampleOutput: req.body.sampleOutput || problem.sampleOutput,
            })
            .then((problem) => res.send(problem))
            .catch((error) => res.send(error));
        })
        .catch((error) => res.send(error));
    },

    destroy(req, res){
        return Problem.findOne({
            where: {problemId: req.params.problemId},
            attributes: ['problemId', 'title', 'statement', 'sampleInput', 'sampleOutput']
        })
        .then((problem) => {
            if(!problem){
                return res.status(404).send({
                    message: '找不到這筆留言',
                });
            }
            return problem.destroy()
            .then(() => res.send())
            .catch((error) => res.send(error));
        })
        .catch((error) => res.send(error));
    }
};