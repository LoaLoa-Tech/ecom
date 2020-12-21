import { Col, Container, Row } from 'reactstrap';
const ShortIntro = ({ intros = [] }) => {
  return (
    <Container fluid className="my-5">
      <Row  className="row-eq-height">
        {intros.map((intro) => {
          return (
            <Col className="p-3">
              <div className="short-intro-box d-flex justify-content-center align-iitems-center p-4">
                <div>
                  <Row>
                    <Col xs={12}className="p-5">
                      <img src={intro.img}/>
                    </Col>
                    <Col className="text-center">
                      <h4>{intro.title}</h4>
                      <p>{intro.content}</p>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};
export default ShortIntro;
