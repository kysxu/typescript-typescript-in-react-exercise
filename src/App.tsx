import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import UsersList from "./pages/UserList";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        {/* TODO3: เพิ่ม Route ไป Home ตรงนี้ */}
        <Route path="/" element={<Home name="John" />} />
        {/* TODO4: เพิ่ม Route ไป UsersList ตรงนี้ */}
        <Route path="/users" element={<UsersList />} />
      </Routes>
    </Router>
  );
}

export default App;
