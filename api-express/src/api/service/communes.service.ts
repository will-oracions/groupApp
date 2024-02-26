import { CommunesInterface } from "../interface/communes.interface";
import CommunesModel from "../models/communes.model";

const exceljs = require('exceljs');





export async function createCommunes(value: CommunesInterface) {

    let newCommunes = CommunesModel.create(
        value
    );

    return newCommunes


}

export async function findCommunes(value: any) {
    const val = await CommunesModel.findOne({
        where: { id: value }
    })
    return val
}



export async function getallCommunes() {

    const Communes = await CommunesModel.findAll();
    return Communes;


}
export async function deleteCommunesid(id: number) {

    await CommunesModel.destroy({
        where: {
            id: id
        }
    });
    return id;

}
export async function getCommunesbyId(id: number) {

    const Communes = await CommunesModel.findByPk(id);
    return Communes;


}
export async function updatedCommunes(id: number, value: CommunesInterface) {
    const data = await CommunesModel.update(value, {
        where: {
            id: id
        }
    });
    return data;
}
export async function importsCommunes(params:any) {
    const fileBuffer = params.buffer;
    console.log(fileBuffer);
    let data: { code: any; libelle: any; }[] = [];
    const workbook = new exceljs.Workbook();

    await workbook.xlsx.load(fileBuffer);

    const worksheet = workbook.getWorksheet(1);

    worksheet.eachRow(async (row:any, rowNumber:any) => {
      // Traitez chaque ligne et sauvegardez les données dans la base de données
      const code = row.getCell(2).value.result; // En supposant que le nom soit dans la première colonne
      const libelle = row.getCell(3).value; // En supposant que le nom soit dans la première colonne
        console.log(code, libelle)
        
        if(code && libelle){
            const value ={
                "code": code,
                "libelle": libelle
            }
            data.push(value);
                  // Sauvegardez dans la base de données en utilisant Sequelize

        }

    });
    for( let i =0 ; i < data.length; i++){
        await CommunesModel.create( data[i] );


    }
    return "ok";
    
}