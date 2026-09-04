import User from "./User";

function App() {
  return (
    <div>
      <User
        name="Abhishek"
        age={22}
        city="Delhi"
      />

      <User
        name="Rahul"
        age={24}
        city="Mumbai"
      />
    </div>
  );
}

export default App;