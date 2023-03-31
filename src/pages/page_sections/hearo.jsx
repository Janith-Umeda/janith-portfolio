import React from "react";
import { Card } from "react-bootstrap";
// import Spline from '@splinetool/react-spline';

const images = [
    'https://mdbootstrap.com/img/new/slides/048.webp'
]

const HearoSection = ()=>{
    return (
        <Card>
            {/* <Spline scene="https://prod.spline.design/Q2ILOIxIdTR8za5t/scene.splinecode" />
            <div className=""></div> */}
            <Card.Img src={images[0]} />
            <Card.ImgOverlay></Card.ImgOverlay>
        </Card>
    );
}

export default HearoSection;
