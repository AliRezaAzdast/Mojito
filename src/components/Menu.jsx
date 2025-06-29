import React, { useRef,useState } from "react";
import { allCocktails } from "../../constants";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Menu() {
  const contentRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);

  useGSAP(() => {
    gsap.fromTo("#title", {opacity:0}, {opacity:1, duration:1});
    gsap.fromTo(".cocktail img", {opacity:0, xPercent: -100}, {xPercent:0, opacity:1, duration:1, ease: 'power1.inOut'});
    gsap.fromTo(".details h2", {opacity:0, y:100}, {opacity:1, y:0, duration:1, ease: 'power1.inOut'});
    gsap.fromTo(".details p", {opacity:0, y:100}, {opacity:1, y:0, duration:1, ease: 'power1.inOut'});
  },[currentIndex])

  const totalCocktails = allCocktails.length;



  const goTosSlide = (index) => {
    const newIndex = (index + totalCocktails) % totalCocktails;
    setCurrentIndex(newIndex);
  };

  const getCocktailAt = (indexOfSet) => {
    return allCocktails[
      (currentIndex + indexOfSet + totalCocktails) % totalCocktails
    ];
  };
  const currentCocktail = getCocktailAt(0);
  const pretCocktail = getCocktailAt(-1);
  const nextCocktail = getCocktailAt(1);
  return (
    <section id="menu" aria-labelledby="menu-heading">
      <img
        src="/images/slider-left-leaf.png"
        alt="m-left-leaf"
        id="m-left-leaf"
      />
      <img
        src="/images/slider-right-leaf.png"
        alt="m-right-leaf"
        id="m-right-leaf"
      />

      <h2 id="menu-heading" className="sr-only">
        Cocktail MEANU
      </h2>
      <nav className="cocktail-tabs" aria-label="Cocktail Navigation">
        {allCocktails.map((cocktails, index) => {
          const isActive = index === currentIndex;

          return (
            <button
              key={cocktails.id}
              className={`${
                isActive
                  ? "text-white border-white"
                  : "text-white/50 border-white/50"
              }`}
              onClick={() => {
                goTosSlide(index);
              }}
            >
              {cocktails.name}
            </button>
          );
        })}
      </nav>

      <div className="content">
        <div className="arrows">
          <button
            className="text-left"
            onClick={() => goTosSlide(currentIndex - 1)}
          >
            <span>{pretCocktail.name}</span>
            <img
              src="/images/right-arrow.png"
              alt="right-arrow"
              aria-hidden="true"
            />
          </button>
          <button
            className="text-left"
            onClick={() => goTosSlide(currentIndex + 1)}
          >
            <span>{nextCocktail.name}</span>
            <img
              src="/images/left-arrow.png"
              alt="left-arrow"
              aria-hidden="true"
            />
          </button>
        </div>

        <div className="cocktail">
          <img src={currentCocktail.image} className="object-contain" />
        </div>
        <div className="recipe">
          <div ref={contentRef} className="info">
            <p>Recipe for:</p>
            <p id="title">{currentCocktail.name}</p>
          </div>

          <div className="details">
            <h2>{currentCocktail.title}</h2>
            <p>{currentCocktail.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Menu;
