import React, { useEffect, useLayoutEffect, useRef } from "react";

const Title = () => {
  const subtitleRef = useRef() as React.MutableRefObject<HTMLParagraphElement>;

  useLayoutEffect(() => {
    subtitleRef.current.style.marginTop = "5rem";
  }, []);

  return (
    <>
      <h1>The Title</h1>
      <p ref={subtitleRef}>This is the subtitle</p>
    </>
  );
};

export default React.memo(Title);
