import React, {useState, useEffect, useRef} from 'react'
import './Header.css'
import { AiOutlineMenu } from 'react-icons/ai'

const Header = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)

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
            <nav ref={navbarRef} className='navbar'>
                { (toggleMenu || screenWidth > 1024) &&
                    <ul className="navbar--list">
                        <li className="list--item"><a href='#home' className='link active'>HOME</a></li>
                        <li className="list--item"><a href='#projects' className='link'>PROJECTS</a></li>
                        <li className="list--item"><a href='#about' className='link'>ABOUT</a></li>
                        <li className="list--item"><a href='#contact' className='link'>CONTACT</a></li>
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