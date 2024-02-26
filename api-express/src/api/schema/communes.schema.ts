import { number, object, string, TypeOf } from "zod";

/**
 * @openapi
 * components:
 *  schemas:
 *    CreateCommunesInput:
 *      type: object
 *      required:
 *        - codeCommunes
 *        - libelle
 *      properties:
 *        codeCommunes:
 *          type: string
 *          default: code
 *        libelle:
 *          type: string
 *          default: commune
 *    CreateCommunesResponse:
 *      type: object
 *      properties:
 *        codeCommunes:
 *          type: string
 *        libelle:
 *          type: string
 *        id:
 *          type: string
 *        createdAt:
 *          type: string
 *        updatedAt:
 *          type: string
 */

export const CreateCommuneSchema = object({
  body: object({
    codeCommunes: string({
      required_error: "le code est obligatoire",
    }),
    libelle: string({
        required_error: "le libelle est obligatoire",
      }),
  })

});

