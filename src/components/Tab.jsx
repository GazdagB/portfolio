import React, { useState, useRef } from 'react';

const Tab = ({ children, setPosition, selected, setSelected }) => {
  const ref = useRef(null);

  function handleMouseEnter() {
    if (!ref.current) return;

    const { width } = ref.current.getBoundingClientRect();
    setPosition({
      width,
      opacity: 1,
      left: ref.current.offsetLeft
    });
  }

  function handleMouseLeave() {
    if (!ref.current) return;
    // Move back to selected tab position if there's a selected tab
    setPosition(selected);
  }

  function handleClick() {
    if (!ref.current) return;

    const { width } = ref.current.getBoundingClientRect();

    // Save the selected tab position
    const newSelected = {
      width,
      opacity: 1,
      left: ref.current.offsetLeft
    };

    setSelected(newSelected); // Set the selected position
    setPosition(newSelected); // Move the cursor to the clicked tab
  }

  return (
    <li ref={ref} onMouseLeave={handleMouseLeave} onClick={handleClick} onMouseEnter={handleMouseEnter} className='relative z-10 block cursor-pointer uppercase text-white mix-blend-difference px-5 '>
      {children}
    </li>
  );
};

export default Tab;
