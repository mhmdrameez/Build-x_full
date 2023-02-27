import jwt from 'jsonwebtoken'

const generateToken = (id) => {
  return jwt.sign({ id }, "okil2", {
    expiresIn: '30d',
  })
}

export default generateToken
