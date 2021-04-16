import { useRef, useEffect } from "react";

const Collapse = ({ collapsed, children }) => {
  const ref = useRef();
  const height = useRef(0);

  useEffect(() => {
    height.current = ref.current.offsetHeight;
  }, []);

  useEffect(() => {
    const div = ref.current;
    div.className = "collapsing";

    setTimeout(() => {
      if (!collapsed) {
        div.style.height = `${height.current}px`;
      }
    }, 0);

    setTimeout(() => {
      div.style.height = "";
      div.className = collapsed ? "collapse" : "collapse show";
    }, 350);
  }, [collapsed]);

  return <div ref={ref}>{children}</div>;
};

export default Collapse;
