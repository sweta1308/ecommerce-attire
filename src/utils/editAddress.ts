import axios from "axios"

export const editAddressService = async (
  address: any,
  addressId: any,
  encodedToken: any,
) =>
  await axios.post(
    `/api/user/address/${addressId}`,
    { address: address },
    { headers: { authorization: encodedToken } },
  )
