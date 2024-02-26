import { Request, Response } from "express";
import { createAgents, deleteAgentsid, getAgentsbyId, getallAgents, updatedAgents } from "../service/agents.service";


export async function AddAgents(
  req: Request,
  res: Response
) {
  try {
    const data = await createAgents(req.body);
    return res.status(200).json(data);
  } catch (e: any) {
    console.log(e);
    return res.status(409).send(e.message);
  }
};

export async function updateAgents(
  req: Request,
  res: Response
) {

  updatedAgents(req.params.id, req.body)
    .then(function (Agents) {
      return res.status(201).json(Agents)
    })
    .catch(function (err) {
      return res.status(500).json({ 'error': "impossible de mettre a jour le Agents",err })
    })


}
export async function deleteAgents(
  req: Request,
  res: Response
) {
  deleteAgentsid(req.params.id)

    .then(function (delAgents) {
      return res.status(201).json(delAgents)
    })
    .catch(function (err) {
      return res.status(500).json({ 'error': "impossible de supprimer le Agents" })
    })

}
export async function getAllAgents(
  req: Request,
  res: Response
) {
  getallAgents()
    .then(function (allAgents) {
      return res.status(201).json(allAgents)
    })
    .catch(function (err) {
      return res.status(500).json({ 'error': "impossible de retouner la liste des Agents", err })
    })
}
export async function getAgentsById(
  req: Request,
  res: Response
) {

  getAgentsbyId(parseInt(req.params.id))
    .then(function (Agents) {
      console.log(Agents);
      return res.status(201).json(Agents)
    })
    .catch(function (err) {
      return res.status(500).json({ 'error': "impossible de retouner la liste des Agents" })
    })


}





