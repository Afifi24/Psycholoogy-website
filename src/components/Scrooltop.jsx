import React, { useState, useEffect } from "react";
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

const Scrolltop = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setShowScrollButton(true);
    } else {
      setShowScrollButton(false);
    }
  };

  const scrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {showScrollButton && (
        <div onClick={scrollToTop} className="cursor-pointer  ">
          <div className="fixed bottom-5 bg-yellow-300 shadddow rounded-full text-red-500 right-3 z-50 text-3xl -rotate-90">
          <MdOutlineKeyboardArrowRight  />
          </div>
        </div>
      )}
    </div>
  );
};

export default Scrolltop;
