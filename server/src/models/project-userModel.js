module.exports = (sequelize, DataTypes) => {
    const project_user = sequelize.define("project_user", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false, // Assuming you want id to be required
        },
    });

    return project_user;
};
