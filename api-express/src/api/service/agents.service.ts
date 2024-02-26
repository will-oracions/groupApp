import { AgentsInterface } from "../interface/agents.interface";
import AgentsModel from "../models/agents.model";






export async function createAgents(value: AgentsInterface) {

    let newAgents = AgentsModel.create(
        value
    );

    return newAgents


}

export async function findAgents(value: any) {
    const val = await AgentsModel.findOne({
        where: { id: value }
    })
    return val
}



export async function getallAgents() {

    const Agents = await AgentsModel.findAll();
    return Agents;


}
export async function deleteAgentsid(id: string) {

    await AgentsModel.destroy({
        where: {
            id: id
        }
    });
    return id;

}
export async function getAgentsbyId(id: number) {

    const Agents = await AgentsModel.findByPk(id);
    return Agents;


}
export async function updatedAgents(id: string, value: AgentsInterface) {
    const data = await AgentsModel.update(value, {
        where: {
            id: id
        }
    });
    return data;
}