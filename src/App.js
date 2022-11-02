import "./css/App.css";

import Body from "./App/Body.js";
import TopMenu from "./App/TopMenu.js";

function App() {
  return (
    <div className="App">
      <menu className="App-header">
        <TopMenu />
      </menu>
      <main className="App-body">
        <Body />
      </main>
    </div>
  );
}

export default App;
