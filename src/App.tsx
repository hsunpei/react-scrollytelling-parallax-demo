import './styles.css';

export default function App() {
  return (
    <div className="App">
      <div className="relative h-screen">
        <div className="absolute bottom-16 right-5 max-w-xl text-left">
          <h1 className="red-hat-display-black text-6xl text-blue-700 md:text-9xl">
            Join the Pride
          </h1>
          <p className="mt-6 font-sans text-xl font-medium text-slate-500 md:text-2xl">
            Join us in celebrating love, diversity, and equality at this year&#39;s Pride event
          </p>
        </div>
      </div>
      <div className="h-screen">
        <h1>React + TypeScript + TailwindCSS</h1>
      </div>
    </div>
  );
}
