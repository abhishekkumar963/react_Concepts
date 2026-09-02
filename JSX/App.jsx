function App() {
  const name = "Abhishek";
  const age = 22;

  return (
    <div>
      <h1>Hello, React!</h1>

      <h2>My name is {name}</h2>

      <p>I am {age} years old.</p>

      <p>{age >= 18 ? "Adult" : "Minor"}</p>
    </div>
  );
}

export default App;