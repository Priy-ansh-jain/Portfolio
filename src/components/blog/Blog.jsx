import React from 'react'
import "./blog.css"

const news = () => {
  return (
    <section className='news__info'>
 <div className='heading__three'>
          <h1>Latest News</h1>
          <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
        </div>
      <div className='wrapper'>
     
        
        {/* cards */}
        
        <div className='blog__one'>
        <div className='blog__content'>
                <p>development</p>
                <h1>
                    Getting tickets to the big show
                </h1>
            </div>
            <div className='butt__onn'>
            <a className="rnn-btn" href="/portfolio-details">View Details</a>
            </div>

        </div>
  


        {/* cards */}
        <div className='blog__two'>
        <div className='blog__content'>
                <p>development</p>
                <h1>
                    Getting tickets to the big show
                </h1>
            </div>
            <div className='butt__onn'>
            <button className="rnn-btn" href="/portfolio-details">View Details</button>
            </div>
        </div>

        {/* cards */}
        <div className='blog__three'>
        <div className='blog__content'>
                <p>development</p>
                <h1>
                    Getting tickets to the big show
                </h1>
            </div>
            <div className='butt__onn'>
            <a className="rnn-btn" href="/portfolio-details">View Details</a>
            </div>
        </div>
        </div>

    </section>
  )
}

export default news
