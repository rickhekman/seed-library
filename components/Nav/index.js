import React, { useState } from 'react';
import Link from 'next/link';
import styles from './Nav.module.css';

const Nav = () => {
  return (
    <nav className={styles.nav}>
    <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/locations">Locations</Link>
      </li>
    </ul>
  </nav>
  )
};

export default Nav;
