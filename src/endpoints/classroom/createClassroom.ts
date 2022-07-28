import { Request, Response } from "express";
import { ClassroomType } from "../../types/typeClassroom";

export const createClassroom = async (
    req: Request,
    res: Response
) => {
    let errorCode = 500;

    try {
        const {nome, docentes, estudantes} = req.body;

        if(!nome || !docentes || !estudantes){
            errorCode = 422;
            throw new Error("Está faltando parâmetros no cadastro!");
        }

        const id: string = Date.now().toString();

        const insertClassroom: ClassroomType = {
            id,
            nome,
            docentes,
            estudantes,
            modulo: 0
        }


        res.status(201).send({message: "Turma Criada com sucesso!"});
    } catch (error: any) {
        res.status(errorCode).send(error.message);
    }
}