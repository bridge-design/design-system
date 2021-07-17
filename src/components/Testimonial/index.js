import PropTypes from "prop-types";
import Text from "../Text";
import classnames from "classnames";
import { ArrowRight32, ArrowLeft32 } from "@carbon/icons-react";
import React, { useLayoutEffect, useRef, useState, useCallback } from "react";
import { Swiper, Scrollbar, Navigation } from "swiper/core";
import { useDebouncedCallback } from "use-debounce";

Swiper.use([Scrollbar, Navigation]);

const TestimonialItem = ({ name, text, avatar, colors }) => {
  return (
    <div className="mr-4 swiper-slide md:mr-8 last:mr-0">
      <div
        className={classnames(
          "select-none w-[280px] sm:w-[380px] p-6 md:p-10 xl:mr-12 rounded-lg h-full flex flex-col",
          colors
        )}
      >
        <Text variant="xlBolder" as="p" className="mb-6">
          {text}
        </Text>
        <div className="flex items-center mt-auto">
          {avatar && (
            <img
              src={avatar}
              alt={name}
              className="w-12 h-12 mr-3 rounded-full"
            />
          )}
          <Text variant="xlBolder" as="p">
            {name}
          </Text>
        </div>
      </div>
    </div>
  );
};

TestimonialItem.propTypes = {
  avatar: PropTypes.string,
  colors: PropTypes.string,
  name: PropTypes.string,
  text: PropTypes.string,
};

function Testimonial({ testimonials, title }) {
  const swiperNavigationPrevRef = useRef(null);
  const swiperNavigationNextRef = useRef(null);
  const swiperContainerRef = useRef(null);

  const [isPrevButtonDisabled, setPrevButtonDisabled] = useState(false);
  const [isNextButtonDisabled, setNextButtonDisabled] = useState(false);

  const handleResize = useDebouncedCallback(
    useCallback((swiper) => {
      swiper.update();
    }, []),
    1000
  );

  useLayoutEffect(() => {
    const swiper = new Swiper(swiperContainerRef.current, {
      freeMode: true,
      freeModeMomentum: false,
      watchOverflow: true,
      speed: 600,
      spaceBetween: 0,
      slidesPerView: "auto",
      navigation: {
        nextEl: swiperNavigationNextRef.current,
        prevEl: swiperNavigationPrevRef.current,
      },
      on: {
        /* set state of prev/next buttons */
        slideChange: (swiper) => {
          const { isBeginning, isEnd } = swiper;
          setPrevButtonDisabled(isBeginning);
          setNextButtonDisabled(isEnd);
        },
      },
      breakpointsInverse: true,
      breakpoints: {
        1024: {
          freeMode: false,
        },
      },
    });

    window.addEventListener("resize", () => handleResize(swiper));
    return () => {
      window.removeEventListener("resize", () => handleResize(swiper));
      swiper.destroy();
    };
  }, [handleResize, name]);

  const getArrowColor = (isDisabled) =>
    isDisabled ? "text-gray-100" : "text-light-on-background-900";
  return (
    <>
      <div>
        <div className="items-center justify-between hidden pb-4 md:flex">
          <div className="flex items-start">{title}</div>
          <div className="flex ml-auto">
            <button
              ref={swiperNavigationPrevRef}
              className={classnames(
                getArrowColor(isPrevButtonDisabled),
                "mr-12"
              )}
            >
              <ArrowLeft32 />
            </button>
            <button
              ref={swiperNavigationNextRef}
              className={classnames(
                getArrowColor(isNextButtonDisabled),
                "mr-12"
              )}
            >
              <ArrowRight32 />
            </button>
          </div>
        </div>

        <div ref={swiperContainerRef} className="swiper-container">
          <div
            className="flex transition-transform swiper-wrapper ease-out-back" // do not remve swiper-wrapper
          >
            {testimonials.map((item, i) => {
              return <TestimonialItem key={item.name + i} {...item} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}

Testimonial.propTypes = {
  testimonials: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      avatar: PropTypes.string,
      text: PropTypes.string,
      /* specify tailwind classes here */
      colors: PropTypes.string,
    })
  ),
  title: PropTypes.node,
};

export default Testimonial;
