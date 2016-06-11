import EventEmitter from 'events';
import updateTree from './updateTree';
import updateParent from './updateParent';
import errorUpdateTree from './errorUpdateTree';

class CategoryEvent extends EventEmitter{}

const categoryEvent = new CategoryEvent();

categoryEvent.on('new category', (category)=>{

    if(category.parent !== null && category.parent !== undefined){
        updateParent(category._id, category.parent, false);
    }
    updateTree(category);
});

categoryEvent.on('error update tree', errorUpdateTree);

export default categoryEvent;

