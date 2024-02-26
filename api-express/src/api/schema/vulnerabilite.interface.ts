import { number, object, string, TypeOf } from "zod";

/**
 * @openapi
 * components:
 *  schemas:
 *    CreateVulnerabiliteInput:
 *      type: object
 *      required:
 *        - nom
 *        - description
 *      properties:
 *        nom:
 *          type: string
 *          default: vulnerabilite
 *        description:
 *          type: string
 *          default: description
 *    CreateVulnerabiliteResponse:
 *      type: object
 *      properties:
 *        nom:
 *          type: string
 *        description:
 *          type: string
 *        id:
 *          type: string
 *        createdAt:
 *          type: string
 *        updatedAt:
 *          type: string
 */

export const CreateVulnerabiliteSchema = object({
  body: object({
    nom: string({
      required_error: "le noms est obligatoire",
    }),
    description: string({
        required_error: "la description est obligatoire",
      }),
  })

});

