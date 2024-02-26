import { OngInterface } from "../interface/ong.interface";
import OngModel from "../models/ong.model";






export async function createOng(value: OngInterface) {

    let newOng = OngModel.create(
        value
    );

    return newOng


}

export async function findOng(value: any) {
    const val = await OngModel.findOne({
        where: { id: value }
    })
    return val
}



export async function getallOng() {

    const Ong = await OngModel.findAll();
    return Ong;


}
export async function deleteOngid(id: number) {

    await OngModel.destroy({
        where: {
            id: id
        }
    });
    return id;

}
export async function getOngbyId(id: number) {

    const Ong = await OngModel.findByPk(id);
    return Ong;


}
export async function updatedOng(id: number, value: OngInterface) {
    const data = await OngModel.update(value, {
        where: {
            id: id
        }
    });
    return data;
}