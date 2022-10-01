import Header from "./components/Header";
import { TwitterLogin } from "./components/TwitterLogin";

function App() {
  return (
    <div className="App">
      <Header />
      <TwitterLogin />
      <div>Hi, firebase!</div>
    </div>
  );
}

export default App;
