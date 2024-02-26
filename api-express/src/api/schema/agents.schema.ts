import { number, object, string, TypeOf } from "zod";

/**
 * @openapi
 * components:
 *  schemas:
 *    CreateAgentInput:
 *      type: object
 *      required:
 *        - nom
 *        - prenoms
 *      properties:
 *        nom:
 *          type: string
 *          default: nom agent
 *        prenoms:
 *          type: string
 *          default: agent
 *    CreateAgentResponse:
 *      type: object
 *      properties:
 *        nom:
 *          type: string
 *        prenoms:
 *          type: string
 *        id:
 *          type: string
 *        createdAt:
 *          type: string
 *        updatedAt:
 *          type: string
 */

export const CreateAgentSchema = object({
  body: object({
    nom: string({
      required_error: "le nom est obligatoire",
    }),
    prenoms: string({
        required_error: "le prenoms est obligatoire",
      }),
  })

});

