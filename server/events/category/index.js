import EventEmitter from 'events';
import updateTree from './updateTree';
import updateParent from './updateParent';

class CategoryEvent extends EventEmitter{}

const categoryEvent = new CategoryEvent();

categoryEvent.on('new category', (category)=>{

    if(category.parent !== null && category.parent !== undefined){
        updateParent(category._id, category.parent, false);
    }
    updateTree(category);
});

export default categoryEvent;

