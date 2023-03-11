//for the Add to cart

export const addCart = (product) => {
  return {
    type: "ADDITEM",
    payload: product
  }
}

//remove the product from cart

export const remove = (product) => {
  return {
    type: "DELITEM",
    payload: product
  }
}
