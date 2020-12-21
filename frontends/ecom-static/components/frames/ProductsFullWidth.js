import { useRouter } from "next/router";
import { useState } from "react";
import Categories from "../Category/List";
import Products from "../Product/List";
import { Row, Col, Container } from "reactstrap";
const Collection = ({ ProductWhereInput, limit }) => {
  const router = useRouter();
  let query = router.query;
  const { category } = query;
  const [mor, setMor] = useState(true);
  return (
    <Container fluid>
      <Products
        ProductWhereInput={{
          ...ProductWhereInput,
          category: { url: category },
        }}
        mor={mor}
        setMor={setMor}
        limit={limit}
      />
    </Container>
  );
};
export default Collection;
