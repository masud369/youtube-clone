import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Feed from "./components/Feed";
import Header from "./components/Header";
import SearchResult from "./components/SearchResult";
import VideoDetails from "./components/VideoDetails";
import { AppContext } from "./contextApi/context";

function App() {
  return (
    <AppContext>
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<Feed />} />
          <Route path="/searchResult/:searchQuery" exact element={<SearchResult />} />
          <Route path="/video/:id" exact element={<VideoDetails />} />
        </Routes>
      </Router>
    </AppContext>
  );
}

export default App;
