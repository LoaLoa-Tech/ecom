import { Fragment, useEffect, useState } from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { AiOutlineMenuUnfold } from 'react-icons/ai';
import { ListGroup, ListGroupItem } from 'reactstrap';
export function BreadcrumbHashtag({
  hashtags = [],
  onChoose = () => {},
  choosed
}) {
  const [more, setMore] = useState(false);
  const [limit, setLimit] = useState(7);
  useEffect(() => {
    if (window.innerWidth < 768) setLimit(0);
  });
  return (
    <Fragment>
      <Breadcrumb listClassName="bg-white border">
        <BreadcrumbItem key="hashtag" className="text-primary">
          Bài Viết
        </BreadcrumbItem>
        {hashtags.map((hashtag) => {
          return choosed == hashtag.url ? (
            <BreadcrumbItem key={hashtag.url} active>
              {hashtag.name}
            </BreadcrumbItem>
          ) : null;
        })}
      </Breadcrumb>
    </Fragment>
  );
}
