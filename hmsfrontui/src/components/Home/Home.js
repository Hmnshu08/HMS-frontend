import React, { useState, Component, Components } from 'react'
import './home.css'
import {
    Container,
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption,
    Jumbotron
} from 'reactstrap';
import Footer from '../Footer/Footer';


const items = [
    {
        src: 'https://images.unsplash.com/photo-1517840901100-8179e982acb7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
        altText: 'Slide 1',
        caption: 'Slide 1'
    },
    {
        src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa20%20text%20%7B%20fill%3A%23444%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa20%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23666%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22247.3203125%22%20y%3D%22218.3%22%3ESecond%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
        altText: 'Slide 2',
        caption: 'Slide 2'
    },
    {
        src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa21%20text%20%7B%20fill%3A%23333%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa21%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23555%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22277%22%20y%3D%22218.3%22%3EThird%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
        altText: 'Slide 3',
        caption: 'Slide 3'
    }
];

export default function Home() {

    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }

    const slides = items.map((item) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.src}
            >
                <img src={item.src} alt={item.altText} />
                <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
            </CarouselItem>
        );
    });

    return (
        <div>
            {/* <Carousel
                activeIndex={activeIndex}
                next={next}
                previous={previous}
            >
                <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
                {slides}
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
            </Carousel> */}

            <Jumbotron>
                <h1 className="display-3">Hotel Something System, Welcomes You!</h1>
                <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
                <hr className="my-2" />
                <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                <p className="lead">
                    {/* <Button color="primary">Learn More</Button> */}
                </p>
            </Jumbotron>

            <Container>
                <div class="container ">

                    <div class="row">
                        <div class="col-lg-4">
                            <img className="bd-placeholder-img rounded-circle" src="https://images.pexels.com/photos/2555240/pexels-photo-2555240.jpeg?cs=srgb&dl=pexels-vincent-rivaud-2555240.jpg&fm=jpg" width="140" height="140"></img>

                            <h2>Best Food</h2>
                            <p>Our Hotel Offers Best food.</p>
                        </div>
                        <div class="col-lg-4">
                            <img className="bd-placeholder-img rounded-circle" src="https://images.pexels.com/photos/1457845/pexels-photo-1457845.jpeg?cs=srgb&dl=pexels-jean-van-der-meulen-1457845.jpg&fm=jpg" width="140" height="140"></img>

                            <h2>Rooms</h2>
                            <p>Our Rooms are full of Comfort.</p>
                        </div>
                        <div class="col-lg-4">
                            <img className="bd-placeholder-img rounded-circle" src="https://images.pexels.com/photos/3770106/pexels-photo-3770106.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-3770106.jpg&fm=jpg" width="140" height="140"></img>

                            <h2>Best Service</h2>
                            <p>And lastly this, Best Service We provide.</p>
                        </div>
                    </div>

                    <           br></br>
                </div>

                <hr class="featurette-divider" />

                <div class="row featurette">
                    <div class="col-md-7">
                        <h2 class="featurette-heading">Best Clean Environment. <span class="text-muted">Clean Hotel.</span></h2>
                        <p class="lead">You'll Love the Place.</p>
                    </div>
                    <div class="col-md-5">
                        <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="300" src="https://images.pexels.com/photos/5371484/pexels-photo-5371484.jpeg?cs=srgb&dl=pexels-cottonbro-5371484.jpg&fm=jpg" preserveAspectRatio="xMidYMid slice" focusable="false"></img>
                        

                    </div>
                </div>

                <hr class="featurette-divider" />

                <div class="row featurette">
                    <div class="col-md-7 order-md-2">
                        <h2 class="featurette-heading">We have Best Service to Offer. <span class="text-muted">See for yourself.</span></h2>
                        <p class="lead">Proper timely Maintenance we keeps us better than other hotels. </p>
                    </div>
                    <div class="col-md-5 order-md-1">
                    <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="300" src="https://images.pexels.com/photos/6466482/pexels-photo-6466482.jpeg?cs=srgb&dl=pexels-cottonbro-6466482.jpg&fm=jpg" preserveAspectRatio="xMidYMid slice" focusable="false"></img>

                    </div>
                </div>

                <hr class="featurette-divider" />

                <div class="row featurette">
                    <div class="col-md-7">
                        <h2 class="featurette-heading">And lastly, we have Best food to offer. <span class="text-muted">All types.</span></h2>
                        <p class="lead">We offer different type of food according to your needs.</p>
                    </div>
                    <div class="col-md-5">
                    <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="300" src="https://images.pexels.com/photos/2736387/pexels-photo-2736387.jpeg?cs=srgb&dl=pexels-engin-akyurt-2736387.jpg&fm=jpg" preserveAspectRatio="xMidYMid slice" focusable="false"></img>

                    </div>
                </div>
                <br></br>
                <br></br>
            </Container>
            <Footer></Footer>










            {/* <Container>
                {/* <div className="head">
                    This is Home
                </div> 

            </Container> */}

        </div>


    )
}
