const musicianModel = require('./musicianModel');
const bcryptjs = require('bcryptjs');

async function registerMusician(musicianDetails){
    try{
musicianDetails.password = bcryptjs.hashSync(musicianDetails.password);
return await new musicianModel(musicianDetails).save();
    }
    catch{
        return null
    }
}
async function musicianSignin(email,password){
    try{
        const credentialsFromDb = await musicianModel.findOne({email:email});
        if(credentialsFromDb == null)
        return null;

        const result = bcryptjs.compareSync(password, credentialsFromDb.password);
        if(result){
            return credentialsFromDb
        }
        return null;

    }

    catch{
        return null
    }
}

async function getMusicianDetailsById(id){
    try{
        return await musicianModel.findById(id);
    }
    catch{
        return null;
    }
}

module.exports = {
    registerMusician,
    musicianSignin,
    getMusicianDetailsById
};