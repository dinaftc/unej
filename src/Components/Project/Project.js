import React from "react";
import './Project.css';
export const Project = ({project}) =>{
const {image,title,description} = project ;
return (
  
<div>
  <div className="hero py-6 bg-base-100">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={image} className="max-w-sm rounded-lg " alt=''/>
    <div>
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="pt-6 pr-10">{description}</p><p className='font-bold'>en savoir plus</p>

    </div>
  </div>
</div>
    </div>

)
}