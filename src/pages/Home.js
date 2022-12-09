import React from 'react';
import HomeCSS from './Home.module.css';
import Korea from '../assets/Korea.jpeg';
import Arrow from '../assets/downarrow.png';
import projectData from '../assets/card.json';
import { CardItem } from '../components/CardItem';

export function Home() {
    return (
        <>
            <h1 className={HomeCSS.header}>Welcome To My Portfolio!</h1>
            <div className={HomeCSS.body}>
                <h4 className={HomeCSS.bodytext}>I'm currently a Computer Science concentrator at Brown University. Check out some projects I have worked on in my UI/UX and Introduction to Computer Graphics classes. <br/> <img className={HomeCSS.arrow} src={Arrow}></img> </h4>
                <img className={HomeCSS.image} src={Korea} alt='korea_img'></img>
            </div>
            <div className={HomeCSS.work}>
                <h2>Work:</h2>
                <div className={HomeCSS.cards}>
                    {projectData.map((item, index)=>{
                    return(<CardItem key={index} item={item}/>)
                    })}
                </div>
                
            </div>
                 
        </> 
    );
}