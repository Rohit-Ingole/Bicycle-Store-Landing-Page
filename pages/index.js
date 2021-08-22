import { useEffect } from "react";
import CategorySection from "../components/CategorySection";
import Header from "../components/Header";
import Hero from "../components/Hero";
import NewArrivalsSection from "../components/NewArrivalsSection";
import NewsSection from "../components/NewsSection";
import PopularSection from "../components/PopularSection";
import SpecialBike from "../components/SpecialBike";
import Footer from "../components/Footer";

const Home = () => {
  useEffect(() => {
    let hero_slide = document.querySelector("#hero-slide");

    let hero_slide_items = hero_slide.querySelectorAll(".slide");

    let hero_slide_index = 0;

    let hero_slide_play = true;

    let hero_slide_control_items = hero_slide.querySelectorAll(
      ".slide-control-item"
    );

    let slide_next = hero_slide.querySelector(".slide-next");

    let slide_prev = hero_slide.querySelector(".slide-prev");

    let header = document.querySelector("header");

    const showSlide = (index) => {
      hero_slide.querySelector(".slide.active").classList.remove("active");
      hero_slide
        .querySelector(".slide-control-item.active")
        .classList.remove("active");
      hero_slide_control_items[index].classList.add("active");
      hero_slide_items[index].classList.add("active");
    };

    const nextSlide = () => {
      hero_slide_index =
        hero_slide_index + 1 === hero_slide_items.length
          ? 0
          : hero_slide_index + 1;
      showSlide(hero_slide_index);
    };

    const prevSlide = () => {
      hero_slide_index =
        hero_slide_index - 1 < 0
          ? hero_slide_items.length - 1
          : hero_slide_index - 1;
      showSlide(hero_slide_index);
    };

    slide_next.addEventListener("click", () => nextSlide());

    slide_prev.addEventListener("click", () => prevSlide());

    // add event to slide select
    hero_slide_control_items.forEach((item, index) => {
      item.addEventListener("click", () => showSlide(index));
    });

    // pause slide when mouse come in slider
    hero_slide.addEventListener("mouseover", () => (hero_slide_play = false));

    // resume slide when mouse leave out slider
    hero_slide.addEventListener("mouseleave", () => (hero_slide_play = true));

    setTimeout(() => hero_slide_items[0].classList.add("active"), 200);

    // auto slide
    // setInterval(() => {
    //     if (!hero_slide_play) return
    //     nextSlide()
    // }, 5000);

    // change header style when scroll
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        header.classList.add("shrink");
      } else {
        header.classList.remove("shrink");
      }
    });

    // element show on scroll

    let scroll =
      window.requestAnimationFrame ||
      function (callback) {
        window.setTimeout(callback, 1000 / 60);
      };

    let el_to_show = document.querySelectorAll(".show-on-scroll");

    const isElInViewPort = (el) => {
      let rect = el.getBoundingClientRect();

      let distance = 200;

      return (
        rect.top <=
        (window.innerHeight - distance ||
          document.documentElement.clientHeight - distance)
      );
    };

    const loop = () => {
      el_to_show.forEach((el) => {
        if (isElInViewPort(el)) el.classList.add("show");
      });

      scroll(loop);
    };

    loop();
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <CategorySection />
      <NewArrivalsSection />
      <SpecialBike />
      <PopularSection />
      <NewsSection />
      <Footer />
    </>
  );
};

export default Home;
