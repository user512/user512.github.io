import { h, render} from 'preact'

const About = () => {
  return (
    <div id="about" className="container">
      <h1>About me</h1>
      <div>
        <p>I am a software engineer and learning many things.</p>
        <p>Most of my experience were built upon <a href="https://reactjs.org/">React</a>, <a href="https://rubyonrails.org/">Ruby on Rails</a> and <a href="https://www.postgresql.org/">PostgreSQL</a> stack, but I have played some other stack like <a href="https://nodejs.org/en/">Node.js</a>, <a href="https://hapi.dev/">Hapi</a>, <a href="https://www.mongodb.com/">MongoDB</a> and I love these technologies.</p>
        <p>I like solving problems and I am open minded to new technologies and always get stuff done.</p>
      </div>
    </div>
  )
}

export default About
