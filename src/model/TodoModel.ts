import mongoose,{Schema} from 'mongoose';
import { Message } from '../config/constant';
import { TodoRequest } from '../dtos/TodoRequest';

const schema = new mongoose.Schema<TodoRequest>({
    title:{
        type:String,
        required:[true,Message.TITLE_ERROR]
    },
    isComplete:{
        type:Boolean,
        default:false
    },
    description:{
        type:String,
        default:""
    },
    user:{
        type:Schema.Types.ObjectId,
        ref:'User',
        required:true
    }
},{timestamps:true});

export const Todo = mongoose.model("Todo",schema);