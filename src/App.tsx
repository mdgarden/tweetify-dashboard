import Header from './client/components/Header';
import SpotifyLogin from './client/components/SpotifyLogin';
import { TwitterLogin } from './client/components/TwitterLogin';

function App() {
  return (
    <div className="App">
      <Header />
      <TwitterLogin />
      <SpotifyLogin />
    </div>
  );
}

export default App;
