import Header from "../components/Header";
import BannerVideos from "../components/BannerVideos";
import RecentSearches from "../components/RecentSearches";
import AvailableRooms from "../components/AvailableRooms";
import Events from "../components/Events";

function Dashboard() {
  return (
    <>
      <Header />
      <BannerVideos />
      <RecentSearches />
      <AvailableRooms />
      <Events />
    </>
  );
}

export default Dashboard;
