const getLastVisitedProducts = () => {
  if (typeof window !== "undefined") {
    const visitedProducts = localStorage.getItem("visitedProducts");
    return visitedProducts && JSON.parse(visitedProducts);
  }
};
export default getLastVisitedProducts;
