import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Document Tracking System</h1>
        <div className="space-x-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/incoming" className="hover:underline">Incoming</Link>
          <Link to="/outgoing" className="hover:underline">Outgoing</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
