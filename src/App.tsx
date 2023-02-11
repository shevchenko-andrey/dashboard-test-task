import './App.css';
import './styles.scss';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <div className=" justify-center bg-[#f8f7fa] ">
      <div className="flex flex-col items-center w-[1155px] m-auto">
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
