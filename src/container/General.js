
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Loading from './Loader'


const General = () => {

  const [news, setNews] = useState([]);
  const [loder,setLoder]= useState(true);

  useEffect(() => {
    LoadItems();
  }, [])

  const LoadItems = async () => {
    const result = await axios.get('https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=bfedf60a0901483092104a2156024f9a')
    
    setLoder(false);
    setNews(result.data.articles)

  }

  return (
    <>
      <div className='container'>
        <h1>General</h1>
        {loder ? <Loading/> : 
        
        <div className='row'>
          {
            news.map((value, index) => {
              return (
                <div className="card m-2 hover" style={{ width: '15rem', height: '30rem' }}>
                  <img src={value.urlToImage ? value.urlToImage : "https://www.reuters.com/resizer/K4x2sVG3QOBiN-q1PTkGNrJMjj0=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/B5POUO2JVZONJM7WJ6MX6BXV4U.jpg"} className="card-img-top" style={{height:'30%'}} alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{value.title.slice(0, 55)}...</h5>
                    <p className="card-text">{value.description ? value.description.slice(0,80) : "  Lorem ipsum dolor sit, amet consec adipisicing elit."}...</p>
                    <p>Date and time <br />{value.publishedAt}</p>
                    <a href={value.url} className="btn btn-primary">Read more</a>
                  </div>
                </div>
              )
            })
          }
        </div>
        }
        
      </div>
    </>
  );
}

export default General;
