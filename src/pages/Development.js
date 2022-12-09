import React from 'react';
import DevelopmentCSS from './Development.module.css';

export function Development() {
    return (
        <>
        <h1 className={DevelopmentCSS.header}>Development</h1>
        <div className={DevelopmentCSS.body}>
            <h6 className={DevelopmentCSS.bodytext}>In this project I was tasked to develop an interactive interface, use interface components, and tie the components to an internal data state. We created a list-based interface using React.</h6>
            <h6 className={DevelopmentCSS.bodytext}>Try out <a href='https://lazydog1120.github.io/development'>my app</a>!</h6>
        </div>
        <div>
            <h2 className={DevelopmentCSS.bodytext}>2022 Formula 1 Drivers</h2>
        </div>
        <div>
            <img className={DevelopmentCSS.homeImage} src="/images/development-imgs/home.png"></img>
            <h4 className={DevelopmentCSS.devtext}>Goal of Application</h4>
            <p className={DevelopmentCSS.devtext}>
            The goal of this app is to provide the user with simple statistics on the 2022 Formula 1 Driver roster. I think this provides value to the user because of its ability to filter out drivers based on team and where they are from and also sort the drivers based on points earned from races.
            </p>
            <h4 className={DevelopmentCSS.devtext}>Usability Principles Considered</h4>
            <p className={DevelopmentCSS.devtext}>
            I think this app has a really simple and consistent design. The Nav Bar provides the app with good efficiency as it makes it easy for the user to provide the filter they want and they are easy to understand. Also, it provides the user with a visible list of filters they have applied so that the user doesn't have to remember which filters are applied.
            </p>
            <h4 className={DevelopmentCSS.devtext}>Organization of Components</h4>
            <p className={DevelopmentCSS.devtext}>
            There are 2 components to this app. One being a DriverItem which is the card for each driver (that being the image and info provided on the driver) and the other being the Nav Bar which provides all the filters. The nav bar is at the top of the app while the driver cards are below in grid like order going from left to right.
            </p>
        </div>
        
        <div>
            <h2 className={DevelopmentCSS.bodytext}>Functionality</h2>
            <div>
                <h4 className={DevelopmentCSS.devtext}>How Data is Passed Down Through Components</h4>
                <p className={DevelopmentCSS.devtext}>
                For the Driver Item, the data it is given is the driver image, name, team they are on, nationality, region they are from, number of wins, and points earned from races. There are also two buttons provided to add and remove to favorites. In terms of the nav bar, it is given a function that that matches the filter type when on of the filters on the nave bar is clicked, a reset dat function that resets all the filters when it is clicked, and a combined points state that keeps track of the combined points of the drivers added to favorites (aggregate part).
                </p>
    
                <h4 className={DevelopmentCSS.devtext}>How the User Triggers State Changes</h4>
                <p className={DevelopmentCSS.devtext}>
                To trigger state changes the user has to click on one of the filters or buttons on the driver card. I have 3 state variables: One that is a list that keeps track of the filtered drivers, one that keeps track of the combined points, and one that is a list that keeps track of the filters applied. For the filtered drivers state (filteredData) and for the filters applied state (filterType), a user can trigger state changes by clicking on the filters on the nav bar. For the combined points state, a user triggers changes when they click on either the add to favorites button or remove from favorites button on the driver cards. NOTE: When Reset Data filter is clicked, click home to get cards back.
                </p>
                <div className={DevelopmentCSS.filters}>
                    <figure>
                        <img className={DevelopmentCSS.image} src="/images/development-imgs/sort.png"/>
                        <figcaption>Sort Filter (Greatest to Least Points)</figcaption>
                    </figure>
                    <figure>
                        <img className={DevelopmentCSS.image} src="/images/development-imgs/McLaren-filter.png"/>
                        <figcaption>McLaren Filter</figcaption>
                    </figure>
                    <figure>
                        <img className={DevelopmentCSS.image} src="/images/development-imgs/Asia-filter.png"/>
                        <figcaption>Drivers from Asia Filter</figcaption>
                    </figure>
                    <figure>
                        <img className={DevelopmentCSS.image} src="/images/development-imgs/favorites-filter.png"/>
                        <figcaption>Favorite Driver(s) Filter</figcaption>
                    </figure>
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