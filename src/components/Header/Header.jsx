import React, {useState, useEffect} from 'react'
import './Header.css'

const Header = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)

    const toggleNav = () => {
        setToggleMenu(!toggleMenu);
    }

    useEffect(() => {
        const changeWidth = () => {
            setScreenWidth(window.innerWidth)
        }

        window.addEventListener('resize', changeWidth);

        return () => {
            window.removeEventListener('resize', changeWidth)
        }
    }, [])
  return (
      <headera>
        <section className="header">
            <nav>
                { (toggleMenu || screenWidth > 1024) &&
                    <ul className="list">
                        <li className="items"><a href='#introduction'>HOME</a></li>
                        <li className="items"><a href='#'>PROJECTS</a></li>
                        <li className="items"><a href='#'>ABOUT</a></li>
                        <li className="items"><a href='#'>CONTACT</a></li>
                    </ul>
                }
                    <button onClick={toggleNav} className="btn">BTN</button>
            </nav>
        </section>
      </headera>
  )
}

export default Header