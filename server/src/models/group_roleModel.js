module.exports = (sequelize, DataTypes) => {
    const group_role = sequelize.define("group_role", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false, // Assuming you want id to be required
        },
    });

    return group_role;
};
