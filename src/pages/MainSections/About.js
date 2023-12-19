import React from 'react'
import aboutMe from '../../data/AboutInfo';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function About() {
  function AboutBio() {
      return aboutMe.bio.split("\n").map((s) => {
          return <p>{s}</p>
      });
  }

  return (
    <section id='about' className='about__container'>
        <div className="about__left">
            <div className="about__left-content">
                <div className='about__left-card'>
                    <div className="shadow">
                        <div className="about__left-img">
                            <img src="me.jpg" alt='me' />
                        </div>
                    </div>

                    <h2>Jason<br />Caughers</h2>
                    <h3>Senior Software Engineer</h3>
                    <div className='about__left-icons about__left-icons--mobile'>
                      <li><a href='https://www.facebook.com/rachel.caughers' target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faFacebookF} /></a></li>
                      <li><a href='https://www.instagram.com/rachelcaughersphotography/' target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faTwitter} /></a></li>
                      <li><a href='https://rcaughers.blogspot.com/2021/08/self-improvement-needed.html' target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faLinkedin} /></a></li>
                    </div>
                    <div className='about__left-bio'>{aboutMe.bio}</div>
                </div>

                <ul className="about__left-icons">
                    <li><a href='https://www.facebook.com/rachel.caughers' target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faFacebookF} /></a></li>
                    <li><a href='https://www.instagram.com/rachelcaughersphotography/' target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faTwitter} /></a></li>
                    <li><a href='https://rcaughers.blogspot.com/2021/08/self-improvement-needed.html' target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faLinkedin} /></a></li>
                </ul>
            </div>
        </div>

        <div className="about__right">
            <h1>{aboutMe.intro}<span>!</span></h1>
            <h2>{aboutMe.subIntro}</h2>
            <div className="about__right-btns">
                <Link to='#work' className='about__btn about__btn-primary'>
                    my work
                </Link>
                <Link to='#contact' className='about__btn about__btn-white'>
                    contact me
                </Link>
            </div>

            <div className="about__right-bio">
                <AboutBio />
            </div>
        </div>
    </section>
  )
}
