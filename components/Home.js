import { h } from 'preact'
import Introduction from './Introduction'
import Icon from './Icon'

const Home = () => {
  return(
    <div id="home" className="container">
      <Introduction strings={[
        "am a software engineer.^2000",
        "love my family and friends.^2000",
        "love sci-fi movies...^500 and tv shows.^2000",
      ]}/>
      <div className="icons">
        <Icon link="https://github.com/user512" icon="github" size="xl" />
        <Icon link="https://www.linkedin.com/in/tomlee512/" icon="linkedin" size="xl" />
        <Icon link="mailto:me@tomlee.email" icon="email" size="xl" />
      </div>
    </div>
  )
}

export default Home