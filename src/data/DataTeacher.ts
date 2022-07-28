import { teacherType } from "../types/typeTeacher";

export let DataTeacher: teacherType[] = [
    {
        id: '1',
        nome: 'Fulano de Tal',
        email: 'FulanodeTal@gmail.com',
        data_nasc: '01/01/2000',
        turma_id: [
            {
                turma: '1'
            },
            {
                turma: '2'
            }
        ],
        especialidades: [
            {
                especialidade: 'JS',
            },
            {
                especialidade: 'CSS',
            },
            {
                especialidade: 'HTML',
            }

        ]
    }
]