import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import ActorPage from "../ActorPage/ActorPage";
import MoviePage from "../MoviePage/MoviePage";
import MovieDetailPage from "../MovieDetailPage/MovieDetailPage";
import SignupPage from "../SignupPage/SignupPage";
import { movies } from "../../data.js";

export default function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      {user ? (
        <>
          <NavBar user={user} />
          <Routes>
            <Route path="/" element={<MoviePage movies={movies} />} />
            <Route
              path="/movies/:movieName"
              element={<MovieDetailPage movies={movies} />}
            />
            <Route path="/actors" element={<ActorPage movies={movies} />} />
          </Routes>
        </>
      ) : (
        <SignupPage setUser={setUser} />
      )}
    </div>
  );
}
