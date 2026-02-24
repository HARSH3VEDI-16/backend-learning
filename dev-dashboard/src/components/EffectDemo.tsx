import { useState, useEffect } from "react";

function EffectDemo() {
  const [count, setCount] = useState(0);
  const [userId, setUserId] = useState(1);

  // Side effect: log after every render
  useEffect(() => {
    console.log("Component rendered or re-rendered, count:", count);
  });

  // Side effect: run once on mount
  useEffect(() => {
    console.log("Effect runs once on mount");
  }, []);

  // Side effect: depends on userId
  useEffect(() => {
    console.log("Fetching user data for userId:", userId);
    // Simulate API fetch
    const timer = setTimeout(() => {
      console.log("Fetched user data for userId:", userId);
    }, 1000);

    // Cleanup
    return () => {
      clearTimeout(timer);
      console.log("Cleanup for userId:", userId);
    };
  }, [userId]);

  return (
    <div style={{ marginTop: "20px" }}>
      <h2>useEffect Demo</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
      <p>User ID: {userId}</p>
      <button onClick={() => setUserId(userId + 1)}>Next User</button>
    </div>
  );
}

export default EffectDemo;