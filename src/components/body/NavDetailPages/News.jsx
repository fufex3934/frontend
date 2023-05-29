import React from 'react'
import Navs from '../../navbars/navs'
import Footer from '../Footer'
import { useState, useEffect } from 'react';

function News() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=API_KEY')
        .then(response => response.json())
        .then(data => setNews(data.articles));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Navs/>
      <div>
        {
        news.map((article, index) => (
          <div key={index}>
            <h2>{article.title}</h2>
            <p>{article.description}</p>
          </div>
        ))
        }
      </div>
      <Footer/>
    </>
  );
}
export default News
