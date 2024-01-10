import React from 'react';
import './portfolio.css';

const Portfolio = () => {
  return (
    <section>
           <div className='heading__two'>
          <h1>My Latest Projects</h1>
          <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
        </div>
      <div className='wrapper'>
     
        
        {/* cards */}
        
        <div className='one'>
        <div className='content'>
                <p>development</p>
                <h1>
                    Getting tickets to the big show
                </h1>
            </div>
            <div className='butt__on'>
            <a className="rn-btn" href="/portfolio-details">View Details</a>
            </div>

        </div>

        {/* cards */}
        <div className='two'>
        <div className='content'>
                <p>development</p>
                <h1>
                    Getting tickets to the big show
                </h1>
            </div>
            <div className='butt__on'>
            <a className="rn-btn" href="/portfolio-details">View Details</a>
            </div>
        </div>

        {/* cards */}
        <div className='three'>
        <div className='content'>
                <p>development</p>
                <h1>
                    Getting tickets to the big show
                </h1>
            </div>
            <div className='butt__on'>
            <a className="rn-btn" href="/portfolio-details">View Details</a>
            </div>
        </div>

        {/* cards */}
        <div className='four'>
        <div className='content'>
                <p>development</p>
                <h1>
                    Getting tickets to the big show
                </h1>
            </div>
            <div className='butt__on'>
            <a className="rn-btn" href="/portfolio-details">View Details</a>
            </div>
        </div>

        {/* cards */}
        <div className='five'>
        <div className='content'>
                <p>development</p>
                <h1>
                    Getting tickets to the big show
                </h1>
            </div>
            <div className='butt__on'>
            <a className="rn-btn" href="/portfolio-details">View Details</a>
            </div>
        </div>

        {/* cards */}
        <div className='six'>
        <div className='content'>
                <p>development</p>
                <h1>
                    Getting tickets to the big show
                </h1>
            </div>
            <div className='butt__on'>
            <a className="rn-btn" href="/portfolio-details">View Details</a>
            </div>

        {/* cards */}
        </div>
      </div>
      <div className='view__buttton'>
        <button className='view__more'>
VIEW MORE
        </button>
      </div>
    </section>
  );
};

export default Portfolio;

