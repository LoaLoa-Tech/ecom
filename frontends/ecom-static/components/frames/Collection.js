import { useRouter } from 'next/router';
import { useState } from 'react';
import Categories from '../Category/List';
import Products from '../Product/List';
import { Row, Col, Container } from 'reactstrap';
const Collection = () => {
  const router = useRouter();
  let query = router.query;
  const { category } = query;
  const [mor, setMor] = useState(true);
  return (
    <Container fluid>
      <Row>
        <Col xs={12} md={4} lg={3}>
          <Categories option="Sider" setMor={setMor} />
        </Col>
        <Col>
          <Categories
            option="Breadcrumb"
            onChoose={(category) => setCategory(category.url)}
          />
          <Products
            ProductWhereInput={{
              category: { url: category }
            }}
            mor={mor}
            setMor={setMor}
          />
        </Col>
      </Row>
    </Container>
  );
};
export default Collection;
