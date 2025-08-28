import { Router, Route } from 'wouter';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Router>
        <Route path="/" component={HomePage} />
      </Router>
    </div>
  );
}

export default App;