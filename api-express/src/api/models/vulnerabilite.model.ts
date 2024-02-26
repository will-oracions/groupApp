import AvoirVulnerabilite from "./avoirvulnerabilite.model";


const { Sequelize, Model, DataTypes } = require("sequelize");
const { sequelize } = require("../utils/connect");

const VulnerabiliteModel = sequelize.define("vulnerabilite", {
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
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },

},

{
    freezeTableName: true,
    timestamps: true
}
);

(async () => {
  await sequelize.sync({ force: false });
  // Code here
})();
module.exports = VulnerabiliteModel;
export default VulnerabiliteModel;

























