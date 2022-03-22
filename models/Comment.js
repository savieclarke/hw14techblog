const { DataTypes } = require("sequelize/types");

Comment.init(
    {
        body:{
            type: DataTypes.STRING,
            allowNull: false,
            

        },
        sequelize
    }
);

module.exports = Comment;
