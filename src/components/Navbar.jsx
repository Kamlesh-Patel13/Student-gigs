import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center px-10 py-4 bg-white shadow">
      <h1 className="text-2xl font-bold text-blue-600">StudentGigs</h1>
      <div className="flex gap-4 items-center">
        <Link to="/my-gigs" className="text-gray-700">My Gigs</Link>
        <Link to="/login" className="bg-blue-600 text-white px-4 py-2 rounded-full">Login</Link>
      </div>
    </div>
  );
}