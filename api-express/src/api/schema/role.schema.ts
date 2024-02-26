import { number, object, string, TypeOf } from "zod";

/**
 * @openapi
 * components:
 *  schemas:
 *    CreatRoleInput:
 *      type: object
 *      required:
 *        - libelle
 *      properties:
 *        libelle:
 *          type: string
 *          default: "kwat"
 *    CreatRoleResponse:
 *      type: object
 *      properties:
 *        libelle:
 *          type: string
 *        idrole:
 *          type: integer
 *        createdAt:
 *          type: string
 *        updatedAt:
 *          type: string
 */

export const CreatRoleSchema = object({
  body: object({
    libelle: string({
      required_error: "le libelle est obligatoire ",
    }),

  })

});

