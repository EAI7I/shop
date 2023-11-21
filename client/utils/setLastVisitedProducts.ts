const setLastVisitedProducts = (id: string) => {
  if (typeof window !== "undefined") {
    const visitedProducts = localStorage.getItem("visitedProducts");
    let products: string[] = [];
    if (visitedProducts) {
      products = JSON.parse(visitedProducts);
      if (products.includes(id)) {
        products.splice(products.indexOf(id), 1);
      }
      products = products.slice(0, 10);
    }
    products.push(id);
    localStorage.setItem(
      "visitedProducts",
      JSON.stringify([...products].reverse())
    );
  }
};
export default setLastVisitedProducts;
