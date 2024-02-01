export const isItemInWishlist = (data: any, id: any) => {
  return data?.find((item: any) => item._id === id) ? true : false
}
