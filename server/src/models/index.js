const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../databases/connectdb");

const db = {};
db.sequelize = sequelize;
db.user = require("./userModel")(sequelize, DataTypes);
db.project = require("./projectModel")(sequelize, DataTypes);
db.role = require("./roleModel")(sequelize, DataTypes);
db.group = require("./groupModel")(sequelize, DataTypes);
db.group_role = require('./group_roleModel')(sequelize, DataTypes);
db.project_user = require('./project-userModel')(sequelize, DataTypes);

// relation
db.user.hasMany(db.project);
db.project.belongsTo(db.user, {
  foreignKey: 'customerId'
})

db.group.hasMany(db.user);
db.user.belongsTo(db.group, {
  foreignKey: 'groupId'
})

db.group.belongsToMany(db.role, {
  through: db.group_role
})

db.project.belongsToMany(db.user, {
  through: db.project_user
})



db.sequelize.sync({ logging: console.log, force: false }).then(() => {
  console.log("Re-sync success");
});
module.exports = db;