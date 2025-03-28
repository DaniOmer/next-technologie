import React from "react";

const ChatButton = () => {
  return (
    <button
      className="fixed bottom-6 right-6 bg-primary hover:bg-primary/80 text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110 z-50"
      onClick={() => (window.location.href = "tel:+2250713100047")}
      aria-label="Appeler"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        />
      </svg>
    </button>
  );
};

export default ChatButton;
