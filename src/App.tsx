import React, { useState } from "react";
import "./App.css";

function App() {
  const [link, setLink] = useState("https://www.youtube.com/watch?v=gyMwXuJrbJQ");
  const [time, setTime] = useState("");

  let [hours = 0, minutes = 0, seconds = 0] = time.split(":");

  const totalSeconds = Number(hours) * 60 * 60 + Number(minutes) * 60 + Number(seconds);
  const url = `${link}&t=${totalSeconds}s`;

  return (
    <div className="App">
      <h1>YouTube Seconds</h1>
      <main>
        <div>
          <p>Enter YouTube link</p>
          <div>
            <input
              name="link"
              value={link}
              onChange={(e) => {
                setLink(e.target.value);
              }}
            />
          </div>
        </div>
        <div>
          <p>Enter time in ss:ss:ss</p>
          <div>
            <input
              name="time"
              value={time}
              onChange={(e) => {
                setTime(e.target.value);
              }}
              placeholder="hh:mm:ss"
            />
          </div>
        </div>
        <div>
          <p>Results</p>
          <div>
            <a href={url} target="_blank" rel="noreferrer">
              {url}
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
