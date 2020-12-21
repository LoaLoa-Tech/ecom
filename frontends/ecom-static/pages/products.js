import { useRouter } from "next/router";
import { Container } from "reactstrap";
import Categories from "../components/Category/List";
import ProductsFullWidth from "../components/frames/ProductsFullWidth";
export default function ProductDetali({}) {
  const router = useRouter();
  let query = router.query;
  const { category } = query;
  return (
    <div className="my-4">
      <Container fluid>
        <Categories
          option="Breadcrumb"
          onChoose={(category) => setCategory(category.url)}
        />
      </Container>
      <ProductsFullWidth
        ProductWhereInput={{
          category: { url: category },
        }}
      />
    </div>
  );
}
