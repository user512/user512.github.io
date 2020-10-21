import { h, createRef } from 'preact'
import { useState, useCallback } from 'preact/hooks';
import { setConstantValue } from 'typescript';

export default function Sidebar(props) {
  const [show, setShow] = useState(false)
  const toggleShow = useCallback(() => setShow(!show), [show])

  const items = [
    { href: "#home", text: "Home" },
    { href: "#about", text: "About Me" },
    { href: "#contact", text: "Contact" },
  ]

  return (
    <div className="sidebar">
      <span className="icon menu-hamburger" onClick={ () => toggleShow() }></span>
      { show ? <nav className="nav">
        <span className="icon menu-close" onClick={ () => toggleShow() }></span>
        <ul>
          { items.map( ({href, text}) => (
            <li>
              <a href={href}>{text}</a>
            </li>
          )) }
        </ul>
      </nav> : null }
    </div>
  )
}
