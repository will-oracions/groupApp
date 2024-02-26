import { number, object, string, TypeOf, date, boolean } from "zod";

/**
 * @openapi
 * components:
 *  schemas:
 *    CreateProductInput:
 *      type: object
 *      required:
 *        - noms
 *        - date_naissance
 *        - region
 *        - sexe
 *        - is_cni,
 *        - is_actenaissance,
 *        - is_autochtone,
 *        - is_handicape,
 *        - is_chef_menage,
 *      properties:
 *        noms:
 *          type: string
 *          default: ciment
 *        date_naissance:
 *          type: date
 *          default: ""
 *        region:
 *          type: string
 *          default: "Nord"
 *        sexe:
 *          type: string
 *          default: masculin
 *        is_cni:
 *          type: boolean
 *          default: false
 *        is_actenaissance:
 *          type: boolean
 *          default: false
 *        is_handicape:
 *          type: boolean
 *          default: false
 *        is_chef_menage:
 *          type: boolean
 *          default: false
 *    CreateProductResponse:
 *      type: object
 *      properties:
 *        noms:
 *          type: string
 *        date_naissance:
 *          type: date
 *        region:
 *          type: string
 *        sexe:
 *          type: string
 *        id:
 *          type: string
 *        is_cni:
 *          type: boolean
 *        is_actenaissance:
 *          type: boolean
 *        is_handicape:
 *          type: boolean
 *        is_chef_menage:
 *          type: boolean
 *        createdAt:
 *          type: string
 *        updatedAt:
 *          type: string
 */

export const CreateProductSchema = object({
  body: object({
    noms: string({
      required_error: "le noms est obligatoire",
    }),
    date_naissance: date({
      required_error: "la date de naissance est obligatoire",
    }),
    region: string({
      required_error: "la region est obligatoire",
    }),
    sexe: boolean({
        required_error: "le sexe est obligatoire",
      }),
  })

});

