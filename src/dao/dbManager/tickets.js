
import logger from "../../logger/logger.js";
import ticketModel from "../models/tickets.js";

export default class Tickets {
    constructor() {
        logger.info("Working tickets with DB in mongoDB");
      }

    getAll = async () => {
        try {
            let products = await ticketModel.find();
            return products;
        }
        catch (error) {
            console.log(error);
            return null;
        }

    }

    getOne = async (id) => {
        try {
            let product = await ticketModel.findOne({ _id: id });
            return product;
        }
        catch (error) {
            console.log(error);
            return null;
        }

    }

    createTicket = async (ticket) => {
        try {
            let result = await ticketModel.create(ticket);
            return result;
        }
        catch (error) {
            console.log(error);
            return null;
        }

    }

    resolveTicket = async (id, ticket) => {
        try {
            let updateTicket = await ticketModel.updateOne({ _id: id }, { $set: ticket });
            return updateTicket;
        }   
        catch (error) {
            console.log(error);
            return null;
        }
    }

    createCode = async () => {
        try {
            let isCodeUnique = false;
            let ticketCode;
            // Generar código autogenerado único para el ticket
            while (!isCodeUnique) {
                ticketCode = Math.random().toString(36).substring(2, 8).toUpperCase();
                const existingTicket = await ticketModel.findOne({ code:ticketCode });
                if (!existingTicket) {
                    isCodeUnique = true;
                }
            }
            return ticketCode;
        }
        catch (error) {
            console.log(error);
            return null
        }
    }

}