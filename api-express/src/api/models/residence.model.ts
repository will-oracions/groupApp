import PersonnesModel from "./personnes.model";
import QuartiersModel from "./quartiers.model";

const { Sequelize, Model, DataTypes } = require("sequelize");
const { sequelize } = require("../utils/connect");

const ResidenceModel = sequelize.define("residence", {
    id: {
        type: DataTypes.INTEGER(11),
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    }

},
{
    freezeTableName: true,
    timestamps: true
}
);
QuartiersModel.hasMany(ResidenceModel,{
    foreignKey: {
        name: 'idquartier',
        allowNull: false,
    }
});
ResidenceModel.belongsTo(QuartiersModel,{
    foreignKey: {
        name: 'idquartier',
        allowNull: false,
    }
});

(async () => {
  await sequelize.sync({ force: false });
  // Code here
})();
module.exports = ResidenceModel;
export default ResidenceModel;

























