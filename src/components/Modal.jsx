// components/Modal.jsx
export default function Modal({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center">
      <div className="bg-white p-6 rounded-xl w-96">
        <h2 className="text-xl font-bold mb-4">Contact Seller</h2>

        <input className="w-full mb-3 p-2 border rounded" placeholder="Your Name" />
        <textarea className="w-full mb-3 p-2 border rounded" placeholder="Message" />

        <button className="bg-indigo-500 text-white px-4 py-2 rounded">
          Send
        </button>

        <button onClick={onClose} className="ml-4 text-gray-500">
          Close
        </button>
      </div>
    </div>
  );
}