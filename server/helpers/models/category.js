import Category from '../../models/category';
import shortid from 'shortid';

const generateURL = (parentId, name) => {
    if(parentId === null || parentId === undefined || parentId === ''){
        return name + '-'+ shortid.generate();
    }else {
        return new Promise((resolve, reject)=>{
            Category.findOne({_id: parentId}, (errors, category) => {
                if(errors) {
                    reject(errors);
                }else {
                    resolve(category.url + '/'+ name + '-'+shortid.generate());
                }
            });
        })
    }
}

export { generateURL };