import { h, render, Component } from 'preact'
import Typed from 'typed.js'

class Introduction extends Component {
  componentDidMount() {
    const { strings } = this.props
    const options = {
      strings: strings,
      typeSpeed: 80,
      backSpeed: 30,
      loop: true,
    }
    this.typed = new Typed(this.element, options)
  }

  componentWillUnmount() {
    this.typed.destroy()
  }

  render() {
    return (
      <div id="introduction" className="container">
        <p>Hi, my name is <strong className="author-name">Tom Lee</strong></p>
        <p>and I <span className="typing" ref={(element) => { this.element = element }} >
          </span>
        </p>
      </div>
    )
  }
}

export default Introduction
