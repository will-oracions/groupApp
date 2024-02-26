import QuartiersModel from "./quartiers.model";


const { Sequelize, Model, DataTypes } = require("sequelize");
const { sequelize } = require("../utils/connect");

const CommunesModel = sequelize.define("communes", {
    id: {
        type: DataTypes.INTEGER(11),
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    
    },
    code: {
        type: DataTypes.TEXT,
        unique: true,
        allowNull: false,
        length: 255
    
    },
    libelle: {
        type: DataTypes.TEXT,
        allowNull: false,
    }

},
{
    freezeTableName: true,
    timestamps: true
}
);
CommunesModel.hasMany(QuartiersModel, { 
    foreignKey: {
        name: 'idCommunes',
        allowNull: false,
    }
    });
QuartiersModel.belongsTo(CommunesModel, {    foreignKey: {
    name: 'idCommunes',
    allowNull: false,
}});
(async () => {
  await sequelize.sync({ force: false });
  // Code here
})();
module.exports = CommunesModel;
export default CommunesModel;

























