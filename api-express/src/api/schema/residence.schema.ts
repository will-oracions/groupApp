import { number, object, string, TypeOf } from "zod";

/**
 * @openapi
 * components:
 *  schemas:
 *    CreateResidenceInput:
 *      type: object
 *      required:
 *        - description
 *      properties:
 *        description:
 *          type: string
 *          default: "kwat"
 *    CreateResidenceResponse:
 *      type: object
 *      properties:
 *        description:
 *          type: string
 *        idresidence:
 *          type: string
 *        createdAt:
 *          type: string
 *        updatedAt:
 *          type: string
 */

export const CreateResidenceSchema = object({
  body: object({
    description: string({
      required_error: "la description est obligatoire ",
    }),

  })

});

