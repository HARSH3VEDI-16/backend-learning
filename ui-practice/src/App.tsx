import UsersContainer from "./features/users/UsersContainer";

function App() {
  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className="p-8">
      {/* Dark Mode Toggle */}
      <button
        onClick={toggleDarkMode}
        className="mb-4 px-3 py-1 border rounded-md text-sm"
      >
        Toggle Dark Mode
      </button>

      <UsersContainer />
    </div>
  );
}

export default App;