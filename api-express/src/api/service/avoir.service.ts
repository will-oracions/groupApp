import AvoirVulnerabilite from "../models/avoirvulnerabilite.model";






export async function createAvoir(value: any) {

    let newAvoir = AvoirVulnerabilite.create(
        value
    );

    return newAvoir


}

export async function findAvoir(value: any) {
    const val = await AvoirVulnerabilite.findOne({
        where: { id: value }
    })
    return val
}



export async function getallAvoir() {

    const Avoir = await AvoirVulnerabilite.findAll();
    return Avoir;


}
export async function deleteAvoirid(id: number) {

    await AvoirVulnerabilite.destroy({
        where: {
            id: id
        }
    });
    return id;

}

export async function updatedAvoir(id: number, value: any) {
    const data = await AvoirVulnerabilite.update(value, {
        where: {
            id: id
        }
    });
    return data;
}