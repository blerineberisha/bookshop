import React from "react";
import { Carousel, CarouselItem } from "react-bootstrap";
import "./App.css";
import Footer from "./Footer";

function Home() {
  return (
    <div className="home">
      <h1 className="welcome">Welcome to Blerinë's Books!</h1>
      <a href="/all">
        <Carousel controls={false}>
          <CarouselItem>
            <img
              src="https://educationaladvancement.org/wp-content/uploads/2020/05/book-aesthetic-books-old-books-open-books-1387022.jpg"
              className="carousel"
              alt="first slide"
            />
          </CarouselItem>
          <CarouselItem>
            <img
              src="https://images.unsplash.com/photo-1457369804613-52c61a468e7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YWVzdGhldGljJTIwYm9va3N8ZW58MHx8MHx8&w=1000&q=80"
              className="carousel"
              alt="second slide"
            />
          </CarouselItem>
          <CarouselItem>
            <img
              src="https://i0.wp.com/thebrowneyedbookworm.com/wp-content/uploads/2020/08/EE657A3D-7271-4765-A679-CE0E47B350EF-2.jpeg?ssl=1"
              className="carousel"
              alt="third slide"
            />
          </CarouselItem>
          <CarouselItem>
            <img
              src="https://media.theteenmagazine.com/app/public/ckeditor_assets/pictures/3899/content_pretty-book-pic.jpeg"
              className="carousel"
              alt="fourth slide"
            />
          </CarouselItem>
          <CarouselItem>
            <img
              src="https://libromance.files.wordpress.com/2018/03/fullsizerender-1.jpg"
              className="carousel"
              alt="fifth slide"
            />
          </CarouselItem>
        </Carousel>
      </a>
      <Footer />
    </div>
  );
}
export default Home;
