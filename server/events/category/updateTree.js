/**
 * Created by khoabui on 05/06/16.
 */
import Configuration from '../../models/config';
import Category from '../../models/category';
import {settingConvention} from '../../config/setting';

const traverseTreeAppend = (tree, category)=> {
    return tree.map((treeNode)=> {
        console.log(treeNode.id, category.parent)
        if (treeNode.id == category.parent) {

            treeNode.children.push({
                id: category._id,
                name: category.name,
                url: category.url,
                children: []
            });
        } else {
            if (treeNode.children.length > 0) {
                treeNode.children = traverseTreeAppend(treeNode.children, category);
            }
        }
        return treeNode;
    })
}

export default (category) => {
    Configuration.findOne({name: 'categoryTree'}, (errors, categoryTreeBlock)=> {

        if (errors || categoryTreeBlock === null) {
            let root = []
            root.push({
                id: category._id,
                name: category.name,
                url: category.url,
                children: []
            });
            const configTree = new Configuration({
                name: 'categoryTree',
                data: root
            })
            configTree.save();
        } else {
            let categoryTree = categoryTreeBlock.data;

            if (category.parent === undefined) {
                categoryTree.push({
                    id: category._id,
                    name: category.name,
                    url: category.url,
                    children: []
                })
            } else {
                categoryTree = traverseTreeAppend(categoryTree, category);
            }
            Configuration.update({_id: categoryTreeBlock._id}, {data: categoryTree}, (errors, categoryTree)=> {
                console.log('errors', errors);
            });
        }

    })
}

