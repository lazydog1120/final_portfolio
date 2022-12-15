import React from 'react';
import IterativeCSS from './IterativeDesign.module.css';
import { ImageItem } from '../components/ImageItem';
import iterativeSketches from '../assets/iterative-sketches.json';
import iterativeWireframes from '../assets/iterative-wireframe.json';
import iterativeUser from '../assets/iterative-userTesting.json';
import Carousel from 'react-bootstrap/Carousel';

export function IterativeDesign() {
    return (
        <>
            <h1 className={IterativeCSS.header}>Iterative Design</h1>
            <div className={IterativeCSS.body}>
                <h6 className={IterativeCSS.bodytext}> In this group project we were tasked with designing an interactive interface for an emerging startup. </h6>
            </div>
            <div>
                <h2 className={IterativeCSS.bodytext}>Novig</h2>
            </div>
            <div>
                <h4 className={IterativeCSS.novigtext}>Why We Chose Novig?</h4>
                <p className={IterativeCSS.novigtext}>
                    We chose Novig because of our groups collective passion for sports. Novig provides a good combination of tech and sports through the use of a sports betting platform.
                </p>
        
                <h4 className={IterativeCSS.novigtext}>What is Novig?</h4>
                <p className={IterativeCSS.novigtext}>
                YCombinator Novig description:<br/>
                "Novig is a commission-free sports betting exchange that guarantees bettors the best lines and eliminates the need for traditional sportsbooks. 
                We do this by enabling users to bet directly against friends or the market, rather than against the house, making the betting experience more efficient, 
                fair, and, most importantly, profitable. We built a two-sided marketplace that eliminates the middle man, becoming the NASDAQ of betting."
                </p>
            </div>
            
            <div>
                <h2 className={IterativeCSS.bodytext}>Sketching and Wireframing</h2>
                <div>
                    <h4 className={IterativeCSS.novigtext}>Pre-Design Thinking</h4>
                    <p className={IterativeCSS.novigtext}>
                        We thought about several ideas as to how we wanted to implement the website 
                        before we began to work on initial sketches, and below is a list of what we 
                        were able to come up with:  
                    </p>
                    <ul className={IterativeCSS.novigtext}>
                        <li>We would primarily like to focus on a website</li>
                        <li>The types of users that would be impacted by this interface would be sports fans</li>
                        <li>More specifically users who are 18+ and live in a sports betting legal state</li>
                        <li>These users would be impacted an element to the viewing experience of a sporting event. Also, this platform takes
                        away the element of a house and uses stock market esque concepts to make money.
                        </li>
                    </ul>
                    <h4 className={IterativeCSS.novigtext}>Sketches:</h4>
                    <p className={IterativeCSS.novigtext}>
                    Taking some of the pre-design thoughts into our heads, we drafted some 
                    rough sketches, which can be seen below:
                    </p>
                    <div className={IterativeCSS.sketches}>
                        <Carousel variant="dark">
                            <Carousel.Item>
                                <img
                                className={IterativeCSS.image}
                                src="/images/iterative-design-imgs/Sketches 1.png"
                                alt="1"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className={IterativeCSS.image}
                                src="/images/iterative-design-imgs/Sketches 2.png"
                                alt="2"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className={IterativeCSS.image}
                                src="/images/iterative-design-imgs/Sketches 3.png"
                                alt="3"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className={IterativeCSS.image}
                                src="/images/iterative-design-imgs/Sketches 4.png"
                                alt="4"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className={IterativeCSS.image}
                                src="/images/iterative-design-imgs/Sketches 5.png"
                                alt="5"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className={IterativeCSS.image}
                                src="/images/iterative-design-imgs/Sketches 6.png"
                                alt="6"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className={IterativeCSS.image}
                                src="/images/iterative-design-imgs/Sketches 7.png"
                                alt="7"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className={IterativeCSS.image}
                                src="/images/iterative-design-imgs/Sketches 8.png"
                                alt="8"
                                />
                            </Carousel.Item>
                        </Carousel>
                        {/* {iterativeSketches.map((item, index)=>{
                        return(<ImageItem key={index} item={item}/>)
                        })} */}
                    </div>
                    <h4 className={IterativeCSS.novigtext}>LoFi Wireframes:</h4>
                    <p className={IterativeCSS.novigtext}>
                    After sketching, we took the best design elements and streamlined them into 
                    wireframes on Balsalmiq to give us a good base for hi-fi prototypes.
                    </p>
                    <div className={IterativeCSS.sketches}>
                    <Carousel variant="dark">
                            <Carousel.Item>
                                <img
                                className={IterativeCSS.imageW}
                                src="/images/iterative-design-imgs/Pre Sign In.png"
                                alt="pre sign in"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className={IterativeCSS.imageW}
                                src="/images/iterative-design-imgs/Create Account.png"
                                alt="create account"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className={IterativeCSS.imageW}
                                src="/images/iterative-design-imgs/Home page.png"
                                alt="home page"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className={IterativeCSS.imageW}
                                src="/images/iterative-design-imgs/Friends Page.png"
                                alt="friends page"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className={IterativeCSS.imageW}
                                src="/images/iterative-design-imgs/Leagues.png"
                                alt="leagues"
                                />
                            </Carousel.Item>
                        </Carousel>
                        {/* {iterativeWireframes.map((item, index)=>{
                        return(<ImageItem key={index} item={item}/>)
                        })} */}
                    </div>
                </div>
            </div>
            <div>
                <h2 className={IterativeCSS.bodytext}>Prototype</h2>
                <div>
                    <h4 className={IterativeCSS.novigtext}>Interactive Hi-Fi Mockup</h4>
                    <h4 className={IterativeCSS.novigtext}><a href="https://www.figma.com/proto/7HOfRo6Q77w6tVwlqVKFxT/Iterative-Design?page-id=0%3A1&node-id=1%3A4&viewport=-290%2C312%2C0.15&scaling=scale-down&starting-point-node-id=1%3A4">Prototype Link</a> </h4>
                    <h4 className={IterativeCSS.novigtext}>Critique Feedback</h4>
                    <p className={IterativeCSS.novigtext}>
                        We had classmates play with our intial hi-fi prototypes, and implemented 
                        the below critiques into the main project.
                    </p>
                    <ul className={IterativeCSS.novigtext}>
                        <li>Live scores - -150 and +150 is really small, can’t tell  so use colors or font</li>
                        <li>Could be more on the homepage, see where their bets are and status instead of just scores </li>
                        <li>Organize active bets are numbered or bulleted list for friends list. Acting more like links or buttons </li>
                        <li>Feed tab – recent bets being made live </li>
                        <li>Friends is unclear – need an add friends </li>
                    </ul>
                </div>
            </div>
            <div>
                <h2 className={IterativeCSS.bodytext}>User Testing</h2>
                <p className={IterativeCSS.novigtext}>
                    The next step in the project was to give a task to random users to test the 
                    usability and effectivness of the prototypes, using <a className={IterativeCSS.link} href="https://www.usertesting.com/">UserTesting.com</a> to get feedback. We created a task that would utilise much of the functionality of
                    what we wanted our prototype to do. 
                </p>
                <h4 className={IterativeCSS.novigtext}>Task Description</h4>
                <div className={IterativeCSS.user}>
                    <img className={IterativeCSS.image} src="/images/iterative-design-imgs/User testing task.png" alt="user"/>
                    {/* {iterativeUser.map((item, index)=>{
                    return(<ImageItem key={index} item={item}/>)
                    })} */}
                </div>
                <h4 className={IterativeCSS.novigtext}>Analysis</h4>
                <p className={IterativeCSS.novigtext}>
                    Following is some analysis based on the user testing videos that we recieved. 
                </p>

                <h5 className={IterativeCSS.novigtext}>Recorded Observations</h5>
                <ul className={IterativeCSS.novigtext}>
                    <li>
                    Inital impressions conveyed a lack of trust for the website, 
                    citing the lack of images and the simplistic design for there being something 
                    "missing" from the website.
                    </li>
                    <li>
                    Lack of much variety in colors as well as lack of images and icons also threw users off 
                    on the overall design, were expecting something more flashy for what was supposed to be a 
                    betting website.
                    </li>
                    <li>
                    Users found the home page to be a little bit unintuitive; they didn't know what the feed was 
                    supposed to show or why the Novig logo navigates to the home page without much information 
                    about the page.
                    </li>
                    <li>
                    The website was easy to navigate, most tasks were easily completed even to those without much betting 
                    experience. 
                    </li>
                    <li> 
                    The biggest issue was the lack of clarity in making a bet - clicking a score or a game doesn't make the 
                    user believe they can make a bet from it, until they experiment and click on it.
                    </li>
                </ul>

                <h5 className={IterativeCSS.novigtext}>Commentary</h5>
                <p className={IterativeCSS.novigtext}>
                    The User Testing results confirmed some of our predictions and surprised us in others. The task was 
                    meant to test much of the functionality of the prototype we had implemented by having users check on 
                    their bets and their leagues and then choosing to make a new bet - the two main functionalities. 
                    We feel that we met the bar in viewing current bets and implementing the friend interfaces, as users 
                    found these functions very clear. Our choices for tabs on the navigation bar were clear and easy to
                    guess what would be on each. However, we fell short in the betting functionality - the lack of clear 
                    buttons and markings to make bets across all pages caused confusion as there were no affordances for 
                    placing a bet. 
                </p>
                <h4 className={IterativeCSS.novigtext}> User Testing Links to Videos </h4>
                <h4 className={IterativeCSS.novigtext}><a href="https://app.usertesting.com/v/70971002-e178-4f91-bc10-5d27fff732e5?encrypted_video_handle=1e6cca1c-67c4-4829-b250-8231dac46aec#!/notes&shared_via=link">User 1</a></h4>
                <h4 className={IterativeCSS.novigtext}><a href="https://app.usertesting.com/v/f52514f9-9d4c-48b1-8e25-f28066b701c4?encrypted_video_handle=31ea5c3c-e087-4489-b672-0b54cf77ea74#!/notes&shared_via=link">User 2</a></h4>
                <h4 className={IterativeCSS.novigtext}><a href="https://app.usertesting.com/v/9c675fba-44a5-441b-8bed-0e8053d15f24?encrypted_video_handle=188336e0-a474-4ae0-98ff-92e3a6e85b11#!/notes&shared_via=link">User 3</a></h4>
                <h2 className={IterativeCSS.bodytext}>Conclusion</h2>
                <p className={IterativeCSS.conclusiontext}>
                    Overall, there was a lot to take away from this project, and we as a group learned a lot about 
                    the feedback process and the dedication needed to create a completely user-friendly website that 
                    functions as it needs to while pleasing to the eye. Given more time and more knowledge of the sports 
                    betting industry, the user testing feedback could've been heavily relied on to make a very robust 
                    website for Novig. 
                </p>
            </div>
                 
        </> 
    );
}