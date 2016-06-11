import Category from '../../../models/category';
import { generateURL } from '../../../helpers/models/category';

const readAll = (req, res, next) =>{
    Category.find({}).exec((errors, categories) =>{
        if (errors) return next(errors);

        res.json(categories);
    });
}

const readOne =  (req, res, next) => {
    const categoryId = req.params.id;

    Category.find({_id: categoryId }).exec( (errors, category) =>{
        if (errors) return next(errors);

        res.json(category);
    });
}

const createOne = (req, res, next) => {
    let categoryData = req.body;

    const parentId = req.body.parent;
    const categoryName = req.body.name;
    
    if(parentId === undefined){
        categoryData.url = generateURL(null, categoryData.name);
        let category = new Category(categoryData);
        category.save((errors, category) =>{
            if (errors) return next(errors);
            res.json(category);
        });
    }else {
        generateURL(parentId, categoryName).then((url)=> {
            categoryData.url = url;
            let category = new Category(categoryData);
            category.save((errors, category) =>{
                if (errors) return next(errors);
                res.json(category);
            });
        }, (error)=>{
            res.json(error);
        });
    }
};

const updateOne = () => {

};

const removeOne = () => {

};

const sample =  (req, res, next) =>{
    const sample = new Category({
        name: 'sample',
        url: 'sample',
        children: [],
        parent: ''
    });
    
    sample.save((errors, category)=>{
        if (errors) return next(errors);

        res.json(category);
    });
}


export {readAll, readOne, createOne, updateOne, removeOne, sample};