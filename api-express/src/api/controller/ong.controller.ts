import { Request, Response } from "express";
import { createOng, deleteOngid, getOngbyId, getallOng, updatedOng } from "../service/ong.service";


export async function AddOng(
  req: Request,
  res: Response
) {
  try {
    const data = await createOng(req.body);
    return res.status(200).json(data);
  } catch (e: any) {
    console.log(e);
    return res.status(409).send(e.message);
  }
};

export async function updateOng(
  req: Request,
  res: Response
) {

  updatedOng(parseInt(req.params.id), req.body)
    .then(function (Ong) {
      return res.status(201).json(Ong)
    })
    .catch(function (err) {
      return res.status(500).json({ 'error': "impossible de mettre a jour l'Ong",err })
    })


}
export async function deleteOng(
  req: Request,
  res: Response
) {
  deleteOngid(parseInt(req.params.id))

    .then(function (delOng) {
      return res.status(201).json(delOng)
    })
    .catch(function (err) {
      return res.status(500).json({ 'error': "impossible de supprimer l'Ong" })
    })

}
export async function getAllOng(
  req: Request,
  res: Response
) {
  getallOng()
    .then(function (allOng) {
      return res.status(201).json(allOng)
    })
    .catch(function (err) {
      return res.status(500).json({ 'error': "impossible de retouner la liste des ONG", err })
    })
}
export async function getOngById(
  req: Request,
  res: Response
) {

  getOngbyId(parseInt(req.params.id))
    .then(function (Ong) {
      console.log(Ong);
      return res.status(201).json(Ong)
    })
    .catch(function (err) {
      return res.status(500).json({ 'error': "impossible de retouner la liste des ONG" })
    })


}





