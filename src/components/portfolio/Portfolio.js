import React from 'react';
import { portfolioData } from '../../portfolioData';
import './portfolio.css';

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
         {
           portfolioData.map(item=>{
             return(
              <article className='portfolio_item' key={item.id}>
              <div className='portfolio_item-image'>
                <img src={item.image} alt="" />
              </div>
              <h3>{item.title}</h3>
              <div className='portfolio_item-cta'>
              <a href={item.github} className='btn'>Github</a>
              <a href={item.demo} className='btn btn-primary'>Live Demo</a>
              </div>
           </article>
             )
           })
         }
      </div>
    </section>
  )
}

export default Portfolio
