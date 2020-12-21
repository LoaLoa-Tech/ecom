import { Fragment, useEffect, useState } from "react";
import Link from "next/link";
import { Col, Row } from "reactstrap";
import { NoResult } from "../../NoResult";
import { MdExpandMore } from "react-icons/md";
export function One({ products = [], hasMore, more = () => {} }) {
  return (
    <Row>
      {products.length ? (
        <Fragment>
          {products.map((product) => {
            return (
              <Col key={product.id} xs={6} md={6} lg={4} className="mb-5">
                <div>
                  <img src={product.imgs[0]} className="mb-3 border-1" />
                  <Link
                    href={{
                      pathname: `/product`,
                      query: { detail: product.url },
                    }}
                  >
                    <h5 className="text-main c-poiter">{product.name}</h5>
                  </Link>
                </div>
              </Col>
            );
          })}
          {more ? (
            <Col
              onClick={() => {
                more();
              }}
              xs={12}
            >
              <p style={{ cursor: "pointer" }}>
                <MdExpandMore />
                Xem thêm.
              </p>
            </Col>
          ) : null}
        </Fragment>
      ) : (
        <Col>
          <NoResult />
        </Col>
      )}
    </Row>
  );
}
