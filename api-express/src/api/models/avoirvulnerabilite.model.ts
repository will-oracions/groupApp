import PersonnesModel from "./personnes.model";
import VulnerabiliteModel from "./vulnerabilite.model";

const { Sequelize, Model, DataTypes } = require("sequelize");
const { sequelize } = require("../utils/connect");

const AvoirVulnerabilite = sequelize.define("avoirvulnerabilite", {
    id: {
        type: DataTypes.INTEGER(11),
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    
    },
},
{
    freezeTableName: true,
    timestamps: true
}
); 

VulnerabiliteModel.hasMany(AvoirVulnerabilite, { 
    foreignKey: {
        name: 'idvulnerabilte',
        allowNull: false,
    }
    });
AvoirVulnerabilite.belongsTo(VulnerabiliteModel, {     
    foreignKey: {
    name: 'idvulnerabilte',
    allowNull: false,
}});
(async () => {
  await sequelize.sync({ force: false });
  // Code here
})();
module.exports = AvoirVulnerabilite;
export default AvoirVulnerabilite;

























