import Header from "../components/Header";
import BannerVideos from "../components/BannerVideos";
import RecentSearches from "../components/RecentSearches";
import AvailableRooms from "../components/AvailableRooms";
import MultipurposeHall from "../components/MultipurposeHall";

function Dashboard() {
  return (
    <>
      <Header />
      <BannerVideos />
      <RecentSearches />
      <AvailableRooms />
      <MultipurposeHall />
    </>
  );
}

export default Dashboard;
