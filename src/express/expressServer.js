const express = require('express');
const server = express();
const cors = require('cors');

server.use(express.json())
server.use(cors())
const registerMusician = require('./handlers/registerMusician');
const signinMusician = require('./handlers/signinMusician');
const authenticateMusician = require('./middlewares/authenticateMusician');
const detailsOfMusician = require('./handlers/detailsOfMusicians');
const createInstrumentCard = require('./handlers/createInstrumetCard');
const getInstrumentCardById = require('./handlers/getInstrumentById');
const updateInstrumentCardById = require('./handlers/updateInstrumentCard');
const deleteOneInstrumentCard = require('./handlers/deleteInstrumentCard');
const getAllUserInstruments = require('./handlers/getInstrumentsByUserId');


server.post('/musicians/register', registerMusician);
server.post('/musicians/signin', signinMusician);
server.get('/musicians/getmydetails', authenticateMusician, detailsOfMusician);
server.post('/instrument/add', authenticateMusician, createInstrumentCard)
server.get('/instrument/getbyid', authenticateMusician , getInstrumentCardById)
server.put('/instrument/update', authenticateMusician, updateInstrumentCardById)
server.delete('/instrument/deleteOne', authenticateMusician, deleteOneInstrumentCard)
server.get('/instrument/getall', authenticateMusician, getAllUserInstruments)
server.get('/get', (req,res)=>{
    res.json('its on bitch')
})

server.listen(3000, ()=> console.log('Express is listening'));