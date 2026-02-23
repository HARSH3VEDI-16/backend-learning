import { useState } from "react";

export default function ToggleMessage() {
  const [isVisible, setIsVisible] = useState<boolean>(true);

  return (
    <div>
      <button onClick={() => setIsVisible(prev => !prev)}>
        Toggle Message
      </button>

      {isVisible && <p>This message is visible</p>}
    </div>
  );
}