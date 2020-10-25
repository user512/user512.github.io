import { h } from 'preact'
import Icon from './Icon'

const Contact = () => {
  return (
    <div id="contact" className="container">
      <a className="button" href="mailto:me@tomlee.email">Email Me</a>
      <div className="icons">
        <Icon link="https://github.com/user512" icon="github" size="base" />
        <Icon link="https://www.linkedin.com/in/tomlee512/" icon="linkedin" size="base" />
        <Icon link="mailto:me@tomlee.email" icon="email" size="base" />
      </div>
    </div>
  )
}

export default Contact
