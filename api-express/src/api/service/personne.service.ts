import { PersonneInterface } from "../interface/personne.interface";
import PersonnesModel from "../models/personnes.model";





export async function createPersonne(value: PersonneInterface) {

    let newPersonne = PersonnesModel.create(
        value
    );

    return newPersonne


}

export async function findPersonne(value: any) {
    const val = await PersonnesModel.findOne({
        where: { id: value }
    })
    return val
}



export async function getallPersonne() {

    const Personne = await PersonnesModel.findAll();
    return Personne;


}
export async function deletePersonneid(id: string) {

    await PersonnesModel.destroy({
        where: {
            id: id
        }
    });
    return id;

}
export async function getPersonnebyId(id: number) {

    const Personne = await PersonnesModel.findByPk(id);
    return Personne;


}
export async function updatedPersonne(id: string, value: PersonneInterface) {
    const data = await PersonnesModel.update(value, {
        where: {
            id: id
        }
    });
    return data;
}