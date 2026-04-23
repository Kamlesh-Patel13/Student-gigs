import { useLocation, useNavigate } from "react-router-dom";

export default function GigDetails() {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) {
    return <div className="p-10">No Gig Data</div>;
  }

  const gig = state;

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-200 to-purple-200 p-6 flex justify-center items-center">
      
      <div className="bg-white w-[500px] p-6 rounded-xl shadow">
        
        <h2 className="text-2xl font-bold mb-4">{gig.title}</h2>

        <p className="text-gray-700 mb-2">💰 ₹ {gig.price}</p>

        <p className="mb-4 text-gray-600">
          {gig.description || "No description provided"}
        </p>

        <h3 className="font-semibold mb-2">Contact Details</h3>

        <p>👤 {gig.name}</p>
        <p>📧 {gig.email}</p>
        <p>📞 {gig.phone}</p>

        {/* ACTION BUTTONS */}
        <div className="flex gap-3 mt-6">
          
          {/* CALL */}
          <a
            href={`tel:${gig.phone}`}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Call
          </a>

          {/* EMAIL */}
          <a
            href={`mailto:${gig.email}`}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Email
          </a>
        </div>

        {/* BACK */}
        <button
          onClick={() => navigate(-1)}
          className="mt-6 w-full border py-2 rounded-lg"
        >
          Back
        </button>
      </div>
    </div>
  );
}