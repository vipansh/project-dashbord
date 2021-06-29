import "./App.css";
import Navbar from "./components/Navbar";
import { FormProvider } from "./context/FormContext";
import HomePage from "./Layout/HomePage";
function App() {
  return (
    <div className="overflow-x-hidden">
      <FormProvider>
        <Navbar />
        <div className=" bg-blue-500 pl-12 " >
          <HomePage />
        </div>
      </FormProvider>
    </div>
  );
}

export default App;
