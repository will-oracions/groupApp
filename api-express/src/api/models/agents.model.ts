
const { Sequelize, Model, DataTypes } = require("sequelize");
const { sequelize } = require("../utils/connect");

const AgentsModel = sequelize.define("agents", {
    id: {
        type: DataTypes.INTEGER(11),
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    
    },
    nom: {
        type: DataTypes.TEXT, 
        allowNull: false,
    },
    prenoms: {
        type: DataTypes.TEXT,
        allowNull: false,
    },

},
{
    tableName: "agents",
    freezeTableName: true,
    timestamps: true
}
);

(async () => {
  await sequelize.sync({ force: false });
  // Code here
})();
module.exports = AgentsModel;
export default AgentsModel;

























