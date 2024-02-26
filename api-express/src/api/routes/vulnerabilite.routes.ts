import { Express } from "express";
import { AddVulnerabilite, deleteVulnerabilite, getAllVulnerabilite, getVulnerabiliteById, updateVulnerabilite } from "../controller/vulnerabilite";

function vulnerabilite(app: Express) {

    /**
     * @swagger
     * '/api/vulnerabilite':
     *  get:
     *     tags:
     *      - vulnerabilite
     *     descriptions: Get all vulnerabilite
     *     responses:
     *         200:
     *             description: all vulnerabilite
     */
    app.get('/api/vulnerabilite', getAllVulnerabilite)

    /**
    * @swagger
    * '/api/vulnerabilite/{id}':
    *  get:
    *     tags:
    *      - vulnerabilite
    *     descriptions: Get vulnerabilite by Id
    *     parameters:
    *       - in: path
    *         name: id
    *         required: true
    *         description: ID Obligatoire
    *         schema:
    *          type: string
    *     responses:
    *         200:
    *             description: Get vulnerabilite by Id
    */
    app.get('/api/vulnerabilite/:id', getVulnerabiliteById)

    /**
      * @swagger
      * '/api/vulnerabilite/{id}':
      *  put:
      *     tags:
      *     - vulnerabilite
      *     summary: Update  vulnerabilite
      *     description: Update vulnerabilite
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
      *              $ref: '#/components/schemas/CreateVulnerabiliteInput'
      *     responses:
      *      200:
      *        description: Success
      *        content:
      *          application/json:
      *            schema:
      *              $ref: '#/components/schemas/CreateVulnerabiliteResponse'
      *      409:
      *        description: Conflict
      *      400:
      *        description: Bad request
      */
    app.put('/api/vulnerabilite/:id', updateVulnerabilite)
    /**
* @swagger
* '/api/vulnerabilite':
*  post:
*     tags:
*     - vulnerabilite
*     summary: Register vulnerabilite
*     requestBody:
*      required: true
*      content:
*        application/json:
*           schema:
*              $ref: '#/components/schemas/CreateVulnerabiliteInput'
*     responses:
*      200:
*        description: Success
*        content:
*          application/json:
*            schema:
*              $ref: '#/components/schemas/CreateVulnerabiliteResponse'
*      409:
*        description: Conflict
*      400:
*        description: Bad request
*/
    app.post('/api/vulnerabilite', AddVulnerabilite)
    /**
     * @swagger
     * '/api/vulnerabilite/{id}':
     *  delete:
     *     tags:
     *      - vulnerabilite
     *     descriptions: Delete vulnerabilite
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         description: ID Obligatoire
     *         schema:
     *         type: string
     *     responses:
     *         200:
     *             description: Delete vulnerabilite
     */
    app.delete('/api/vulnerabilite/:id', deleteVulnerabilite)

}
export default vulnerabilite;