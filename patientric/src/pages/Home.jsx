import React from 'react';
import NavBar from '../components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import "./Home.css"



function ProjectsCarousel() {
    return (
    <div className = "carousel-container">
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/insuredgpt.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h5>InsuredGPT</h5>
            <p>LLM Insurance Consultant</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/medicaleducation.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h5>Medical Foreign Language Education</h5>
            <p>Suite of tools for teaching and assessing foreign language proficiency in clinical contexts</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/interpretation.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5>Real-Time AI Interpretation</h5>
            <p>
              AI-modulated interpretation for clinical encounters
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
    );
  }

export default function Home() {
  return (
        <div>
        <NavBar />
        <h1 className = "title"> Patientric </h1>
        <h3 className = "description"> Patient-centric technology solutions </h3>
        <ProjectsCarousel />
        </div>
    );
}