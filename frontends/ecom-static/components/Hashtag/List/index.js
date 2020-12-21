import { gql, useQuery } from '@apollo/client';
import { useContext } from 'react';
import { Loading } from '../../Loading';
import { One } from './One';
import { Header } from './Header';
import { SellerContext } from '../../../apollo';
import { Sider } from './Sider';
import { BreadcrumbHashtag } from './breadcrumb';
import { useRouter } from 'next/router';
const Hashtags = ({
  option = 1,
  HashtagWhereInput,
  setMor = () => {},
  onChoose = () => {}
}) => {
  // setMor là state ở component cha, gọi setMor(true) làm xuất hiện nút xem thêm ở Posts
  // data
  let theme = useContext(SellerContext);
  let variables = { hashtag: { seller: theme.seller } };
  const { data, error, loading } = useQuery(
    gql`
      query($hashtag: HashtagWhereInput) {
        allHashtags(where: $hashtag) {
          id
          name
          url
          posts {
            id
            url
            title
          }
        }
      }
    `,
    { variables }
  );
  // modify
  const hashtags = data?.allHashtags.map((hashtag) => {
    return { ...hashtag, img: theme.server + hashtag?.file?.publicUrl };
  });
  // function
  const router = useRouter();
  let query = router.query;
  let choosed = query.hashtag;
  const choose = (hashtag) => {
    setMor(true);
    onChoose(hashtag);
    query.hashtag = hashtag.url;
    router.push({
      pathname: '/posts',
      query
    });
  };
  // render
  if (!(error || loading)) {
    switch (option) {
      case 1:
        return <One hashtags={hashtags} onChoose={choose} />;
      case 'Header':
        return <Header hashtags={hashtags} onChoose={choose} />;
      case 'Sider':
        return (
          <Sider hashtags={hashtags} onChoose={choose} choosed={choosed} />
        );
      case 'Breadcrumb':
        return <BreadcrumbHashtag hashtags={hashtags} choosed={choosed} />;
      default:
        return <pre>Invalid components.</pre>;
    }
  } else return <Loading />;
};
export default Hashtags;
