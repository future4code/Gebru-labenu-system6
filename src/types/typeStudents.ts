export type HobbiesDetail = {
   description: string
}

export type studentsType = {
   id: number | string,
   nome: string,
   email: string,
   data_nasc: string,
   turma_id: string,
   hobbies: HobbiesDetail[]
}