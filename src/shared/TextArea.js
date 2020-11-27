import { useRef } from "react";
import PropTypes from "prop-types";

export default function TextArea({ onChange, onKeyDown, ...props }) {
  const ref = useRef(null);

  const handleResize = () => {
    if (ref.current) {
      ref.current.style.height = "auto";
      ref.current.style.height =
        ref.current.scrollHeight > ref.current.height
          ? "auto"
          : `${ref.current.scrollHeight}px`;
    }
  };

  const handleChange = (event) => {
    if (onChange) {
      onChange(event);
    }
    handleResize();
  };

  const handleKeyDown = (event) => {
    if (onKeyDown) {
      onKeyDown(event, ref);
    }
  };

  return (
    <textarea
      {...props}
      ref={ref}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
    />
  );
}

TextArea.propTypes = {
  onChange: PropTypes.func,
  onKeyDown: PropTypes.func,
};
