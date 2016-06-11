import Configurations from '../../../models/config';

const readAll = (req, res, next) =>{
    Configurations.find({}).exec((errors, configs) =>{
        if (errors) return next(errors);
        res.json(configs);
    });
}


export {readAll};
