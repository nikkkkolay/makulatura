'use client';

import { FC, useState } from 'react';
import { Button, Social } from '@/components';
import styles from './Navigation.module.css';

const paths = [
  { name: 'Наклейки', path: '#' },
  { name: 'Преимущества', path: '#' },
  { name: 'Магазин', path: '#' },
  { name: 'Контакты', path: '#' },
];

export const Navigation: FC = () => {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);

  return (
    <>
      <nav className={styles.navigation}>
        <ul>
          {paths.map(({ name, path }, i) => (
            <li key={i}>
              <a href={path}>{name}</a>
            </li>
          ))}
        </ul>
      </nav>
      <Button className={styles.button} size="sm" onClick={() => setOpen(!open)}>
        {!open ? 'Meню' : 'Закрыть'}
      </Button>
      <div className={`${styles.overlay} ${open ? styles.active : ''}`} onClick={closeMenu}>
        <nav className={styles.navigationMobil}>
          <ul>
            {paths.map(({ name, path }, i) => (
              <li key={i}>
                <a href={path} onClick={closeMenu}>
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <Social classNames={styles.social} />
      </div>
    </>
  );
};
