import { Request, Response } from "express";
import { createQuartier, deleteQuartierid, getQuartierbyId, getallQuartier, updatedQuartier } from "../service/quartiers.service";


export async function AddQuartier(
  req: Request,
  res: Response
) {
  try {
    const data = await createQuartier(req.body);
    return res.status(200).json(data);
  } catch (e: any) {
    console.log(e);
    return res.status(409).send(e.message);
  }
};

export async function updateQuartier(
  req: Request,
  res: Response
) {

  updatedQuartier(req.params.id, req.body)
    .then(function (Quartier) {
      return res.status(201).json(Quartier)
    })
    .catch(function (err) {
      return res.status(500).json({ 'error': "impossible de mettre a jour le Quartier",err })
    })


}
export async function deleteQuartier(
  req: Request,
  res: Response
) {
  deleteQuartierid(req.params.id)

    .then(function (delQuartier) {
      return res.status(201).json(delQuartier)
    })
    .catch(function (err) {
      return res.status(500).json({ 'error': "impossible de supprimer le Quartier" })
    })

}
export async function getAllQuartier(
  req: Request,
  res: Response
) {
  getallQuartier()
    .then(function (allQuartier) {
      return res.status(201).json(allQuartier)
    })
    .catch(function (err) {
      return res.status(500).json({ 'error': "impossible de retouner la liste des Quartiers", err })
    })
}
export async function getQuartierById(
  req: Request,
  res: Response
) {

  getQuartierbyId(parseInt(req.params.id))
    .then(function (Quartier) {
      console.log(Quartier);
      return res.status(201).json(Quartier)
    })
    .catch(function (err) {
      return res.status(500).json({ 'error': "impossible de retouner la liste des Quartiers" })
    })


}





