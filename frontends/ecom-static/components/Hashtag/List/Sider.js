import { Fragment, useEffect, useState } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
export function Sider({ hashtags = [], onChoose = () => {}, choosed }) {
  const [more, setMore] = useState(false);
  const [limit, setLimit] = useState(7);
  useEffect(() => {
    if (window.innerWidth < 768) setLimit(0);
  });
  return (
    <Fragment>
      <ListGroup className="mb-3">
        {hashtags.length ? (
          hashtags.slice(0, more ? hashtags.length : limit).map((hashtag) => {
            return (
              <ListGroupItem
                key={hashtag.url}
                onClick={() => {
                  setMore(false);
                  onChoose(hashtag);
                }}
              >
                {' '}
                <p
                  className={`m-0 text-${
                    choosed == hashtag.url ? 'primary' : 'default'
                  }`}
                >
                  {hashtag.name}
                </p>
              </ListGroupItem>
            );
          })
        ) : (
          <ListGroupItem key="no-result">
            <pre>no result.</pre>
          </ListGroupItem>
        )}
        {hashtags.length > limit ? (
          <ListGroupItem
            key="more"
            onClick={() => setMore(!more)}
            className="text-secondary"
          >
            {more ? <span>Ẩn bớt</span> : <span>Mở rộng bài viết</span>}
          </ListGroupItem>
        ) : null}
      </ListGroup>
    </Fragment>
  );
}
