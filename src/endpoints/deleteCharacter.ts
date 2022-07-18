import {  Request, Response } from "express";
import connection from "../connection";
import { characteres } from "../data/data";

export default async function deleteCharacter(
    req: Request,
    res: Response
) :Promise<void> {

    try{
        const { id } = req.params;

        // const index: number = characteres.findIndex(
        //     character => character.id === Number(id)
        // );

        // if(index > -1){
        //     characteres.splice(index, 1);
        // }

        await connection("characteres")
            .delete()
            .where({ id })
        
        res.status(201).end();
    }catch(error){
        res.status(500).send("Unexpected server error")
    }
    
}