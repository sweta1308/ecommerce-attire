import jwtEncode from "jwt-encode"
import { formatDate } from "../utils/authUtils"
import { Response } from "miragejs"
import { v4 as uuid } from "uuid"

/**
 * All the routes related to Auth are present here.
 * These are Publicly accessible routes.
 */

/**
 * This handler handles user signups.
 * Send a POST Request to /api/auth/signup
 * The request body should contain { firstName, lastName, email, password }
 */

export default (function (schema: any, request: any) {
  const { email, password, ...rest } = JSON.parse(request.requestBody)
  try {
    // Check if email already exists
    const foundUser = schema.users.findBy({ email })
    if (foundUser) {
      return new Response(
        422,
        {},
        {
          errors: ["Unprocessable Entity. Email Already Exists."],
        },
      )
    }
    const _id = uuid()
    const newUser = {
      _id,
      email,
      password,
      createdAt: formatDate(),
      updatedAt: formatDate(),
      ...rest,
      cart: [],
      wishlist: [],
      address: [],
    }
    const createdUser = schema.users.create(newUser)
    const encodedToken = jwtEncode(
      { _id, email },
      process.env.REACT_APP_JWT_SECRET || "",
    )
    return new Response(201, {}, { createdUser, encodedToken })
  } catch (error) {
    return new Response(
      500,
      {},
      {
        error,
      },
    )
  }
})

/**
 * This handler handles user login.
 * Send a POST Request to /api/auth/login
 * The request body should contain { email, password }
 */

export const loginHandler = function (schema: any, request: any) {
  const { email, password } = JSON.parse(request.requestBody)
  try {
    const foundUser = schema.users.findBy({ email })
    if (!foundUser) {
      return new Response(
        404,
        {},
        {
          errors: ["The email you entered is not registered. Not Found error"],
        },
      )
    }
    if (password === foundUser.password) {
      const encodedToken = jwtEncode(
        { _id: foundUser._id, email },
        process.env.REACT_APP_JWT_SECRET || "",
      )
      foundUser.password = undefined
      return new Response(200, {}, { foundUser, encodedToken })
    }
    return new Response(
      401,
      {},
      {
        errors: [
          "The credentials you entered are invalid. Unauthorized access error.",
        ],
      },
    )
  } catch (error) {
    return new Response(
      500,
      {},
      {
        error,
      },
    )
  }
}
