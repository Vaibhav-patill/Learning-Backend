const { getDB } = require("../utils/databaseUtil");

module.exports = class Favourite {
  consrtuctor(houseId){
    this.houseId = houseId;
  }

   save(houseId) {
    const db = getDB();
    return db.collection("favourites").insertOne(this);
  }


  static getFavourites() {
    const db = getDB();
    return db.collection("favourites").find().toArray();
  }

  static deleteById(delHomeId) {
    
  }
};
