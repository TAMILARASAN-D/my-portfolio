import React from 'react';
import './FavoriteQuotes.css'; 
import tamilImage1 from '../assets/quotespurananooru.png';
import apjquoteImage1 from '../assets/apjquote1.jpg';
import quoteImage1 from '../assets/quote1.jpg';
import quoteImage2 from '../assets/quotetamil1.jpg'; 
import quoteImage3 from '../assets/quote2.jpg'; 
import quoteImage4 from '../assets/quote3.jpg'; 
import quoteImage5 from '../assets/quote4.jpg'; 
import quoteImage6 from '../assets/quote5.jpg';


const FavoriteQuotes = () => {
  return (
    <section className="quotes-section">
      <h1>Favorite Quotes of Mine</h1>
      
      {/* Text-based Quotes */}
      <div className="text-quotes">
      <div className="quote-card">
          <blockquote>"முயற்சி திருவினை ஆக்கும் முயற்றின்மை <br></br>
                       இன்மை புகுத்தி விடும்." - திருவள்ளுவர்</blockquote>
        </div>
      <div className="quote-card">
          <blockquote>"யாதும் ஊரே; யாவரும் கேளிர்; தீதும் நன்றும் பிறர் தர வாரா;" - கணியன் பூங்குன்றனார்</blockquote>
        </div>
        <div className="quote-card">
          <blockquote>"Man needs difficulties in life because they are necessary to enjoy success." - A.P.J.Abdul Kalam</blockquote>
        </div>
        <div className="quote-card">
          <blockquote>"In the middle of difficulty lies opportunity." - Albert Einstein</blockquote>
        </div>
      </div>
      
      {/* Image-based Quotes */}
      <div className="image-quotes">
      <img src={tamilImage1} alt="தீதும் நன்றும் பிறர் தர வாரா கவிதை" className="quote-image"/>
      <img src={quoteImage6} alt="A quote of reality" className="quote-image"/>
      <img src={apjquoteImage1} alt="apjquoteImage 1" className="quote-image"/>
        <img src={quoteImage2} alt="Quote in Tamil" className="quote-image"/>
        <img src={quoteImage3} alt="Quote of Coders" className="quote-image"/>
        <img src={quoteImage4} alt="Quote of Mariselvaraj" className="quote-image"/>
        <img src={quoteImage5} alt="Quote of understanding" className="quote-image"/>
      </div>
    </section>
  );
};

export default FavoriteQuotes;
