import '@fortawesome/fontawesome-free/css/all.css'
import "fontsource-roboto-mono";
import "./custom.scss"

import { h, render } from 'preact'
import Sidebar from './components/Sidebar'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'

const App = () => {
  return (
    <div id="app">
      <Sidebar />
      <Home />
      <About />
      <Contact />
    </div>
  )
}

render(<App />, document.body)