import { useState } from 'react';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

export function Header({ categories = [], onChoose = () => {} }) {
  const [more, setMore] = useState(false);
  const onMore = () => {
    setMore(!more);
  };

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);
  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle} nav >
      <DropdownToggle nav caret className="text-main font-weight-bold">
        Danh Mục
      </DropdownToggle>
      <DropdownMenu>
        {categories.map((category) => {
          return (
            <DropdownItem
              key={category.url}
              onClick={() => {
                onChoose(category);
              }}
            >
              {category.name}
            </DropdownItem>
          );
        })}
      </DropdownMenu>
    </Dropdown>
  );
}
