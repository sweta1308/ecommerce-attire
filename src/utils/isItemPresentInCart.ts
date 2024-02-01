export const isItemInCart = (data: any, id: any) => {
  return data?.find((item: any) => item._id === id) ? true : false
}
