import { Fragment, useState } from "react";
import Link from "next/link";
import { Col, Row } from "reactstrap";
import { NoResult } from "../../NoResult";
import { NoImg } from "../../NoImg";
export function One({ posts = [], more = () => {} }) {
  return (
    <Fragment>
      {posts.length ? (
        <Fragment>
          {posts.map((post) => {
            return (
              <Fragment>
                <Link href={{ pathname: `/post`, query: { post: post.url } }}>
                  <a>
                    <h2>{post.title}</h2>{" "}
                  </a>
                </Link>
                <Row key={post.id} className="mb-3">
                  <Col xs={12} md={4} lg={3}>
                    {post.img ? <img src={post.img} /> : <NoImg />}
                  </Col>
                  <Col>
                    <p className="text-justify">{post.description}</p>
                  </Col>
                  {more ? (
                    <Col
                      xs={12}
                      onClick={() => {
                        more();
                      }}
                      style={{ cursor: "pointer" }}
                    >
                      Xem thêm
                    </Col>
                  ) : null}
                </Row>
              </Fragment>
            );
          })}
        </Fragment>
      ) : (
        <NoResult />
      )}
    </Fragment>
  );
}
