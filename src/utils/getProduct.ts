import axios from "axios"

export const getProduct = async (productId: any) => {
  try {
    const { data, status } = await axios.get(`/api/products/${productId}`)
    console.log(data, status)
    if (status === 200) {
      return data
    }
  } catch (e) {
    console.log(e)
  }
}
