import { useState, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar.component";
import "./index.css";
import { FaAngleLeft, FaAngleRight } from "react-icons/Fa";

function App() {
  const mainRef = useRef(null);
  const sliderDetails = [
    {
      imageURL: "/images/1.png",
      place: "Switzerland Alps",
      title: "Saint Antönen",
      textContent:
        "the journey to machu picchu typically starts in the mountain city of cusco, which was the capital city of the inca empire",
    },
    {
      imageURL: "/images/2.png",
      place: "Arizona",
      title: "The Grand Canyon",
      textContent:
        "the earth geological history opens before your eyes in a mile-deep chasm",
    },
    {
      imageURL: "/images/3.png",
      place: "Kenya",
      title: "Masai Mara",
      textContent:
        "wild animals in their natural environment, luxury safari lodges",
    },
    {
      imageURL: "/images/4.png",
      place: "Cambodia",
      title: "Angkor Wat",
      textContent:
        "a stunning ancient jungle city with hundreds of intricately constructed temples",
    },
    {
      imageURL: "/images/7.png",
      place: "Indonesia",
      title: "Bali",
      textContent:
        "tropical beaches, volcano hikes, ancient temples, and friendly people",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const initialValueOfSlide = `${0}1`;
  const [numberSlide, setNumberSlide] = useState(initialValueOfSlide);
  const [backgroundImage, setBackgroundImage] = useState(
    sliderDetails[currentIndex].imageURL
  );
  const numDivs = sliderDetails.length;

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = (prevIndex + 1) % sliderDetails.length;
      setBackgroundImage(sliderDetails[newIndex].imageURL);

      return newIndex;
    });

    setNumberSlide((prevNumberSlide) => {
      let newNumber = parseInt(prevNumberSlide, 10) + 1;
      newNumber = newNumber > 5 ? 1 : newNumber;
      return `${newNumber < 10 ? "0" : ""}${newNumber}`;
    });
  };

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex =
        (prevIndex - 1 + sliderDetails.length) % sliderDetails.length;
      setBackgroundImage(sliderDetails[newIndex].imageURL);

      return newIndex;
    });
    setNumberSlide((prevNumberSlide) => {
      const newNumber = prevNumberSlide - 1;
      return newNumber < 1 ? "05" : `${newNumber < 10 ? "0" : ""}${newNumber}`;
    });
  };

  //animation useState
  const [animateBackground, setAnimateBackground] = useState("false");

  //for styled component

  const renderDivs = () => {
    const cardsToShow = [];
    for (let i = 0; i < 5; i++) {
      const cardIndex = (currentIndex + i) % sliderDetails.length;
      cardsToShow.push(sliderDetails[cardIndex]);
    }

    return cardsToShow.map((image, index) => (
      <div className={`card ${index === 0 ? "active" : ""}`} key={index}>
        <img src={image.imageURL} alt={`Image ${index + 1}`} />
        <div className="zind">
          <div className="line-ele"></div>
          <p className="place-img-text">{image.place}</p>
          <h1 className="title-img-text">{image.title}</h1>
        </div>
      </div>
    ));
  };

  const renderProgressDivs = () => {
    const progressDivs = [];

    for (let i = 1; i <= 5; i++) {
      const isActive = i <= numberSlide;
      const className = `progress-div ${isActive ? "yellow" : ""}`;
      progressDivs.push(<div className={className} key={i}></div>);
    }

    return progressDivs;
  };

  return (
    <>
      <main
        ref={mainRef}
        className="entire-body"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          transition: "background-image 0.5s ease-in-out",
        }}
      >
        <section className="slight-overlay">
          <Navbar />
          <article className="overall-container">
            <div className="image-content-container">
              <div className="for-line"></div>
              <br />

              <div className="title-content-container">
                <p className="place">{sliderDetails[currentIndex].place}</p>
                <h1 className="title-heading">
                  {sliderDetails[currentIndex].title}
                </h1>
                <p className="for-para">
                  {sliderDetails[currentIndex].textContent}
                </p>
              </div>
              <br />
              <div className="btn-container">
                <div className="bookmark-container">
                  <img src="./icons/bookmark-white.svg" alt="bookmark" />
                </div>
                <button className="btn-bookmark">discover location</button>
              </div>
            </div>
            <div className="slider-container">
              <div className="div-renders">{renderDivs()}</div>
              <br />
              <div className="main-btn-container">
                <button className="left-arrow" onClick={handlePrevClick}>
                  {/* <img src="/icons/left-arrow-white.svg" alt="left_arrow" /> */}
                  <FaAngleLeft className="arrow-main" />
                </button>
                <button
                  className="right-arrow left-arrow"
                  onClick={handleNextClick}
                >
                  {/* <img src="/icons/right-arrow-white.svg" alt="right_arrow" /> */}
                  <FaAngleRight className="arrow-main" />
                </button>
                <div className="progress-container">
                  <div className="progress-div">{renderProgressDivs()}</div>
                </div>

                <h3>{numberSlide}</h3>
              </div>
            </div>
          </article>
        </section>
      </main>
    </>
  );
}

export default App;
