import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import LearningModulesPage from './pages/LearningModulesPage';
import CodePlaygroundPage from './pages/CodePlaygroundPage';
import QuizzesPage from './pages/QuizzesPage';
import CommunityPage from './pages/CommunityPage';
import AiTutorPage from './pages/AiTutorPage';
import { AdminDashboard } from './pages/admin/AdminDashboard';
import { RequireAuth } from './components/auth/RequireAuth';
import { AuthModal } from './components/auth/AuthModal';
import { useAuthStore } from './stores/authStore';

function App() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const { loadUser } = useAuthStore();

  useEffect(() => {
    loadUser();
  }, [loadUser]);

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-blue-950 text-white">
        <Navbar onAuthClick={() => setIsAuthModalOpen(true)} />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/learning-modules" element={<LearningModulesPage />} />
            <Route path="/code-playground" element={<CodePlaygroundPage />} />
            <Route path="/quizzes" element={<QuizzesPage />} />
            <Route path="/community" element={<CommunityPage />} />
            <Route path="/ai-tutor" element={<AiTutorPage />} />
            <Route
              path="/admin"
              element={
                <RequireAuth requireAdmin>
                  <AdminDashboard />
                </RequireAuth>
              }
            />
          </Routes>
        </main>
        <Footer />
        <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
      </div>
    </Router>
  );
}

export default App;