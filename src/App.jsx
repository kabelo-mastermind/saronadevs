import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// import Blog from "./components/Blog/BlogPage";
import Home from "./components/Home/Home";
// import TrendDetailPage from './components/Blog/TrendDetailPage';
// import ArticlePage from './components/Blog/ArticlePage';


const App = () => {
  return (
    <Router>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/blog" element={<Blog />} />
        <Route path="/article/:id" element={<ArticlePage />} />
        <Route path="/trends/:id" element={<TrendDetailPage />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
