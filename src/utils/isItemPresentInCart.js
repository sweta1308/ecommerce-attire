export const isItemInCart = (data, id) => {
  return data?.find((item) => item._id === id) ? true : false;
};
