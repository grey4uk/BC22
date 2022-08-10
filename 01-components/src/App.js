import React from 'react';
import 'App.css';
import pictures from 'db/pictures.json';
import { PicturesList } from 'components/PicturesList';

function App({ title = 'Hello, user' }) {
  return (
    // <React.Fragment>
    <>
      <h1>{title}</h1>
      {/* <h2>{2 + 2}</h2> */}
      <PicturesList images={pictures} />
    </>
    // </React.Fragment>
  );
}

export default App;
