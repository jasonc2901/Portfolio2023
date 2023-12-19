import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

export default function Landing() {
  return (
    <section id='landing'>
        <div className='landing__container'>
            <h2 className='landing__name'>Jason Caughers</h2>
            <a href="#about" className="btn btn--about">About me</a>
            <a href='#about' className='btn btn--next'>
                <FontAwesomeIcon icon="arrow-down"/>
            </a>
        </div>
    </section>
  )
}
