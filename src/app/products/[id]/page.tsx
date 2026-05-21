import { notFound } from "next/navigation";
import ProductDetail from "@/components/products/ProductDetail";
import { products } from "@/data/catalog";

type ProductDetailPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ProductDetailPage({
  params,
}: ProductDetailPageProps) {
  const { id } = await params;

  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    notFound();
  }

  return <ProductDetail product={product} />;
}