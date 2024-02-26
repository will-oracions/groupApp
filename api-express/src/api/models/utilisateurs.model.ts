import RolesModel from "./roles.models";


const {  DataTypes } = require("sequelize");
const { sequelize } = require("../utils/connect");

const UtilisateursModel = sequelize.define("utilisateurs", {
  id: {
    type: DataTypes.INTEGER(11),
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,

},
  username: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  password: {
    type: DataTypes.TEXT,
    allowNull: false,
  },

},
  {
    tableName: "utilisateurs",
    freezeTableName: true,
    timestamps: true
  }
);
RolesModel.hasMany(UtilisateursModel, { 
  foreignKey: {
    name: 'idrole',
    allowNull: false,
}
  });
UtilisateursModel.belongsTo(RolesModel, { 
  foreignKey: {
    name: 'idrole',
    allowNull: false,
}
  });
(async () => {
  await sequelize.sync({ force: false });
  // Code here
})();
module.exports = UtilisateursModel;
export default UtilisateursModel;