import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <div className="header-top">
          <div className="header-left">
            <nav>
              <ul>
                <li><a href="#community">Community</a></li>
               
              </ul>
              <ul>
              <a href="#login">Login|Register</a>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <main>
        <aside className="sidebar">
          {/* Optional sidebar content can be added here */}
        </aside>
        <section id="popular-spots" className="spot-section">
          <h2>Popular Spots</h2>
          <p>Discover the most visited destinations recommended by travelers.</p>
          {/* Add popular spot cards here */}
        </section>
        <section id="family-friendly" className="spot-section">
          <h2>Family-Friendly Spots</h2>
          <p>Explore kid-friendly attractions and activities for the whole family.</p>
          {/* Add family-friendly spot cards here */}
        </section>
        <section id="chill-spots" className="spot-section">
          <h2>Chill Spots</h2>
          <p>Find serene and relaxing places to unwind and rejuvenate.</p>
          {/* Add chill spot cards here */}
        </section>
      </main>
      <footer>
        <p>&copy; 2024 Travel Spots Recommendations</p>
      </footer>
    </div>
  );
}

export default App;
