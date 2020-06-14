module.exports = (sequlize, DataTypes) => {
    return sequlize.define('problem', {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        problemId:{
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        problemType:{
            type: DataTypes.ENUM,
            values: ['General', 'Interactive'],
            defaultValue: 'General',
            allowNull :false
        },
        title:{
            type: DataTypes.STRING,
            allowNull: false
        },
        statement:{
            type: DataTypes.STRING,
            allowNull: false
        },
        sampleInput:{
            type: DataTypes.STRING,
        },
        sampleOutput:{
            type: DataTypes.STRING,
        },
        testInputFile:{
            type: DataTypes.STRING,
        },
        testOutputFile:{
            type: DataTypes.STRING,
            allowNull: false
        },
    });
}
/*
CREATE TABLE `LsshOJ`.`problems`(
    `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `problemId` VARCHAR(10) NOT NULL,
    `problemType` ENUM('General', 'Interactive') NOT NULL default 'General',
    `title` VARCHAR(50) NOT NULL,
    `statement` VARCHAR(1000) NOT NULL,
    `sampleInput` VARCHAR(100),
    `sampleOutput` VARCHAR(100),
    `testInputFile` VARCHAR(100),
    `testOutputFile` VARCHAR(100) NOT NULL
)ENGINE=InnoDB;
*/