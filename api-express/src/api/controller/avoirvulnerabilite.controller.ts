import { Request, Response } from "express";
import { createAvoir, deleteAvoirid, getallAvoir, updatedAvoir } from "../service/avoir.service";


export async function AddAvoir(
  req: Request,
  res: Response
) {
  try {
    const data = await createAvoir(req.body);
    return res.status(200).json(data);
  } catch (e: any) {
    console.log(e);
    return res.status(409).send(e.message);
  }
};

export async function updateAvoir(
  req: Request,
  res: Response
) {

  updatedAvoir(parseInt(req.params.id), req.body)
    .then(function (Avoir) {
      return res.status(201).json(Avoir)
    })
    .catch(function (err) {
      return res.status(500).json({ 'error': "impossible de mettre a jour la Commune",err })
    })


}
export async function deleteAvoir(
  req: Request,
  res: Response
) {
  deleteAvoirid(parseInt(req.params.id))

    .then(function (delAvoir) {
      return res.status(201).json(delAvoir)
    })
    .catch(function (err) {
      return res.status(500).json({ 'error': "impossible de supprimer la Commune" })
    })

}
export async function getAllAvoir(
  req: Request,
  res: Response
) {
  getallAvoir()
    .then(function (allAvoir) {
      return res.status(201).json(allAvoir)
    })
    .catch(function (err) {
      return res.status(500).json({ 'error': "impossible de retouner la liste des Avoir", err })
    })
}




