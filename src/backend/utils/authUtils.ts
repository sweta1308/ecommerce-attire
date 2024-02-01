import { jwtDecode } from "jwt-decode"
import { Response } from "miragejs"

export const requiresAuth = function (this: any, request: any) {
  const encodedToken = request.requestHeaders.authorization
  const decodedToken: any = jwtDecode(
    encodedToken || process.env.REACT_APP_JWT_SECRET,
  )
  if (decodedToken) {
    const user = this.db.users.findBy({ email: decodedToken.email })
    if (user) {
      return user._id
    }
  }
  return new Response(
    401,
    {},
    { errors: ["The token is invalid. Unauthorized access error."] },
  )
}

export const formatDate = () => {
  const date = new Date()
  const formattedDate = date.toISOString()
  return formattedDate
}
