import React, { useState } from 'react';
import './App.css';


// Implementando componentes para cambiar entre "Música" y "Ciencia"
import Header from './Header';
import MusicSection from './MusicSection';
import ScienceSection from './ScienceSection';


// import gif from './img/gif.gif'


function App() {
  // Implementando componentes para cambiar entre "Música" y "Ciencia"
  const [showMusicSection, setShowMusicSection] = useState(true);

  const handleMusicClick = () => {
    setShowMusicSection(true);
  };

  const handleScienceClick = () => {
    setShowMusicSection(false);
  };
  
  return (


    

    <div className="App">


      <Header
        onMusicClick={handleMusicClick}
        onScienceClick={handleScienceClick}
      />
      {showMusicSection ? <MusicSection /> : <ScienceSection />}



      <h4> Nicolás S. Quiroz</h4>
      
      <div>
        
      </div>

      <div>
         <p>
           I'm a Data Scientist living in Viña del Mar, Chile.
        </p>
      </div>
    <div className='Blog'>

    <h4>A journey towards Deep Music.</h4>
    <p>
  I can't be the only one who has experienced the mysterious feeling that deep dreaming evokes. It's strangely familiar and hypnotic to our eyes, yet so odd to watch.</p>
  <p>
  
  As with anything that's visually beautiful and nontrivial to my eyes, I wonder: <h4>How does it sound?</h4> Can every illusion or strangeness found in light be translated into sounds? Can sounds cause the same unfamiliarity in our imaginations as music warms our brains and beauty enlightens our eyes?</p>
  <p>
  
  This is me starting to document what will be my learning process towards machine learning, beginning with being guided by a very meaningful project I've been working on for the past months.
  </p><p>
  With my brilliant friend @jajamacka, we've been secretly working on the same creative project. Right now, she's making a video for music I made, and I'm creating the music for a video she made. This started as our first steps to finally create the things we wanted to create.
  </p>
  <div className='gif'>
    <p>lalala
  </p><p>lalala
  </p><p>lalala
  </p><p>lalala
  </p><p>lalala
  </p><p>lalala
  </p>
  </div>
  {/* <img src={gif} class="gif" />; */}
  
  <p>
  The important thing now is that her video is simply beautiful to my eyes and mind. I see so many interpretations, so chaotic yet concise and ordered at the same time. She loves programming, as you might notice.
  </p><p>
  So I found in this challenge the perfect opportunity to incorporate this beautiful area of science and technology and see what happens if we let the machine dreams merge with sound waves.
  </p><p>
  Now, I'm certain that there are tons of researchers, artists, and innovators who are at the frontier of what we know, and so many knowledgeable people who can either see together or differentiate where the line between art, science, or technology is drawn. I'm a beginner in every discipline. But I see enormous value in the thinking process. 
  , the mental process that comes with learning. I feel very inspired by how people arrive at the ideas they come across, how the lines and dots connect. It's as if the branches that come before something we can call an idea are, of course, part of that idea.
   {/* I don't mean to say that I'll reach a groundbreaking idea right away, but I'm inspired by witnessing how others learn. */}
  </p><p>
  I'd like to apply that process of mixing things in unexpected ways along the process, as I find that most of the time, I get the best insights from learning how everyone else learns. And I... </p>
    </div>
      
     </div>
  );
}

export default App;
