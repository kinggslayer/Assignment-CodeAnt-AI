import './App.css';
import LoginPage from './components/Login';
import RepositoryContainer from './components/Repository';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();

  // Check if the current route is "/login"
  const isLoginPage = location.pathname === "/login";

  return (
    <div className="flex">
      {/* Conditionally render Sidebar based on the current route */}
      {!isLoginPage && (
        <aside className="fixed top-0 left-0 h-screen w-64 bg-gray-800 text-white">
          <Sidebar />
        </aside>
      )}

      {/* Main Content */}
      <div className={`${!isLoginPage ? 'ml-64' : ''} w-full min-h-screen bg-white`}>
        <main className={!isLoginPage ? 'p-6' : ''}>
          <Routes>
            {/* Login route now uses the combined LoginPage component */}
            <Route
              path="/login"
              element={<LoginPage />}
            />
            {/* Repository route */}
            <Route path="/repository" element={<RepositoryContainer />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;