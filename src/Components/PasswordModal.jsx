import { useState, useEffect } from "react";

export default function PasswordModal({ isOpen, onClose, onConfirm, loading }) {
  const [password, setPassword] = useState("");

  // Reset password whenever modal closes
  useEffect(() => {
    if (!isOpen) setPassword("");
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!password.trim() || loading) return; // avoid empty or double submissions
    onConfirm(password);
    setPassword("");
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-sm p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Confirm Purchase
        </h2>
        <p className="text-gray-600 text-sm mb-4">
          Please enter your password to complete this data purchase.
        </p>

        <form onSubmit={handleSubmit}>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={loading}
            className="w-full border rounded-lg px-3 py-2 mb-4 focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
          />

          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              disabled={loading}
              className="px-4 py-2 rounded-lg bg-gray-200 text-gray-800 hover:bg-gray-300 disabled:opacity-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50"
            >
              {loading ? "Processing..." : "Pay"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}