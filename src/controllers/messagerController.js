import Messages from "../dao/dbManager/messages.js";
import logger from "../logger/logger.js";
const messagesManager = new Messages();

export const getAllMessage = async(req,res)=>{
    try{
        let messages = await messagesManager.getAll();
        res.send({status:"success" , payload:messages})
    }
    catch(err){
        logger.error(error);
        console.log(err);
    }
}

export default  getAllMessage
