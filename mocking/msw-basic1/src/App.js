function App() {
  sessionStorage.setItem("is-authenticated", true);

  const a = fetch("/user")
    .then((res) => res.json())
    .then((data) => console.log(data));

  return <div>hello</div>;
}

export default App;
