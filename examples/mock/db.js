let getItemById = require('./db/getItemById.do')()


module.exports = () => {
  let db = {
    'getItemById.do': getItemById,
    'getPackage.do': getPackage
  }
  return db
}