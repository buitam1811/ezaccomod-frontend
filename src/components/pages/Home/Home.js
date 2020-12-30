import React, { useState ,useEffect } from 'react';
import '../../../App.css';
import { Button } from '../../Button';
import './Home.css';

function Home() {
  return (
    <div className='welcomepage-container'>
      <h1>SPENDING YOUR HOLIDAY IN VIETNAM ?</h1>
      <p>Rent a home in the best cities</p>
      <div className='option-btns'>
        {(localStorage.getItem('user_role')==='S' || localStorage.getItem('user_role')==='R')?
        <>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          path='/products'
        >
          GET A RENT NOW
        </Button>
        </> : <></>
        }
        {localStorage.getItem('user_role')==='S' ?
        <>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          path='/sign-up'
        >
          JOIN OUR COMMUNITY <i class="fas fa-user-plus"></i>
        </Button>
        </> : <></>
        }
      </div>
    </div>
  );
}

export default Home;
