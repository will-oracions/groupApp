import { Express } from "express";
import { AddAgents, deleteAgents, getAgentsById, getAllAgents, updateAgents } from "../controller/agents.controller";

function agents(app: Express) {

    /**
     * @swagger
     * '/api/agents':
     *  get:
     *     tags:
     *      - agents
     *     descriptions: Get all agents
     *     responses:
     *         200:
     *             description: all agents
     */
    app.get('/api/agents', getAllAgents)

    /**
    * @swagger
    * '/api/agents/{id}':
    *  get:
    *     tags:
    *      - agents
    *     descriptions: Get agents by Id
    *     parameters:
    *       - in: path
    *         name: id
    *         required: true
    *         description: ID Obligatoire
    *         schema:
    *          type: string
    *     responses:
    *         200:
    *             description: Get agents by Id
    */
    app.get('/api/agents/:id', getAgentsById)

    /**
      * @swagger
      * '/api/agents/{id}':
      *  put:
      *     tags:
      *     - agents
      *     summary: Update  agents
      *     description: Update agents
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
    app.put('/api/agents/:id', updateAgents)
    /**
* @swagger
* '/api/agents':
*  post:
*     tags:
*     - agents
*     summary: Register agents
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
    app.post('/api/agents', AddAgents)
    /**
     * @swagger
     * '/api/agents/{id}':
     *  delete:
     *     tags:
     *      - agents
     *     descriptions: Delete agents
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         description: ID Obligatoire
     *         schema:
     *         type: string
     *     responses:
     *         200:
     *             description: Delete agents
     */
    app.delete('/api/agents/:id', deleteAgents)

}
export default agents;