import { Express } from "express";
import { AddQuartier, deleteQuartier, getAllQuartier, getQuartierById, updateQuartier } from "../controller/quartiers.interface";

function quartiers(app: Express) {

    /**
     * @swagger
     * '/api/quartiers':
     *  get:
     *     tags:
     *      - quartiers
     *     descriptions: Get all quartiers
     *     responses:
     *         200:
     *             description: all quartiers
     */
    app.get('/api/quartiers', getAllQuartier)

    /**
    * @swagger
    * '/api/quartiers/{id}':
    *  get:
    *     tags:
    *      - quartiers
    *     descriptions: Get quartiers by Id
    *     parameters:
    *       - in: path
    *         name: id
    *         required: true
    *         description: ID Obligatoire
    *         schema:
    *          type: string
    *     responses:
    *         200:
    *             description: Get quartiers by Id
    */
    app.get('/api/quartiers/:id', getQuartierById)

    /**
      * @swagger
      * '/api/quartiers/{id}':
      *  put:
      *     tags:
      *     - quartiers
      *     summary: Update  quartiers
      *     description: Update quartiers
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
      *              $ref: '#/components/schemas/CreateQuartierInput'
      *     responses:
      *      200:
      *        description: Success
      *        content:
      *          application/json:
      *            schema:
      *              $ref: '#/components/schemas/CreateQuartierResponse'
      *      409:
      *        description: Conflict
      *      400:
      *        description: Bad request
      */
    app.put('/api/quartiers/:id', updateQuartier)
    /**
* @swagger
* '/api/quartiers':
*  post:
*     tags:
*     - quartiers
*     summary: Register quartiers
*     requestBody:
*      required: true
*      content:
*        application/json:
*           schema:
*              $ref: '#/components/schemas/CreateQuartierInput'
*     responses:
*      200:
*        description: Success
*        content:
*          application/json:
*            schema:
*              $ref: '#/components/schemas/CreateQuartierResponse'
*      409:
*        description: Conflict
*      400:
*        description: Bad request
*/
    app.post('/api/quartiers', AddQuartier)
    /**
     * @swagger
     * '/api/quartiers/{id}':
     *  delete:
     *     tags:
     *      - quartiers
     *     descriptions: Delete quartiers
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         description: ID Obligatoire
     *         schema:
     *         type: string
     *     responses:
     *         200:
     *             description: Delete quartiers
     */
    app.delete('/api/quartiers/:id', deleteQuartier)

}
export default quartiers;