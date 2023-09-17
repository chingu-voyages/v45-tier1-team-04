import video from "../assets/bgVideo.mp4";

function BgVideo() {
  return (
    <div className="absolute w-full h-full z-0 bg-gray-600">
      <video
        className="w-full h-full object-cover bg-[url('https://images.unsplash.com/photo-1602517526565-1213eff53df5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80')] bg-cover bg-center"
        src={video}
        autoPlay
        loop
        muted
      />
    </div>
  );
}

export default BgVideo;
