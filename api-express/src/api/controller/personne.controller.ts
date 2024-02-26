import { Request, Response } from "express";
import { createPersonne, deletePersonneid, getPersonnebyId, getallPersonne, updatedPersonne } from "../service/personne.service";


export async function AddPersonne(
  req: Request,
  res: Response
) {
  try {
    const data = await createPersonne(req.body);
    return res.status(200).json(data);
  } catch (e: any) {
    console.log(e);
    return res.status(409).send(e.message);
  }
};

export async function updatePersonne(
  req: Request,
  res: Response
) {

  updatedPersonne(req.params.id, req.body)
    .then(function (Personne) {
      return res.status(201).json(Personne)
    })
    .catch(function (err) {
      return res.status(500).json({ 'error': "impossible de mettre a jour la Personne",err })
    })


}
export async function deletePersonne(
  req: Request,
  res: Response
) {
  deletePersonneid(req.params.id)

    .then(function (delPersonne) {
      return res.status(201).json(delPersonne)
    })
    .catch(function (err) {
      return res.status(500).json({ 'error': "impossible de supprimer la Personne" })
    })

}
export async function getAllPersonne(
  req: Request,
  res: Response
) {
  getallPersonne()
    .then(function (allPersonne) {
      return res.status(201).json(allPersonne)
    })
    .catch(function (err) {
      return res.status(500).json({ 'error': "impossible de retouner la liste des Personnes", err })
    })
}
export async function getPersonneById(
  req: Request,
  res: Response
) {

  getPersonnebyId(parseInt(req.params.id))
    .then(function (Personne) {
      console.log(Personne);
      return res.status(201).json(Personne)
    })
    .catch(function (err) {
      return res.status(500).json({ 'error': "impossible de retouner la liste des Personnes" })
    })


}





