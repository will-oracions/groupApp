import { RoleInterface } from "../interface/role.interface";
import RolesModel from "../models/roles.models";


export async function createRole(value: RoleInterface) {

    let newRole = RolesModel.create(
        value
    );

    return newRole


}

export async function findRole(value: any) {
    const val = await RolesModel.findOne({
        where: { id: value }
    })
    return val
}



export async function getallRole() {

    const Role = await RolesModel.findAll();
    return Role;


}
export async function deletRoleid(id: string) {

    await RolesModel.destroy({
        where: {
            id: id
        }
    });
    return id;

}
export async function getRolebyId(id: number) {

    const Role = await RolesModel.findByPk(id);
    return Role;


}
export async function updatedRole(id: string, value: RoleInterface) {
    const data = await RolesModel.update(value, {
        where: {
            id: id
        }
    });
    return data;
}