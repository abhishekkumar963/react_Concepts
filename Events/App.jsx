function App() {

  function handleClick() {
    alert("Button clicked!");
  }

  function handleMessage() {
    console.log("Hello from React");
  }

  return (
    <div>
      <h1>React Events</h1>

      <button onClick={handleClick}>
        Click Me
      </button>

      <button onClick={handleMessage}>
        Console Message
      </button>
    </div>
  );
}

export default App;