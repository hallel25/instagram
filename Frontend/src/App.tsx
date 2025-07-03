import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { NoPage } from "./pages/NoPage";
import { NewPost } from "./pages/NewPost";
import { Profile } from "./pages/Profile";
import { Layout } from "./pages/Layout";
import { useState } from "react";
import { CurrentUserContext } from "./hooks/useUser";
import type { UserType } from "./types";
import { mockUsers } from "./DB/DB";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

function App() {
  const [currentUser, setCurrentUser] = useState<UserType>(mockUsers[0]);

  return (
    <CurrentUserContext value={{ currentUser, setCurrentUser }}>
      <BrowserRouter>
        <Layout>
          <ScrollToTop />
          <Routes>
            <Route index element={<Home />} />
            <Route path="new-post" element={<NewPost />} />
            <Route path="profile" element={<Profile />} />
            <Route path="profile/:userId" element={<Profile />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </CurrentUserContext>
  );
}

export default App;
