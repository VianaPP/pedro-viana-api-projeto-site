	'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let Usuario = sequelize.define('Usuario',{ 
		id: {
			field: 'id_cadastro',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},		
		nome: { 
			field: 'empresa',
			type: DataTypes.STRING,
			allowNull: false
		},
		email: { // talvez deixar como email aqui também
			field: 'email',
			type: DataTypes.STRING,
			allowNull: false
		},
		senha: {
			field: 'senha',
			type: DataTypes.STRING,
			allowNull: false
		}
	}, 
	{
		tableName: 'cadastro', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});
	

    return Usuario;
};
