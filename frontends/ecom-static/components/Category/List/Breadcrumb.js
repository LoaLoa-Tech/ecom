import { Fragment, useEffect, useState } from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { ListGroup, ListGroupItem } from 'reactstrap';
export function BreadcrumbCategory({
  categories = [],
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
        <BreadcrumbItem key="category" className="text-primary">
          Danh Mục
        </BreadcrumbItem>
        {categories.map((category) => {
          return choosed == category.url ? (
            <BreadcrumbItem key={category.url} active>
              {category.name}
            </BreadcrumbItem>
          ) : null;
        })}
      </Breadcrumb>
    </Fragment>
  );
}
