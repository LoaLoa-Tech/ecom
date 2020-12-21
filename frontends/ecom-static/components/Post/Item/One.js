import { Fragment } from 'react';
import { Col, Container, Row } from 'reactstrap';
import { NoImg } from '../../NoImg';
import Posts from '../List/index';

const One = ({ post }) => {
  console.log(post?.hashtags);
  return (
    <Container>
      <Row>
        <Col
          lg={8}
          style={{ borderRadius: 20, backgroundColor: '#f4f5f6' }}
          className="p-4 mb-3"
        >
          <h1 className="text-primary my-5">{post.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.body }}></div>
        </Col>{' '}
        <Col xs={12} lg={4} className="px-5">
          <Posts option="RightDetail" PostWhereInput={{ url_not: post.url }} />
        </Col>
      </Row>
    </Container>
  );
};
export default One;
