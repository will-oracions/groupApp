import ResidenceModel from "./residence.model";


const { Sequelize, Model, DataTypes } = require("sequelize");
const { sequelize } = require("../utils/connect");

const QuartiersModel = sequelize.define("quartiers", {
    id: {
        type: DataTypes.INTEGER(11),
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    
    },
    libelle: {
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
module.exports = QuartiersModel;
export default QuartiersModel;

























