import { Route, Routes } from "react-router";
import HomeLayout from "./Components/HomeLayout";
import HomePage from "./Pages/HomePage";
import Propos from "./Pages/Propos";
import Evenement from "./Pages/Evenement";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />}>
        <Route index element={<HomePage />} />

        <Route path="propos" element={<Propos />} />
        <Route path="rendez-vous" element={<h1> rendez-vous </h1>} />
        <Route path="Evenement" element={<Evenement />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<h1> Login </h1>} />
      </Route>
    </Routes>
  );
}

export default App;
