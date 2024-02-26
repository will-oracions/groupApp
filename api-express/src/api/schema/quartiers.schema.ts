import { number, object, string, TypeOf } from "zod";

/**
 * @openapi
 * components:
 *  schemas:
 *    CreateQuartierInput:
 *      type: object
 *      required:
 *        - libelle
 *        - idCommunes
 *      properties:
 *        libelle:
 *          type: string
 *          default: "kwat"
 *        idCommunes:
 *          type: integer
 *          default: 0
 *    CreateQuartierResponse:
 *      type: object
 *      properties:
 *        libelle:
 *          type: string
 *        idCommunes:
 *          type: integer
 *        id:
 *          type: string
 *        createdAt:
 *          type: string
 *        updatedAt:
 *          type: string
 */

export const CreateQuartierSchema = object({
  body: object({
    libelle: string({
      required_error: "le libelle est obligatoire ",
    }),
    idCommunes: string({
      required_error: "la communes est obligatoire ",
    })

  })

});

