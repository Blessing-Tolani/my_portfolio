import { useState, useEffect } from 'react';

import LoadingScreen from './components/loading-screen';
import HomePage from './components/home';

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <div className="App">{loading ? <LoadingScreen /> : <HomePage />}</div>
  );
}

export default App;
