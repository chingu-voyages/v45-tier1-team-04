import video from "../assets/bgVideo.mp4";

function BgVideo() {
  return (
    <div className="absolute w-full h-full z-0 bg-gray-600">
      <video
        className="w-full h-full object-cover"
        // src={video}
        autoPlay
        loop
        muted
      />
    </div>
  );
}

export default BgVideo;
