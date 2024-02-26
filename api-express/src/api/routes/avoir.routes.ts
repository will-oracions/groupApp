import { Express } from "express";
import { AddAvoir, deleteAvoir, getAllAvoir, updateAvoir } from "../controller/avoirvulnerabilite.controller";

function avoir(app: Express) {

    /**
     * @swagger
     * '/api/avoir':
     *  get:
     *     tags:
     *      - avoir
     *     descriptions: Get all avoir
     *     responses:
     *         200:
     *             description: all avoir
     */
    app.get('/api/avoir', getAllAvoir)

    /**
      * @swagger
      * '/api/avoir/{id}':
      *  put:
      *     tags:
      *     - avoir
      *     summary: Update  avoir
      *     description: Update avoir
      *     parameters:
      *          - in: path
      *            name: id
      *            required: true
      *            description: ID Obligatoire
      *            schema:
      *             type: string
      *     requestBody:
      *      required: true
      *      content:
      *        application/json:
      *           schema:
      *              $ref: '#/components/schemas/CreateAgentInput'
      *     responses:
      *      200:
      *        description: Success
      *        content:
      *          application/json:
      *            schema:
      *              $ref: '#/components/schemas/CreateAgentResponse'
      *      409:
      *        description: Conflict
      *      400:
      *        description: Bad request
      */
    app.put('/api/avoir/:id', updateAvoir)
    /**
* @swagger
* '/api/avoir':
*  post:
*     tags:
*     - avoir
*     summary: Register avoir
*     requestBody:
*      required: true
*      content:
*        application/json:
*           schema:
*              $ref: '#/components/schemas/CreateAgentInput'
*     responses:
*      200:
*        description: Success
*        content:
*          application/json:
*            schema:
*              $ref: '#/components/schemas/CreateAgentResponse'
*      409:
*        description: Conflict
*      400:
*        description: Bad request
*/
    app.post('/api/avoir', AddAvoir)
    /**
     * @swagger
     * '/api/avoir/{id}':
     *  delete:
     *     tags:
     *      - avoir
     *     descriptions: Delete avoir
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         description: ID Obligatoire
     *         schema:
     *         type: string
     *     responses:
     *         200:
     *             description: Delete avoir
     */
    app.delete('/api/avoir/:id', deleteAvoir)

}
export default avoir;