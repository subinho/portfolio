import React, {useState, useEffect, useRef, useContext } from 'react'
import { ThemeContext } from '../../App'
import './Header.css'
import { Link } from 'react-scroll'
import { AiOutlineMenu } from 'react-icons/ai'

const Header = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)

    const { darkTheme, toggleTheme } = useContext(ThemeContext)

    let navbarRef = useRef();

    const toggleNav = () => {
        setToggleMenu(!toggleMenu);
    }

    useEffect(() => {
        // tracking screen width, bcs navbar doesn't show up otherwise
        const changeWidth = () => {
            setScreenWidth(window.innerWidth)
        }

        window.addEventListener('resize', changeWidth);

        // closing navbar when clicking outside
        let handler = event => {
            if (!navbarRef.current.contains(event.target)) {
                setToggleMenu(false);
            }
        }

        document.addEventListener('mousedown', handler)

        return () => {
            window.removeEventListener('resize', changeWidth)
            document.removeEventListener('mousedown', handler)
        }
    }, [])

  return (
      <header>
        <section>
            <nav ref={navbarRef} className={darkTheme ? 'navbar dark' : 'navbar'}>
                { (toggleMenu || screenWidth > 1024) &&
                    <ul className="navbar--list">
                        <li className="list--item">
                            <Link to="home" spy={true} smooth={true} offset={0} duration={500} className='link'>HOME</Link>
                        </li>
                        <li className="list--item">
                            <Link to="projects" spy={true} smooth={true} offset={50} duration={500} className='link'>PROJECTS</Link>
                        </li>
                        <li className="list--item">
                            <Link to="about" spy={true} smooth={true} offset={50} duration={500} className='link'>ABOUT</Link>
                        </li>
                        <li className="list--item">
                            <Link to="contact" spy={true} smooth={true} offset={50} duration={500} className='link'>CONTACT</Link>
                        </li>
                        <div className="animation"></div>
                    </ul>
                }
                    <button onClick={toggleNav} className="btn-mobile"><AiOutlineMenu size='2em'/></button>
            </nav>
        </section>
      </header>
  )
}

export default Header