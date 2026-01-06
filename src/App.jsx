import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import RecentSearches from "./components/RecentSearches";
import BannerVideos from "./components/BannerVideos";
import AvailableRooms from "./components/AvailableRooms";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex-1 flex flex-col p-4">
          <Header />
          <BannerVideos />
          <RecentSearches />
          <AvailableRooms />
        </div>
      </div>
    </div>
  );
}

export default App;
