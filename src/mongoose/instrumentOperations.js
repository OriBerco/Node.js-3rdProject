const instrumentModel = require('./instrumentModel');

async function createInstrumentCard(instrumentDetails) {
    try {
        const createdInstrumentCard = await new instrumentModel(instrumentDetails).save();

        return createdInstrumentCard;
    } catch {
        return null;
    }
}

async function getInstrumentById(cardId) {
    try {
        const instrumentCard = await instrumentModel.find({
            _id: cardId
        });
        
        return instrumentCard;
    } catch {
        return null
    }
}

async function updateInstrumentCard(cardid, body){
    try {
        const instrumentCard = await instrumentModel.findByIdAndUpdate({_id: cardid}, body);

        return instrumentCard;
    }
    catch{return null}
}

async function deleteInstrumentCard(cardId){
    try{
        const instrumentCard = await instrumentModel.findByIdAndDelete(
            {_id: cardId}
        );
         return instrumentCard;
    }
    catch{return null;}
}

async function getInstrumentsByUserId(id){
  try{  const instrumentsOfUser = await instrumentModel.find({userId: id});
    return instrumentsOfUser}
    catch{
        return null
    }
}

module.exports = {
    createInstrumentCard,
    getInstrumentById,
    updateInstrumentCard,
    deleteInstrumentCard,
    getInstrumentsByUserId
};