import React from 'react';
// import Normalize from 'react-normalize';
// import s from 'styles/GlobalStyles.module.css';

import styles from 'App.module.css';
import CardList from 'components/CardList/CardList';
import { ReactComponent as User } from 'assets/users.svg';

function App({ title = 'Hello, user' }) {
  // console.log('css in App', styles);
  return (
    // <div className={s.container}>
    <div className='container'>
      {/* <Normalize /> */}
      <div className={styles.container}>
        <h1
          style={{ display: 'flex', alignItems: 'center' }}>
          {title}
          <User className={styles.userIcon} />
        </h1>
        <CardList />
      </div>
    </div>
  );
}

export default App;
