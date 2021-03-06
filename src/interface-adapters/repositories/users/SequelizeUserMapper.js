const SequelizeMapper = require('../SequelizeMapper')

class SequelizeUserMapper extends SequelizeMapper {
  constructor({ User }) {
    super()
    this.User = User
  }

  toEntity({ dataValues }) {
    const { User } = this
    const { id, email, role, status } = dataValues

    return new User({ id, email, role, status })
  }

  toDatabase(survivor) {
    const { email, password, role, status } = survivor
    return { email, password, role, status }
  }
}

module.exports = SequelizeUserMapper
