import React from 'react';
import FilterCSS from './Filter.module.css';
import Carousel from 'react-bootstrap/Carousel';

export function Filter() {
    return (
        <>
        <h1 className={FilterCSS.header}>Filter - CS1230 Introduction to Computer Graphics</h1>
        <div className={FilterCSS.body}>
            <h6 className={FilterCSS.bodytext}>In this project for my CS1230 Intro to Computer Graphics class, I was able to build an application that could apply filters to an image using C++.</h6>
        </div>
        <div className={FilterCSS.results}>
            <figure>
                <img className={FilterCSS.image} src= {process.env.PUBLIC_URL + "/" + "/images/filter-imgs/filter.png"}/>
            </figure>
        </div>
        <div>
            <h4 className={FilterCSS.devtext}>Goal</h4>
            <p className={FilterCSS.devtext}>
            The goal of this project was to create a filter application that is able to filter images with edge detection, blurring, and scaling the image in the X and Y dimmensions.
            </p>
            <h4 className={FilterCSS.devtext}>Implementation</h4>
            <ul className={FilterCSS.devtext}>
                <li>To implement this project, knowledge of linear algrebra is highly required.</li>
                <li>Essentially, each image is represented by a 2-dimensional array where each pixel corresponds to a index in the array. </li>
                <li>Each filter was calculated using matrix algebra, kernels, and a concept called convolution in order to change the contents in the 2-dimensional array.</li>
                <li>Once these calculations were done for each pixel, it was applied to the image and the results can be seen below. </li>
            </ul>
            <p >
             
            </p>

            <h2 className={FilterCSS.devtext}>Results</h2>
            <div className={FilterCSS.results}>
                <Carousel variant="dark" slide={false}>
                    <Carousel.Item>
                        <img
                        className={FilterCSS.image}
                        src= {process.env.PUBLIC_URL + "/" + "/images/filter-imgs/blur.png"}
                        alt="blur"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className={FilterCSS.image}
                        src= {process.env.PUBLIC_URL + "/" + "/images/filter-imgs/edge-detect.png"}
                        alt="Edge Detect"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className={FilterCSS.image}
                        src= {process.env.PUBLIC_URL + "/" + "/images/filter-imgs/scale-x.png"}
                        alt="Scale"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className={FilterCSS.image}
                        src= {process.env.PUBLIC_URL + "/" + "/images/filter-imgs/scale-ed.png"}
                        alt="Scale and Edge Detection"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>   
        <div>
            <h2 className={FilterCSS.bodytext}>Conclusion</h2>
            <p className={FilterCSS.conclusiontext}>
            Overall, I this was one of my favorite projects to implement. I thought it was really interesting to apply a higher level of math to computer science in order to create an application that can filter images. It was really satisfying seeing it come to life and this was a really fun project to do as an introduction to computer graphics.
            </p>   
        </div> 

    </>
    );
}