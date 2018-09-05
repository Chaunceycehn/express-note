const Sequelize = require('sequelize')
const path = require('path')


const sequelize = new Sequelize('note', undefined, undefined, {
    host: 'localhost',
    dialect: 'sqlite',
    // SQLite only
    storage: path.join(__dirname,'../database/database.sqlite') 
});

const Note = sequelize.define('note', {
    text: {
        type: Sequelize.STRING
    },
    username:{
        type: Sequelize.STRING

    }
});
Note.sync()



// Note.findAll({raw:true,where:{id:16}}).then(function(notes){
//     console.log(notes)
// })

module.exports.Note = Note;
// Note.sync({ force: true }).then(() => {
//     // Table created
//     return Note.create({
//         text: 'John',
//     }).then(function () {
//         Note.findAll().then(notes => {
//             console.log(notes)
//         })
//     })
// });

// sequelize
//   .authenticate()
//   .then(() => {
//     console.log('Connection has been established successfully.');
//   })
//   .catch(err => {
//     console.error('Unable to connect to the database:', err);
//   });