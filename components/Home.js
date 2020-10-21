import { h } from 'preact'
import Introduction from './Introduction'

const Home = () => {
  return(
    <div id="home" className="container">
      <Introduction strings={[
        "am a software engineer.",
        "love my family and friends.",
        "love sci-fi movies^500 and tv shows.",
      ]}/>
    </div>
  )
}

export default Home