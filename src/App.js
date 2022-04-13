import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Router from './pages/Router';
export default function App() {
  return (
    <div style={{ overflow: 'hidden' }}>
      <Navbar />
      <Router />
      <Footer />
    </div>
  );
}
