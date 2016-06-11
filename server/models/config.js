
import mongoose  from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

let Schema = mongoose.Schema;

let Configuration = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    data: {
        type: Schema.Types.Mixed
    }
});

Configuration.plugin(uniqueValidator);

export default mongoose.model('WebConfig',  Configuration);