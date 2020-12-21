import { Fragment, useState } from 'react';
import Link from 'next/link';
import { Col, Row } from 'reactstrap';
import { NoResult } from '../../NoResult';
import { NoImg } from '../../NoImg';
export function RightDetail({ posts = [], more = () => {} }) {
  return (
    <Fragment>
      {posts.length ? (
        <Fragment>
          {posts.map((post) => {
            return (
              <Fragment>
                <Row key={post.id} className="mb-3">
                  <Col xs={12} className="p-0">
                    {post.img ? <img className="mb-3" src={post.img} /> : <NoImg />}
                  </Col>
                  <Col>
                    <Link
                      href={{ pathname: `/post`, query: { post: post.url } }}
                    >
                      <a>
                        <h6>{post.title}</h6>{' '}
                      </a>
                    </Link>

                    <p className="">{post.description.slice(0, 80)}...</p>
                  </Col>
                </Row>
              </Fragment>
            );
          })}
          {more ? (
            <pre
              onClick={() => {
                more();
              }}
            >
              Xem thêm
            </pre>
          ) : null}
        </Fragment>
      ) : (
        <NoResult />
      )}
    </Fragment>
  );
}
