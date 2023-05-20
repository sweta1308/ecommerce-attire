export const isItemInWishlist = (data, id) => {
  return data?.find((item) => item._id === id) ? true : false;
};
