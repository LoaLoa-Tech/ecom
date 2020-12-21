import { ApolloProvider } from '@apollo/client';
// import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import 'bootstrap/dist/css/bootstrap.min.css';
import './_app.css';
import { useApollo } from '../apollo/client';
import { Fragment, useReducer, useState } from 'react';
import { SellerProvider } from '../apollo';
import MyHeader from '../components/Header/index';
import Banner from '../components/Banner/index';
import { Footer as MyFooter } from '../components/Footer';
import { Layout } from 'antd';
import ShortIntro from '../components/ShortIntro';
const intros = [
  {
    title: 'Đặt hàng online',
    content: 'Đặt hàng qua mạng tiện lợi',
    img:
      'https://cdn3.iconfinder.com/data/icons/e-commerce-vol-interactions/80/package-order-ready-checkmark-512.png'
  },
  {
    title: 'Bảng giá',
    content: 'Gía hợp lí cho từng sản phẩm',
    img:
      'https://cdn3.iconfinder.com/data/icons/e-commerce-vol-interactions/80/save-payment-512.png'
  },
  {
    title: 'Bảng màu vải',
    content: 'Hơn 35 màu vải để lựa chọn',
    img:
      'https://cdn3.iconfinder.com/data/icons/e-commerce-vol-interactions/80/receipt-success-checkmark-512.png'
  },
  {
    title: 'Bảng màu size',
    content: 'Hướng dẫn chọn size chi tiết',
    img:
      'https://cdn0.iconfinder.com/data/icons/fitness-line-2/64/measure-tape-scale-equipment-size-512.png'
  },
  {
    title: 'Bảo hành',
    content: 'Bảo hành chất lượng 1 tháng',
    img:
      'https://cdn3.iconfinder.com/data/icons/ecommerce-shopping-3/64/x-31-512.png'
  }
];

const { Header, Footer, Sider, Content } = Layout;
function App(props) {
  const { Component, pageProps } = props;
  const apolloClient = useApollo(pageProps.initialApolloState);
  const [category, setCate] = useState();
  const [hashtag, setHash] = useState();
  const onChooseHeader = ({ category, hashtag }) => {
    setCate(category);
    setHash(hashtag);
  };
  return (
    <Fragment>
      <ApolloProvider client={apolloClient}>
        <SellerProvider>
          <MyHeader />
          <Banner />
          <ShortIntro intros={intros} />
          <Component {...pageProps} category={category} hashtag={hashtag} />
          <MyFooter />
        </SellerProvider>
      </ApolloProvider>
    </Fragment>
  );
}
export default App;
