import React from 'react';
import EyeTrackingCSS from './EyeTracking.module.css';
import Carousel from 'react-bootstrap/Carousel';

export function EyeTracking() {
    return (
        <>
        <h1 className={EyeTrackingCSS.header}>Eye Tracking</h1>
        <div className={EyeTrackingCSS.body}>
            <h6 className={EyeTrackingCSS.bodytext}>In this group project we were tasked to make 2 versions of a site and conduct Eye Tracking tests to evaluate how efficient the page is at guiding users and its usability</h6>
        </div>
        <div className={EyeTrackingCSS.results}>
            <Carousel variant="dark">
                <Carousel.Item>
                    <img
                    className={EyeTrackingCSS.image}
                    src="/images/eye-tracking-imgs/Version A.jpg"
                    alt="Version A"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className={EyeTrackingCSS.image}
                    src="/images/eye-tracking-imgs/Version B.jpg"
                    alt="Version B"
                    />
                </Carousel.Item>
            </Carousel>
            {/* <figure>
                <img className={EyeTrackingCSS.image} src="/images/eye-tracking-imgs/Version A.jpg"/>
                <figcaption>Version A</figcaption>
            </figure>
            <figure>
                <img className={EyeTrackingCSS.image} src="/images/eye-tracking-imgs/Version B.jpg"/>
                <figcaption>Version B</figcaption>
            </figure> */}
        </div>
        <div>
            <h4 className={EyeTrackingCSS.devtext}>Goal</h4>
            <p className={EyeTrackingCSS.devtext}>
            The goal of this project was make 2 different versions of the same page and to see how these pages affected where the users eyes will be drawn to for both pages. 
            </p>
            <h4 className={EyeTrackingCSS.devtext}>Testing</h4>
            <ul className={EyeTrackingCSS.devtext}>
                <li>We conducted our tests on 2 individuals</li>
                <li>One individual was tested on version A of the page and the other was tested on version B of the page.</li>
                <li>When running our test, we tasked them to imagine that they were going the process of ordering bakery items (since the page was static and unresponsive).</li>
            </ul>
            <h4 className={EyeTrackingCSS.devtext}>Prediction</h4>
            <p className={EyeTrackingCSS.devtext}>
                For our hypothesis, we predict that the user will first gravitate to the navbar to figure out what redirect options are available and then they will look at the "View Our Menu" button.
            </p>

            <h2 className={EyeTrackingCSS.devtext}>Results</h2>
            <p className={EyeTrackingCSS.devtext}>
                For our results, we generated a heat map of where their eyes went and an action replay that tracked the path of their eyes.
            </p>
            <h4 className={EyeTrackingCSS.devtext}>Version A Results:</h4>
            <div className={EyeTrackingCSS.results}>
                <Carousel variant="dark">
                    <Carousel.Item>
                        <img
                        className={EyeTrackingCSS.image}
                        src="/images/eye-tracking-imgs/Version A heatmap.png"
                        alt="Version A heatmap"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className={EyeTrackingCSS.image}
                        src="/images/eye-tracking-imgs/Version A action replay.png"
                        alt="Version A Replay During"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className={EyeTrackingCSS.image}
                        src="/images/eye-tracking-imgs/Version A replay.png"
                        alt="Version A Replay Final"
                        />
                    </Carousel.Item>
                </Carousel>
                {/* <figure>
                    <img className={EyeTrackingCSS.image} src="/images/eye-tracking-imgs/Version A heatmap.png"/>
                    <figcaption>Version A Heatmap</figcaption>
                </figure>
                <figure>
                    <img className={EyeTrackingCSS.image} src="/images/eye-tracking-imgs/Version A action replay.png"/>
                    <figcaption>Version A Action Replay During</figcaption>
                </figure>
                <figure>
                    <img className={EyeTrackingCSS.image} src="/images/eye-tracking-imgs/Version A replay.png"/>
                    <figcaption>Version A Action Replay Final</figcaption>
                </figure> */}
            </div>
            <h4 className={EyeTrackingCSS.devtext}>Version B Results:</h4>
            <div className={EyeTrackingCSS.results}>
                <Carousel variant="dark">
                    <Carousel.Item>
                        <img
                        className={EyeTrackingCSS.image}
                        src="/images/eye-tracking-imgs/Version B heatmap.png"
                        alt="Version B heatmap"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className={EyeTrackingCSS.image}
                        src="/images/eye-tracking-imgs/Version B action replay.png"
                        alt="Version B Replay During"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className={EyeTrackingCSS.image}
                        src="/images/eye-tracking-imgs/Version B replay.png"
                        alt="Version B Replay Final"
                        />
                    </Carousel.Item>
                </Carousel>
                {/* <figure>
                    <img className={EyeTrackingCSS.image} src="/images/eye-tracking-imgs/Version B heatmap.png"/>
                    <figcaption>Version B Heatmap</figcaption>
                </figure>
                <figure>
                    <img className={EyeTrackingCSS.image} src="/images/eye-tracking-imgs/Version B action replay.png"/>
                    <figcaption>Version B Action Replay During</figcaption>
                </figure>
                <figure>
                    <img className={EyeTrackingCSS.image} src="/images/eye-tracking-imgs/Version B replay.png"/>
                    <figcaption>Version B Action Replay Final</figcaption>
                </figure> */}
            </div>
            <h4 className={EyeTrackingCSS.devtext}>Results Analysis</h4>
            <p className={EyeTrackingCSS.devtext}>
                Looking at the results, the tested individuals did as we predicted that the users would naturally gravitate towards the nav bar first to figure out how to see the menu. They then looked around the screen at other remaining text until locking on to the "View Our Menu" button as testing ended and the task was complete. In hindsight, we should've put the menu button as part of the nav bar for maximizing efficiency.
            </p>
        </div>   
        <div>
            <h2 className={EyeTrackingCSS.bodytext}>Conclusion</h2>
            <p className={EyeTrackingCSS.conclusiontext}>
            Overall, I thought this project was a very interesting introduction into eye tracking testing for UI/UX development. Through the process of eye tracking testing, I learned how to leverage this type of testing to enhance the usability of a page. Also I learned about the importance of usability and how to create a page that makes the aspect of usability easier and more efficient for the user.
            </p>   
        </div> 

    </>
    );
}