import { useState } from "react";

const PoeChatButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="fixed bottom-6 right-6 z-50 flex items-center space-x-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && (
        <span className="bg-gray-800 text-white px-3 py-1 rounded shadow transition-opacity duration-300">
          Trò chuyện với AI
        </span>
      )}
      <a
        href="https://poe.com/BotO2C4XEM6LZ"
        target="_blank"
        rel="noopener noreferrer"
        className={`bg-indigo-600 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-110 ${
          isHovered ? "animate-bounce" : ""
        }`}
        title="Chat với AI"
      >
        🤖
      </a>
    </div>
  );
};

export default PoeChatButton;
