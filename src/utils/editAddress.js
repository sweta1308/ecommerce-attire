import axios from "axios";

export const editAddressService = async (address, addressId, encodedToken) =>
  await axios.post(
    `/api/user/address/${addressId}`,
    { address: address },
    { headers: { authorization: encodedToken } }
  );
