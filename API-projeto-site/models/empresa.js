	'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let Empresa = sequelize.define('Empresa',{ 
		id: {
			field: 'id_cliente',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},		
		cnpj: { 
			field: 'cnpj_cliente',
			type: DataTypes.STRING,
			allowNull: false
		}
	}, 
	{
		tableName: 'cliente', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});
	

    return Empresa;
};
