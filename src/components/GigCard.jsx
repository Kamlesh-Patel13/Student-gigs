// components/GigCard.js
export default function GigCard({ gig }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow flex justify-between items-center">
      <div>
        <h4 className="font-semibold text-lg">{gig.title}</h4>
        <p className="text-gray-600">₹ {gig.price}</p>
        <p className="text-sm text-gray-500 mt-2">{gig.user}</p>
        <button className="bg-blue-500 text-white px-6 py-1 pb-1.5 mt-1.5 rounded-lg">Contact</button>
      </div>
      <div className="w-24 h-24 bg-gray-200 rounded"></div>
    </div>
  );
}