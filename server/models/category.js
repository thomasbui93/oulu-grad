
import mongoose  from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';
import categoryEvent from '../events/category';
import { generateURL } from '../helpers/models/category';

let Schema = mongoose.Schema;

let Category = new Schema({
    name: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true,
        unique: true
    },
    children: [{
        type: [Schema.Types.ObjectId],
        refs: 'Category'
    }],
    parent: {
        type: Schema.Types.Mixed
    },
    description:{
        type: String
    },
    createAt: {
        type: Date,
        default: Date.now
    }
});

Category.plugin(uniqueValidator);

Category.pre((next) => {
    if(this.parent === undefined){
        this.parent = null;
        next();
    }else {
        Category.findOne(this.parent, (errors, category)=>{
            if(errors){
                next(errors);
            }else {
                next();
            }
        })
    }
});

Category.post('save', (category, next)=>{
    categoryEvent.emit('new category', category);
    next();
});

export default mongoose.model('Category',  Category );