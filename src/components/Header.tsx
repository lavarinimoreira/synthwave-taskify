import React from 'react'
import './styles.css'
import { AiFillGithub, AiOutlineMail, AiOutlineTwitter, AiFillInstagram, AiOutlineLinkedin } from 'react-icons/ai'

const Header = () => {
    return (
        <header className='header'>
            <a href="https://www.lavarinimoreira.me" target="_blank">lavarinimoreira</a>
            <div>
                <a href="https://www.github.com/lavarinimoreira" target="_blank">
                    <AiFillGithub />
                </a>
                <a href="mailto:gabriel@lavarinimoreira.me" target="_blank">
                    <AiOutlineMail />
                </a>
                <a href="https://www.linkedin.com/in/gabriel-lavarini-moreira-878706149/" target="_blank">
                    <AiOutlineLinkedin />
                </a>
                <a href="https://twitter.com/lavarinimoreira" target="_blank">
                    <AiOutlineTwitter />
                </a>
                <a className='instagram' href="https://www.instagram.com/gabriel_lavarini/" target="_blank">
                    <AiFillInstagram />
                </a>
            </div>
        </header>
    )
}

export default Header
