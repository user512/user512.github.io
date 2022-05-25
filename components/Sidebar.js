import { h, createRef } from "preact";
import { useState, useCallback, useEffect } from "preact/hooks";

export default function Sidebar(props) {
  const ref = createRef();
  const toggleShow = useCallback(() =>
    ref.current.classList.toggle("nav-open")
  );

  const items = [
    { href: "#home", text: "Home" },
    { href: "#about", text: "About Me" },
    { href: "#contact", text: "Contact" },
  ];

  return (
    <div className="sidebar">
      <span className="icon menu-hamburger" onClick={toggleShow}></span>
      <nav className="nav" ref={ref}>
        <span className="icon menu-close" onClick={toggleShow}></span>
        <ul>
          {items.map(({ href, text }) => (
            <li>
              <a href={href} onClick={toggleShow}>
                {text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
