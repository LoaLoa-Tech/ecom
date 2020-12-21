import { Fragment } from 'react';
import { Col, Container, Row } from 'reactstrap';
import Products from '../List/index';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
const One = ({ product }) => {
  console.log(product);
  return (
    <Container>
      <Breadcrumb listClassName="bg-white border">
        <BreadcrumbItem key="category" className="text-primary">
          Sản Phẩm
        </BreadcrumbItem>
        <BreadcrumbItem active>{product.name}</BreadcrumbItem>
      </Breadcrumb>
      <Row className="pb-5">
        <Col xs={12} md={6}>
          {product?.imgs.map((img) => (
            <img className="mb-3" src={img} />
          ))}
        </Col>
        <Col>
          <div className="sticky-top" style={{ top: 100 }}>
            <div className="mt-3 bg-white p-5 ">
              <h1 className="text-primary my-4">{product.name}</h1>
              <h3 className="mb-3 text-secondary">{product.category.name}</h3>
              <div className="text-justify"
                dangerouslySetInnerHTML={{ __html: product.description }}
              ></div>
            </div>
          </div>
        </Col>
      </Row>
      {/*} <Products
        ProductWhereInput={{
          category: { id: product?.category?.id },
          id_not: product.id
        }}
      />*/}
    </Container>
  );
};
export default One;
