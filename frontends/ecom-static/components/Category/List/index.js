import { gql, useQuery } from '@apollo/client';
import { useContext } from 'react';
import { Loading } from '../../Loading';
import { One } from './One';
import { Sider } from './Sider';
import { Header } from './Header';
import { SellerContext } from '../../../apollo';
import { useRouter } from 'next/router';
import { BreadcrumbCategory } from './Breadcrumb';

const Categories = ({
  option = 1,
  CategoryWhereInput,
  setMor = () => {},
  onChoose = () => {}
}) => {
  /*
   * setMor là state ở component cha, gọi setMor(true) làm xuất hiện nút xem thêm ở Products
   */
  // data
  let theme = useContext(SellerContext);
  let variables = { ...CategoryWhereInput, category: { seller: theme.seller } };
  const { data, error, loading } = useQuery(
    gql`
      query($category: CategoryWhereInput) {
        allCategories(where: $category) {
          id
          name
          url
        }
      }
    `,
    { variables }
  );
  // modify
  const categories = data?.allCategories.map((category) => {
    return { ...category, img: theme.server + category?.file?.publicUrl };
  });
  // function
  const router = useRouter();
  let query = router.query;
  let choosed = query.category;
  const choose = (category) => {
    setMor(true);
    onChoose(category);
    query.category = category.url;
    router.push({
      pathname: '/products',
      query
    });
  };
  // render
  if (!(error || loading)) {
    switch (option) {
      case 1:
        return <One categories={categories} onChoose={choose} />;
      case 'Header':
        return <Header categories={categories} onChoose={choose} />;
      case 'Sider':
        return (
          <Sider categories={categories} choosed={choosed} onChoose={choose} />
        );
      case 'Breadcrumb':
        return (
          <BreadcrumbCategory
            categories={categories}
            choosed={choosed}
            onChoose={choose}
          />
        );
      default:
        return <pre>Invalid components.</pre>;
    }
  } else return <Loading />;
};
export default Categories;
