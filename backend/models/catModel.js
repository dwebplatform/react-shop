import mongoose from 'mongoose';

const catSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    }   
},{
    timestamps: true
});
 

const Cat = mongoose.model('Cat',catSchema);

export default Cat;