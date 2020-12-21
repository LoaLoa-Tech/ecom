import Link from 'next/link';
import { useState } from 'react';
import { NavItem, NavLink } from 'reactstrap';

export function Header({ hashtags = [], onChoose = () => {}, limit = 5 }) {
  return hashtags.map((hashtag) => (
    <NavItem
      key={hashtag.url}
      onClick={() => {
        onChoose(hashtag);
      }}
    >
      <Link href="/">
        <NavLink className="font-weight-bold">
          {hashtag.name}
        </NavLink>
      </Link>
    </NavItem>
  ));
}
