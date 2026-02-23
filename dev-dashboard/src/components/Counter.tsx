type CounterProps = {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
};

export default function Counter({ count, setCount }: CounterProps) {
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(prev => prev + 1)}>
        Increase
      </button>
    </div>
  );
}