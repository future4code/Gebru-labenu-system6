import { studentsType } from "../types/typeStudents";

export let DataStudent: studentsType[] = [
    {
        id: '1',
        nome: 'Lucas Coimbra',
        email: 'lucascoimbra@gmail.com',
        data_nasc: '03/05/1997',
        turma_id: '1',
        hobbies: [
            {
                description: 'Assistir Anime'
            },
            {
                description: 'Ler novels'
            },
            {
                description: 'Passear em parques'
            },

        ]
    }
]