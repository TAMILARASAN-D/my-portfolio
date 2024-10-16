import React from 'react';
import './FavoriteQuotes.css'; 
import apjquoteImage1 from '../assets/apjquote1.jpg';
import quoteImage1 from '../assets/quote1.jpg';
import quoteImage2 from '../assets/quotetamil1.jpg'; 
import quoteImage3 from '../assets/quote2.jpg'; 
import quoteImage4 from '../assets/quote3.jpg'; 
import quoteImage5 from '../assets/quote4.jpg'; 

const FavoriteQuotes = () => {
  return (
    <section className="quotes-section">
      <h1>Favorite Quotes of Mine</h1>
      
      {/* Text-based Quotes */}
      <div className="text-quotes">
        <div className="quote-card">
          <blockquote>"“Man needs difficulties in life because they are necessary to enjoy success.” - A.P.J.Abdul Kalam</blockquote>
        </div>
        <div className="quote-card">
          <blockquote>"In the middle of difficulty lies opportunity." - Albert Einstein</blockquote>
        </div>
      </div>
      
      {/* Image-based Quotes */}
      <div className="image-quotes">
      <img src={apjquoteImage1} alt="Quote 1" className="quote-image"/>
      <img src={quoteImage1} alt="Quote 1" className="quote-image"/>
        <img src={quoteImage2} alt="Quote in Tamil" className="quote-image"/>
        <img src={quoteImage3} alt="Quote 2" className="quote-image"/>
        <img src={quoteImage4} alt="Quote 3" className="quote-image"/>
        <img src={quoteImage5} alt="Quote 4" className="quote-image"/>
      </div>
    </section>
  );
};

export default FavoriteQuotes;
