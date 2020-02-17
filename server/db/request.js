const Sequelize = require('sequelize');
const sequelize = new Sequelize('baseJose', 'postgres', '123456789', 
  {
    host: 'localhost',
    dialect: 'postgres',
  });
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
  
  const formatoUsuario = sequelize.define("pelis",{
    imagen: Sequelize.TEXT,
    titulo: Sequelize.TEXT,
    resumen: Sequelize.TEXT,
    categoria: Sequelize.TEXT,
    valorboleto: Sequelize.TEXT,
    estado: Sequelize.TEXT
  },
  {
    timestamps: false
})
const formatoEmail = sequelize.define("compra",{
  peli: Sequelize.TEXT,
  boletos: Sequelize.TEXT,
  email: Sequelize.TEXT,
  valorboleto: Sequelize.TEXT,
  totalBoletos: Sequelize.TEXT
},
{
  timestamps: false
})
exports.formatoUsuario = formatoUsuario;
exports.formatoEmail = formatoEmail;