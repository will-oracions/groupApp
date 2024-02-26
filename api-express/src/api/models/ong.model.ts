
const { Sequelize, Model, DataTypes } = require("sequelize");
const { sequelize } = require("../utils/connect");

const OngModel = sequelize.define("ong", {
    id: {
        type: DataTypes.INTEGER(11),
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    
    },
    raisonSociale: {
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
module.exports = OngModel;
export default OngModel;

























