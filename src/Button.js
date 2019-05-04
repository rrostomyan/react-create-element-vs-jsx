import React from "react";

function Button(props) {
  const { handleClick, name } = props;
  // example with react createElement
  // return React.createElement("button", { onClick: handleClick }, name);
  return (
      <button onClick={handleClick}>{name}</button>
  )
}

export default Button;
