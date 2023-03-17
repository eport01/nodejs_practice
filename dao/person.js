const db = require('../db/db');

class PersonDAO {
  async createPerson(email, name) {
    const [id] = await db('person').insert({
      email, 
      name,
      })
      .returning('id');

    return id; 
  }
}

module.exports = new PersonDAO();