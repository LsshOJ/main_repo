module.exports = (sequelize, DataTypes) => {
    return sequelize.define('submit', {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        submitId:{
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        problemTitle:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        addTime:{
            type:DataTypes.DATE,
            defaultValue: DataTypes.NOW
        },
        codeFile:{
            type: DataTypes.STRING,
            allowNull: false
        },
        status:{
            type: DataTypes.ENUM,
            values: [
                'Accept',
                'Wrong Answer',
                'Time Limit Exceed',
                'Memory Limit Exceed',
                'Runtime Error',
                'Pending',
                'Compiling',
                'Running'
            ],
            allowNull: false
        }
    });
}