import video1 from "../assets/Peaceful_Indian_Eco_Farmhouse_Resort_Video.mp4";
import video2 from "../assets/Peaceful_Indian_Farmhouse_Resort_Video.mp4";

function BannerVideos() {
  return (
    <section className="mb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Video 1 */}
        <div className="rounded-xl overflow-hidden border border-gray-200 bg-black">
          <video
            className="w-full h-56 object-cover"
            muted
            loop
            autoPlay
            playsInline
          >
            <source src={video1} type="video/mp4" />
          </video>
        </div>

        {/* Video 2 */}
        <div className="rounded-xl overflow-hidden border border-gray-200 bg-black">
          <video
            className="w-full h-56 object-cover"
            muted
            loop
            autoPlay
            playsInline
          >
            <source src={video2} type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
}

export default BannerVideos;
