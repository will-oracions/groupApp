import { ResidenceInterface } from "../interface/residence.interface";
import ResidenceModel from "../models/residence.model";



export async function createResidence(value: ResidenceInterface) {

    let newResidence = ResidenceModel.create(
        value
    );

    return newResidence


}

export async function findResidence(value: any) {
    const val = await ResidenceModel.findOne({
        where: { id: value }
    })
    return val
}



export async function getallResidence() {

    const Residence = await ResidenceModel.findAll();
    return Residence;


}
export async function deleteResidenceid(id: string) {

    await ResidenceModel.destroy({
        where: {
            id: id
        }
    });
    return id;

}
export async function getResidencebyId(id: number) {

    const Residence = await ResidenceModel.findByPk(id);
    return Residence;


}
export async function updatedResidence(id: string, value: ResidenceInterface) {
    const data = await ResidenceModel.update(value, {
        where: {
            id: id
        }
    });
    return data;
}