var Submit = require('../models/index').submit;

//number of submission
//also be stamp of submitId
var submitCount = 0;

module.exports = {

    create(req, res){
        return Submit.create({
            submitId: submitCount++,
            problemTitle: req.body.problemTitle,
            codeFile: config.submitPath + id + '.cpp',
            status: 'Pending'
        })
        .then((submit) => res.send(submit))
        .catch((error) => res.send(error));
    },

    list(req, res){
        return Submit.findAll({
            attributes: ['submitId', 'problemTitle', 'addTime'],
            order: [
                ['submitId', 'DESC']
            ],
        })
        .then((submit) => res.send(submit))
        .catch((error) => res.send(error));
    },

    retrieve(req, res){
        return Submit.findOne({
            where: {submitId: req.params.submitId},
            attributes: ['submitId', 'problemTitle', 'addTime', 'codeFile', 'status']
        })
        .then((submit) => res.send(submit))
        .catch((error) => res.send(error));
    },

    //rejudge
    update(req, res){
        return Submit.findOne({
            where: {submitId: req.params.submitId},
            attributes: ['submitId', 'problemTitle', 'addTime', 'codeFile', 'status']
        })
        .then((submit) => {
            if(!submit){
                return res.status(404).send({
                    message: '找不到這筆留言',
                });
            }
            //rejudge
            //(not implemented)
        })
        .catch((error) => res.send(error));
    },

    destroy(req, res){
        return Submit.findOne({
            where: {submitId: req.params.submitId},
            attributes: ['submitId', 'problemTitle', 'addTime', 'codeFile', 'status']
        })
        .then((submit) => {
            if(!submit){
                return res.status(404).send({
                    message: '找不到這筆留言',
                });
            }
            return submit.destroy()
            .then(() => res.send('deleted'))
            .catch((error) => res.send(error));
        })
        .catch((error) => res.send(error));
    }
}