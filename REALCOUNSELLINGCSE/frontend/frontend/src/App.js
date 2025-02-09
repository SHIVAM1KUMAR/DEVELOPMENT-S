import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import About from './pages/About';
import SuccessStory from './pages/SuccessStory';
import EnquirySlot from './pages/EnquirySlot';
import BookSession from './pages/BookSession';
import Login from './pages/Login';

const App = () => {
  const [selectedState, setSelectedState] = useState("");

  const colleges = [
    { name: "MIT", state: "Massachusetts", url: "https://mit.edu" },
    { name: "Stanford", state: "California", url: "https://stanford.edu" },
    { name: "Harvard", state: "Massachusetts", url: "https://harvard.edu" },
    { name: "IIT Delhi", state: "Delhi", url: "https://iitd.ac.in" },
    { name: "IIT Bombay", state: "Maharashtra", url: "https://iitb.ac.in" },
  ];

  const filteredColleges = colleges.filter(
    (college) => selectedState === "" || college.state === selectedState
  );

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-100 font-sans">
        {/* Navigation Bar */}
        <nav className="bg-blue-600 text-white p-4 shadow-lg">
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
            <div className="flex space-x-4 mb-3 md:mb-0">
              <Link to="/login" className="hover:text-gray-200 transition">Login</Link>
              <Link to="/signup" className="hover:text-gray-200 transition">Signup</Link>
              <Link to="/book-session" className="hover:text-gray-200 transition">Book Counselling</Link>
            </div>
            <h1 className="text-3xl font-bold text-center md:text-right">
              RealCounselling CSE
            </h1>
          </div>
        </nav>

        {/* Page Content */}
        <div className="container mx-auto p-5 flex-grow">
          <Routes>
            <Route
              path="/"
              element={
                <div className="text-center">
                  <h2 className="text-4xl font-bold text-gray-800 mb-8">
                    Welcome to RealCounselling
                  </h2>

                  {/* State-wise Filter */}
                  <div className="mb-6">
                    <label className="block text-lg text-gray-700 mb-2">Search Colleges by State:</label>
                    <select
                      value={selectedState}
                      onChange={(e) => setSelectedState(e.target.value)}
                      className="border p-3 rounded-md w-full md:w-1/3"
                    >
                      <option value="">Select State</option>
                      <option value="Delhi">Delhi</option>
                      <option value="Maharashtra">Maharashtra</option>
                      <option value="Massachusetts">Massachusetts</option>
                      <option value="California">California</option>
                    </select>
                  </div>

                  {/* College Listings */}
                  <ul className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {filteredColleges.map((college, index) => (
                      <li key={index} className="p-4 bg-white shadow-lg rounded-lg">
                        <a 
                          href={college.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-blue-600 font-semibold text-lg"
                        >
                          {college.name} - {college.state}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/success-story" element={<SuccessStory />} />
            <Route path="/enquiry-slot" element={<EnquirySlot />} />
            <Route path="/book-session" element={<BookSession />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>

        {/* Footer */}
        <footer className="bg-blue-600 text-white text-center py-4 mt-10">
          <p>&copy; {new Date().getFullYear()} Real Counselling. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;
