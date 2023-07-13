import logger from "../../logger/logger.js";
import messagesModel from "../models/messages.js";

export default class Carts {
    constructor() {
        logger.info("Working tickets with DB in mongoDB");
      }
    getAll = async() => {
        let messages = await messagesModel.find().lean();
        return messages;
    }

    saveMessage = async(message) => {
        let result = await messagesModel.create(message);
        return result;
    }


}