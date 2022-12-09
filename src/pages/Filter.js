import React from 'react';
import FilterCSS from './Filter.module.css';

export function Filter() {
    return (
        <>
        <h1 className={FilterCSS.header}>Filter - CS1230 Introduction to Computer Graphics</h1>
        <div className={FilterCSS.body}>
            <h6 className={FilterCSS.bodytext}>In this group project we were tasked to make 2 versions of a site and conduct Eye Tracking tests to evaluate how efficient the page is at guiding users and its usability</h6>
        </div>
        <div className={FilterCSS.results}>
            <figure>
                <img className={FilterCSS.image} src="/images/eye-tracking-imgs/Version A.jpg"/>
                <figcaption>Version A</figcaption>
            </figure>
            <figure>
                <img className={FilterCSS.image} src="/images/eye-tracking-imgs/Version B.jpg"/>
                <figcaption>Version B</figcaption>
            </figure>
        </div>
        <div>
            <h4 className={FilterCSS.devtext}>Goal</h4>
            <p className={FilterCSS.devtext}>
            The goal of this project was make 2 different versions of the same page and to see how these pages affected where the users eyes will be drawn to for both pages. 
            </p>
            <h4 className={FilterCSS.devtext}>Testing</h4>
            <ul className={FilterCSS.devtext}>
                <li>We conducted our tests on 2 individuals</li>
                <li>One individual was tested on version A of the page and the other was tested on version B of the page.</li>
                <li>When running our test, we tasked them to imagine that they were going the process of ordering bakery items (since the page was static and unresponsive).</li>
            </ul>
            <h4 className={FilterCSS.devtext}>Prediction</h4>
            <p className={FilterCSS.devtext}>
                For our hypothesis, we predict that the user will first gravitate to the navbar to figure out what redirect options are available and then they will look at the "View Our Menu" button.
            </p>

            <h2 className={FilterCSS.devtext}>Results</h2>
            <p className={FilterCSS.devtext}>
                For our results, we generated a heat map of where their eyes went and a action replay that tracked the path of their eyes.
            </p>
            <h4 className={FilterCSS.devtext}>Version A Results:</h4>
            <div className={FilterCSS.results}>
                <figure>
                    <img className={FilterCSS.image} src="/images/eye-tracking-imgs/Version A heatmap.png"/>
                    <figcaption>Version A Heatmap</figcaption>
                </figure>
                <figure>
                    <img className={FilterCSS.image} src="/images/eye-tracking-imgs/Version A action replay.png"/>
                    <figcaption>Version A Action Replay During</figcaption>
                </figure>
                <figure>
                    <img className={FilterCSS.image} src="/images/eye-tracking-imgs/Version A replay.png"/>
                    <figcaption>Version A Action Replay Final</figcaption>
                </figure>
            </div>
            <h4 className={FilterCSS.devtext}>Version B Results:</h4>
            <div className={FilterCSS.results}>
                <figure>
                    <img className={FilterCSS.image} src="/images/eye-tracking-imgs/Version B heatmap.png"/>
                    <figcaption>Version B Heatmap</figcaption>
                </figure>
                <figure>
                    <img className={FilterCSS.image} src="/images/eye-tracking-imgs/Version B action replay.png"/>
                    <figcaption>Version B Action Replay During</figcaption>
                </figure>
                <figure>
                    <img className={FilterCSS.image} src="/images/eye-tracking-imgs/Version B replay.png"/>
                    <figcaption>Version B Action Replay Final</figcaption>
                </figure>
            </div>
            <h4 className={FilterCSS.devtext}>Results Analysis</h4>
            <p className={FilterCSS.devtext}>
                Looking at the results, the tested individuals did as we predicted that the users would naturally gravitate towards the nav bar first to figure out how to see the menu. They then looked around the screen at other remaining text until locking on to the "View Our Menu" button as testing ended and the task was complete. In hindsight, we should've put the menu button as part of the nav bar for maximizing efficiency.
            </p>
        </div>   
        <div>
            <h2 className={FilterCSS.bodytext}>Conclusion</h2>
            <p className={FilterCSS.conclusiontext}>
            Overall, I thought this project was a very interesting introduction into eye tracking testing for UI/UX development. Through the process of eye tracking testing, I learned how to leverage this type of testing to enhance the usability of a page. Also I learned about the importance of usability and how to create a page that makes the aspect of usability easier and more efficient for the user.
            </p>   
        </div> 

    </>
    );
}