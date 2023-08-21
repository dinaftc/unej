/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import map from '../../Images/map.png'
export default function Articles() {

  return (
    <div>
      <h1 className="mb-5 text-5xl font-bold text-center m-5">Articles</h1>
      <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <fragment><img src={map} className="w-full" /><p>article1</p></fragment>
    
    
    <fragment><img src={map} className="w-full" /><p>article1</p></fragment>
    <fragment><img src={map} className="w-full" /><p>article1</p></fragment>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
      </div> 
  

  <div id="slide2" className="carousel-item relative w-full">
  <fragment><img src={map} className="w-full" /><p>article1</p></fragment> <fragment><img src={map} className="w-full" /><p>article1</p></fragment> <fragment><img src={map} className="w-full" /><p>article1</p></fragment>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
      </div> 


  <div id="slide3" className="carousel-item relative w-full">
  <fragment><img src={map} className="w-full" /><p>article1</p></fragment> <fragment><img src={map} className="w-full" /><p>article1</p></fragment> <fragment><img src={map} className="w-full" /><p>article1</p></fragment>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
       
  </div> 
  
  </div>
  </div>
     
   
  );
}
