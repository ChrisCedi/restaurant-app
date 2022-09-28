import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Orders } from "./components/Orders/Orders";
import { Menu } from "./components/Menu/Menu";
import { NewSaucer } from "./components/NewSaucer/NewSaucer";
import { Layout } from "./components/Layout/Layout";
import firebase, { FirebaseContext } from "./firebase";

function App() {
  return (
    <FirebaseContext.Provider value={{ firebase }}>
      <div>
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<Menu />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/saucer/new" element={<NewSaucer />} />
            </Routes>
          </Layout>
        </Router>
      </div>
    </FirebaseContext.Provider>
  );
}

export default App;
