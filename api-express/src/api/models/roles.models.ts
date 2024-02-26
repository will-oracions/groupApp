
const { Sequelize, Model, DataTypes } = require("sequelize");
const { sequelize } = require("../utils/connect");

const RolesModel = sequelize.define("roles", {
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
    tableName: "roles",

    freezeTableName: true,
    timestamps: true
}
);


(async () => {
  await sequelize.sync({ force: false });
  // Code here
})();
module.exports = RolesModel;
export default RolesModel;

























