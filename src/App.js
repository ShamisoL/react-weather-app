import Weather from "./Weather.js";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          This project was coded by Shamiso Lewis and is{" "}
          <a
            href="https://github.com/ShamisoL/react-weather-app"
            rel="noreferrer"
            target="_blank"
          >
            open-sourced{" "}
          </a>
        </footer>
      </div>
    </div>
  );
}
