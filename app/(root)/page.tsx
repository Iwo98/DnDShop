import { Metadata } from "next";
import { getLatestProducts } from "@/lib/actions/product.action";
import ProductList from "@/components/product/product-list";
import { LATEST_PRODUCTS_LIMIT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Home",
};

const Homepage = async () => {
  const latestProducts = await getLatestProducts();

  return (
    <ProductList
      data={latestProducts}
      title="Featured Products"
      limit={LATEST_PRODUCTS_LIMIT}
    />
  );
};

export default Homepage;
