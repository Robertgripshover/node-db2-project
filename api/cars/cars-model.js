
const db = require('../../data/db-config')


const getAll = () => {
  return db('cars')
}

const getById = (id) => {
  return db('cars').where('id', id).first()
}

const getByVin = (vin) => {
  return db('cars').where('vin', vin).first()
}

const create = (car) => {
  return db('cars').insert(car)
    .then(([id]) => getById(id)) //this part of the code
    //after the .then is taking the fact that 
    //the db is only returning the id and 
    //using that same id to make sure that
    //the whole newly created car 
    //will be returned to the user.
}


module.exports = {
  getAll,
  getById,
  create,
  getByVin,
}