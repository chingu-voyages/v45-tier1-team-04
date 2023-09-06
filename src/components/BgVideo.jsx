import video from "../assets/bgVideo.mp4";

function BgVideo() {
  return (
    <div className="w-full h-full">
      <video
        className="w-full h-full object-cover"
        src={video}
        autoPlay
        loop
        muted
      />
    </div>
  );
}

export default BgVideo;
