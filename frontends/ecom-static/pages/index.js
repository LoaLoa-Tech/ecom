import { Fragment, useContext } from 'react';
import { Container } from 'reactstrap';
import Products from '../components/Product/List/index';
import Posts from '../components/Post/List/index';
import ProductsFullWidth from '../components/frames/ProductsFullWidth';
import News from '../components/frames/News';
import { SellerContext } from '../apollo';
import ShortIntro from '../components/ShortIntro';
function Index() {
  const theme = useContext(SellerContext);
  return (
    <Fragment>
      <Container>
        <center className="my-5">
          <h1 className="font-weight-bold text-main">{theme.store}</h1>
          <p>{theme.slogan}</p>
        </center>
      </Container>
      <ProductsFullWidth />
      <News />
    </Fragment>
  );
}
export default Index;
