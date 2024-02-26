import { VulnerabiliteInterface } from "../interface/vulnerabilite.interface";
import VulnerabiliteModel from "../models/vulnerabilite.model";





export async function createVulnerabilite(value: VulnerabiliteInterface) {

    let newVulnerabilite = VulnerabiliteModel.create(
        value
    );

    return newVulnerabilite


}

export async function findVulnerabilite(value: any) {
    const val = await VulnerabiliteModel.findOne({
        where: { id: value }
    })
    return val
}



export async function getallVulnerabilite() {

    const Vulnerabilite = await VulnerabiliteModel.findAll();
    return Vulnerabilite;


}
export async function deleteVulnerabiliteid(id: string) {

    await VulnerabiliteModel.destroy({
        where: {
            id: id
        }
    });
    return id;

}
export async function getVulnerabilitebyId(id: number) {

    const Vulnerabilite = await VulnerabiliteModel.findByPk(id);
    return Vulnerabilite;


}
export async function updatedVulnerabilite(id: string, value: VulnerabiliteInterface) {
    const data = await VulnerabiliteModel.update(value, {
        where: {
            id: id
        }
    });
    return data;
}