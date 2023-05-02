import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
      <h1 class="typing-animation">Hey, I'm Brian</h1>
        <nav>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <section id="about" className="section about">
        <div className="container">
          <h2>About Me</h2>
          <p>I'm a software developer working remotely from Buenos Aires, Argentina. </p>
          <img src="profile-pic.jpg" alt="Profile Pic" />
        </div>
      </section>

      <section id="projects" className="section projects">
        <div className="container">
          <h2>Projects</h2>
          <ul>
            <li>
              <h3>Github</h3>
              <button href='https://github.com/brianswitach'>Press me</button>
            </li>
            <li>
              <h3>Project 2</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </li>
            <li>
              <h3>Project 3</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </li>
          </ul>
        </div>
      </section>

      <section id="contact" className="section contact">
        <div className="container">
          <h2>Contact Me</h2>
          <form>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" />

            <label htmlFor="message">Message</label>
            <textarea id="message" name="message"></textarea>

            <button type="submit">Send</button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default App;
