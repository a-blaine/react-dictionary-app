import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App mt-5">
      <div className="container">
        <main>
          <Dictionary defaultKeyword="youth" />
        </main>
        <footer className="m-3 text-center">
          Coded by Ashley Blaine,{" "}
          <a
            href="https://github.com/a-blaine/react-dictionary-app"
            rel="noopener noreferrer"
            className="text-decoration-none"
          >
            open sourced
          </a>{" "}
          on GitHub and hosted on Netlify
        </footer>
      </div>
    </div>
  );
}

export default App;
