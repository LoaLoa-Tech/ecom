import { Fragment, useEffect, useState } from 'react';
import { AiOutlineMenuUnfold } from 'react-icons/ai';
import { MdExpandLess, MdExpandMore } from 'react-icons/md';
import { ListGroup, ListGroupItem } from 'reactstrap';
export function Sider({ categories = [], onChoose = () => {}, choosed }) {
  const [more, setMore] = useState(false);
  const [limit, setLimit] = useState(7);
  useEffect(() => {
    if (window.innerWidth < 768) setLimit(0);
  });
  return (
    <ListGroup className="mb-3">
      {categories.length ? (
        <Fragment>
          {categories
            .slice(0, more ? categories.length : limit)
            .map((category) => {
              return (
                <ListGroupItem
                  key={category.url}
                  onClick={() => {
                    setMore(false);
                    onChoose(category);
                  }}
                >
                  <p
                    className={`m-0 text-${
                      choosed == category.url ? 'primary' : 'default'
                    }`}
                  >
                    {category.name}
                  </p>
                </ListGroupItem>
              );
            })}
          {categories.length > limit ? (
            <ListGroupItem
              key="more"
              onClick={() => setMore(!more)}
              className="text-secondary"
            >
              {more ? (
                <span>
                  <MdExpandLess /> Ẩn bớt
                </span>
              ) : (
                <span>
                  <MdExpandMore /> Mở rộng danh mục
                </span>
              )}
            </ListGroupItem>
          ) : null}
        </Fragment>
      ) : (
        <ListGroupItem key="no-result">
          <pre>no result.</pre>
        </ListGroupItem>
      )}
    </ListGroup>
  );
}
