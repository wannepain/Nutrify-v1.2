import React, { useRef, useEffect, useState } from "react";

/**
 * Hook that returns true if a click occurs outside of the passed ref
 */
function useOutsideAlerter(ref) {
  const [isClickedOutside, setIsClickedOutside] = useState(false);

  useEffect(() => {
    /**
     * Set state to true if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsClickedOutside(true);
      } else {
        setIsClickedOutside(false);
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  return isClickedOutside;
}

/**
 * Component that returns true if you click outside of it
 */
export default function OutsideAlerter(props) { //accepts a props "setIsOut" to set state in another component 
  const wrapperRef = useRef(null);
  const isClickedOutside = useOutsideAlerter(wrapperRef);

  useEffect(()=>{
    props.setIsOut(isClickedOutside);
  }, [isClickedOutside])

  return (
    <div ref={wrapperRef}>
      {props.children}
      {/* {isClickedOutside && <div>Click outside detected!</div>} */}
    </div>
  );
}