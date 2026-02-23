type CountDisplayProps = {
  count: number;
  isEven: boolean;
};

export default function CountDisplay({ count, isEven }: CountDisplayProps) {
  return (
    <div>
      <h2>Count: {count}</h2>
      <p>{isEven ? "Even Number" : "Odd Number"}</p>
    </div>
  );
}