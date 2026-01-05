import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import RecentSearches from "./components/RecentSearches";
import DatePickerComp from "../src/components/DatePickerComp";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex-1 flex flex-col p-4">
          <Header />
          <RecentSearches />
        </div>
      </div>
    </div>
  );
}

export default App;
