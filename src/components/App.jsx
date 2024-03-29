import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");

  const [headingText, setHeadingText] = useState("");
  const handlechange = (event) => {
    setName(event.target.value);
  };
  const handleSubmit = (event) => {
    setHeadingText(name);
    event.preventDefault();
  };
  return (
    <div className="container">
      <h1>Hello {headingText}</h1>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handlechange}
          type="text"
          placeholder="What's your name?"
          value={name}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
