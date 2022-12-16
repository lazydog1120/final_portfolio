import React from 'react';
import DevelopmentCSS from './Development.module.css';
import Carousel from 'react-bootstrap/Carousel';

export function Development() {
    return (
        <>
        <h1 className={DevelopmentCSS.header}>Development</h1>
        <div className={DevelopmentCSS.body}>
            <h6 className={DevelopmentCSS.bodytext}>In this project I was tasked to develop a filtering application. I had to create list-based interactive interface, use interface components, and tie the components to an internal data state using React.</h6>
            <h6 className={DevelopmentCSS.bodytext}>Try out <a href='https://lazydog1120.github.io/development'>my app</a>!</h6>
        </div>
        <div className={DevelopmentCSS.home}>
            <img className={DevelopmentCSS.homeImage} src={process.env.PUBLIC_URL + "/images/development-imgs/home.png"}></img>
        </div>
        <div>
            <h4 className={DevelopmentCSS.devtext}>Goal of Application</h4>
            <p className={DevelopmentCSS.devtext}>
            The goal of this app is to provide the user with simple statistics on the 2022 Formula 1 Driver roster. I think this provides value to the user because of its ability to filter out drivers based on team, where they are from and also sort the drivers based on points earned from races.
            </p>
        </div>
        
        <div>
            <h2 className={DevelopmentCSS.bodytext}>Implementation</h2>
            <div>
                <h4 className={DevelopmentCSS.devtext}>Components</h4>
                <ul className={DevelopmentCSS.devtext}>
                    <li>There are 2 components to this app. </li>
                    <li>One being a DriverItem which is the card for each driver (that being the image and info provided on the driver) and the other being the Nav Bar which provides all the    filters. </li>
                    <li>The nav bar is at the top of the app while the driver cards are below in grid like order going from left to right. </li>
                </ul>
                <h4 className={DevelopmentCSS.devtext}>Data and Filters</h4>
                <ul className={DevelopmentCSS.devtext}>
                    <li>For the Driver Item, the data it is given is the driver image, name, team they are on, nationality, region they are from, number of wins, and points earned from races. There are also two buttons provided to add to and remove from favorites.</li>
                    <li>In terms of the Nav Bar, it contains 3 filters and 1 sort. The filters filter by team, nationality, and favorites while the sort sorts the drivers based on points earned from greatest to least.</li>
                    <li>There is also a reset data function that resets all the filters when it is clicked, and a combined points state that keeps track of the combined points of the drivers added to favorites.</li>
                </ul>
    
                <h4 className={DevelopmentCSS.devtext}>Using the App</h4>
                <ul className={DevelopmentCSS.devtext}>
                    <li>Using the app is very simple. In order to see changes, the user just has to click on one of the filters on the Nav Bar or click one of the buttons on the driver card.</li>
                    <li>Once a filter or button is clicked, the corresponding function is applied in order to execute the proper filtering/sorting to the driver cards.</li>
                    <li>Specifically when the add/remove from favorites button is clicked, I have an aggregator that keeps track of the combined points in the users favorites list.</li>
                </ul>
                <div className={DevelopmentCSS.filters}>
                <Carousel slide={false} variant="dark">
                    <Carousel.Item>
                        <img
                        className={DevelopmentCSS.image}
                        src= {process.env.PUBLIC_URL + "/images/development-imgs/sort.png"}
                        alt="Sort"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className={DevelopmentCSS.image}
                        src= {process.env.PUBLIC_URL + "/images/development-imgs/McLaren-filter.png"}
                        alt="McLaren Filter"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className={DevelopmentCSS.image}
                        src={process.env.PUBLIC_URL + "/images/development-imgs/Asia-filter.png"}
                        alt="Asia Filter"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className={DevelopmentCSS.image}
                        src= {process.env.PUBLIC_URL + "/images/development-imgs/favorites-filter.png"}
                        alt="Favorites Filter"
                        />
                    </Carousel.Item>
                </Carousel>
                </div>
            </div>
        </div>    
        <div>
            <h2 className={DevelopmentCSS.bodytext}>Conclusion</h2>
            <p className={DevelopmentCSS.conclusiontext}>
            Overall, I took a lot to take away from this project since it was my first time diving into and using React. I learned a lot about how state works with lists and how to alter it using sorting and filtering functions. For future work I think that doing a page redesign to that it is more visually compelling would be good. Instead of having a navbar filter, have a sidebar that has checkboxes to make it easier to know what filters/sorting is applied and change the background to not be just white.
            </p>   
        </div> 
    </>
    );
}