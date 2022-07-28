export type Turma = {
    turma: string
}

export type Specialyt = {
    especialidade: string
}

export type teacherType = {
    id: string,
    nome: string,
    email: string,
    data_nasc: string,
    turma_id: Turma[],
    especialidades: Specialyt[]
 }