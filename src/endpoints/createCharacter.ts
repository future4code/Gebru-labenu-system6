import { Request, Response } from "express"
import connection from "../connection";
import { characteres } from "../data/data";

export default async function createCharacter(
    req: Request,
    res: Response
) :Promise<void> {

    try{
        const { name, gender, description } = req.body;

        // characteres.push({
        //     id: Date.now(),
        //     name,
        //     gender,
        //     description
        // })

        await connection("characteres")
            .insert({name, gender, description})

        res.status(201).end();
    }catch(error){
        res.status(500).end()
    }
    
}