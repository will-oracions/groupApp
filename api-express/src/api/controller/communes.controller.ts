import { Request, Response } from "express";
import { createCommunes, deleteCommunesid, getCommunesbyId, getallCommunes, importsCommunes, updatedCommunes } from "../service/communes.service";


export async function AddCommunes(
  req: Request,
  res: Response
) {
  try {
    const data = await createCommunes(req.body);
    return res.status(200).json(data);
  } catch (e: any) {
    console.log(e);
    return res.status(409).send(e.message);
  }
};

export async function updateCommunes(
  req: Request,
  res: Response
) {

  updatedCommunes(parseInt(req.params.id), req.body)
    .then(function (Communes) {
      return res.status(201).json(Communes)
    })
    .catch(function (err) {
      return res.status(500).json({ 'error': "impossible de mettre a jour la Commune",err })
    })


}
export async function deleteCommunes(
  req: Request,
  res: Response
) {
  deleteCommunesid(parseInt(req.params.id))

    .then(function (delCommunes) {
      return res.status(201).json(delCommunes)
    })
    .catch(function (err) {
      return res.status(500).json({ 'error': "impossible de supprimer la Commune" })
    })

}
export async function getAllCommunes(
  req: Request,
  res: Response
) {
  getallCommunes()
    .then(function (allCommunes) {
      return res.status(201).json(allCommunes)
    })
    .catch(function (err) {
      return res.status(500).json({ 'error': "impossible de retouner la liste des Communes", err })
    })
}
export async function getCommunesById(
  req: Request,
  res: Response
) {

  getCommunesbyId(parseInt(req.params.id))
    .then(function (Communes) {
      console.log(Communes);
      return res.status(201).json(Communes)
    })
    .catch(function (err) {
      return res.status(500).json({ 'error': "impossible de retouner la liste des Communes" })
    })


}


export async function importCommunes(
  req: Request,
  res: Response
) {

  importsCommunes(req.file)
    .then(function (Communes) {
      return res.status(201).json(Communes)
    })
    .catch(function (err) {
      return res.status(500).json({ 'error': "impossible de mettre a jour la Commune",err })
    })


}


