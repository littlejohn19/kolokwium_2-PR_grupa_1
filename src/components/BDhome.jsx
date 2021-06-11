import React, { Component } from 'react';
import { useState } from 'react';

const Home = () => {
  const [value, setValue] = useState('world');

  return (
    <div className='jumbotron'>
      <h1 className='display-4'>Hello, {value}!</h1>
      <p className='lead'>
        This is a simple hero unit, a simple jumbotron-style component for
        calling extra attention to featured content or information.
      </p>
      <hr className='my-4'></hr>
      <p>
        It uses utility classes for typography and spacing to space content out
        within the larger container.
      </p>
      <p class='lead'>
        <a
          class='btn btn-primary btn-lg'
          href='#'
          onClick={() => setValue('Bartosz')}
          role='button'>
          Hello my name
        </a>
      </p>
    </div>
  );
};

export default Home;
