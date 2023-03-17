const personDAO = require('../dao/person');


class PersonService {
  createPerson(personDto) {
    const { email, name } = personDto;
    return personDAO.createPerson(email, name);
  }
}

module.exports = new PersonService();