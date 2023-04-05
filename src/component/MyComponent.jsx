import React, { useState } from 'react';

function MyComponent() {
  const [clicked, setClicked] = useState(false);

  function handleClick() {
    setClicked(true);
  }

  return (
    <div>
      <h1>My Component</h1>
      <button onClick={handleClick}>Click me</button>
      {clicked && <p>You clicked the button!</p>}
    </div>
  );
}

export default MyComponent;
