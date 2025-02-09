import { useState } from "react";

const Home = () => {
  const [search, setSearch] = useState("");
  const [selectedState, setSelectedState] = useState("");
  
  // Example list of colleges (you can expand this with more data)
  const colleges = [
    { name: "MIT", state: "Massachusetts", url: "https://mit.edu" },
    { name: "Stanford", state: "California", url: "https://stanford.edu" },
    { name: "Harvard", state: "Massachusetts", url: "https://harvard.edu" },
    { name: "IIT Delhi", state: "Delhi", url: "https://iitd.ac.in" },
    { name: "IIT Bombay", state: "Maharashtra", url: "https://iitb.ac.in" },
  ];

  // Filter colleges based on selected state
  const filteredColleges = colleges.filter((college) =>
    (selectedState === "" || college.state === selectedState) &&
    college.state.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <nav className="bg-blue-600 text-white p-4">
        <div className="flex justify-between items-center">
          {/* Left side - Login/Signup, Booking */}
          <div className="flex space-x-4">
            <a href="#login" className="text-white">Login</a>
            <a href="#signup" className="text-white">Signup</a>
            <a href="#booking" className="text-white">Book Counselling</a>
          </div>
          
          {/* Right side - Real Counselling CSE */}
          <h1 className="text-2xl font-bold">RealCounselling CSE</h1>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex-grow p-5 overflow-y-auto">
        <h2 className="text-3xl font-bold mb-5">Welcome to Real Counselling</h2>

        {/* State-wise College Filter */}
        <div className="mb-5">
          <label className="mr-3">Search by state:</label>
          <select
            value={selectedState}
            onChange={(e) => setSelectedState(e.target.value)}
            className="border p-2"
          >
            <option value="">Select State</option>
            <option value="Delhi">Delhi</option>
            <option value="Maharashtra">Maharashtra</option>
            <option value="Massachusetts">Massachusetts</option>
            <option value="California">California</option>
          </select>
        </div>

        {/* Colleges List */}
        <ul>
          {filteredColleges.map((college, index) => (
            <li key={index} className="p-2 border-b">
              <a href={college.url} target="_blank" className="text-blue-500">
                {college.name} - {college.state}
              </a>
            </li>
          ))}
        </ul>

        {/* About Section */}
        <div id="about" className="mt-10 mb-10">
          <h2 className="text-2xl font-bold mb-3">About Us</h2>
          <p>
            Real Counselling helps students find the right colleges based on their preferences.
            Our goal is to assist you with your educational journey and help you make the best decision.
          </p>
        </div>

        {/* Success Stories Section */}
        <div id="success-stories" className="mt-10 mb-10">
          <h2 className="text-2xl font-bold mb-3">Success Stories</h2>
          <div className="space-y-4">
            <div className="p-4 border rounded">
              <p>"Thanks to Real Counselling, I was able to choose the right college and start my dream career!" - Student A</p>
            </div>
            <div className="p-4 border rounded">
              <p>"The guidance I received helped me secure my spot at MIT. Couldn't have done it without Real Counselling!" - Student B</p>
            </div>
          </div>
        </div>

        {/* Enquiry & Book Counselling */}
        <div id="booking" className="mt-10 mb-10">
          <h2 className="text-2xl font-bold mb-3">Enquiry and Book Counselling</h2>
          <form>
            <div className="mb-5">
              <label className="block mb-2">Name:</label>
              <input type="text" className="border p-2 w-full" />
            </div>
            <div className="mb-5">
              <label className="block mb-2">Email:</label>
              <input type="email" className="border p-2 w-full" />
            </div>
            <div className="mb-5">
              <label className="block mb-2">Phone Number:</label>
              <input type="text" className="border p-2 w-full" />
            </div>
            <button type="submit" className="bg-blue-600 text-white p-3 w-full">Book Counselling</button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-blue-600 text-white text-center p-4">
        <p>&copy; 2025 Real Counselling. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
