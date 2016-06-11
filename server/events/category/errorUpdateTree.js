import Category from '../../models/category';

export default (categoryId)=>{
    Category.remove({_id: categoryId}, (errors, category)=>{
        console.log(errors, category);
    });
}