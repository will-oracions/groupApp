import { number, object, string, TypeOf } from "zod";

/**
 * @openapi
 * components:
 *  schemas:
 *    CreateProductInput:
 *      type: object
 *      required:
 *        - noms
 *        - prix_unitaire
 *        - quantite
 *        - unite
 *        - reference
 *      properties:
 *        noms:
 *          type: string
 *          default: ciment
 *        prix_unitaire:
 *          type: integer
 *          default: 1000
 *        quantite:
 *          type: integer
 *          default: 1
 *        reference:
 *          type: string
 *          default: materiel
 *        unite:
 *          type: string
 *          default: litre
 *    CreateProductResponse:
 *      type: object
 *      properties:
 *        noms:
 *          type: string
 *        prix_unitaire:
 *          type: integer
 *        quantite:
 *          type: integer
 *        reference:
 *          type: string
 *        unite:
 *          type: string
 *        id:
 *          type: string
 *        createdAt:
 *          type: string
 *        updatedAt:
 *          type: string
 */

export const CreateProductSchema = object({
  body: object({
    noms: string({
      required_error: "Name is required",
    }),
    prix_unitaire: number({
      required_error: "the unit price is required",
    }),
    quantite: number({
      required_error: "Quantity is required",
    }),
    unite: string({
        required_error: "unity is required",
      }),
  })

});

