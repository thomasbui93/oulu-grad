/**
 * Created by khoabui on 05/06/16.
 */
import Category from '../../models/category';

export default (childId, parentId, isRemove)=> {

    if (!isRemove) {
        if (parentId !== undefined && parentId !== null) {
            Category.findByIdAndUpdate(parentId,
                {
                    '$push': {
                        children: childId
                    }
                }, {upsert : false}, (errors, category)=>{
                    if(errors) console.log(errors);
                }
            );
        }
    } else {
        Category.findByIdAndUpdate(parentId,
            {
                '$pull': {
                    children: childId
                }
            }
        );
    }
}
