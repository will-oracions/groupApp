import { number, object, string, TypeOf } from "zod";

/**
 * @openapi
 * components:
 *  schemas:
 *    CreateOngInput:
 *      type: object
 *      required:
 *        - raisonSociale
 *      properties:
 *        raisonSociale:
 *          type: string
 *          default: rasion
 *    CreateOngResponse:
 *      type: object
 *      properties:
 *        raisonSociale:
 *          type: string
 *        id:
 *          type: string
 *        createdAt:
 *          type: string
 *        updatedAt:
 *          type: string
 */

export const CreateOngSchema = object({
  body: object({
    raisonSociale: string({
      required_error: "la raison social est obligatoire",
    })
  })

});

