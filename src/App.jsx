import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import RecentSearches from "./components/RecentSearches";

function App() {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />

      <main className="p-8 bg-gray-50 min-h-screen">
        <Header />
        <RecentSearches />
      </main>
    </div>
  );
}

export default App;
