import { useRouter } from 'next/router';
import { Fragment, useState } from 'react';
import { Col, Container, Row } from 'reactstrap';
import Hashtags from '../Hashtag/List/index';
import Posts from '../Post/List/index';
const News = () => {
  const router = useRouter();
  let query = router.query;
  const { hashtag } = query;
  const [mor, setMor] = useState(true);
  return (
    <Container>
      <Row className="my-4">
        <Col xs={12} md={4} lg={3}>
          <Hashtags option="Sider" setMor={setMor} />
        </Col>
        <Col>
          <Hashtags
            option="Breadcrumb"
            onChoose={(hashtag) => sethashtag(hashtag.url)}
          />
          <Posts
            PostWhereInput={{ hashtags_some: { url: hashtag } }}
            mor={mor}
            setMor={setMor}
          />
        </Col>
      </Row>
    </Container>
  );
};
export default News;
