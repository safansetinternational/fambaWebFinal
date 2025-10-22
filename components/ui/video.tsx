
export default function MyVideo() {
  return (
    <video width="1200" height="720" controls preload="none" autoPlay muted playsInline>
      <source src="/myvideo.mp4" type="video/mp4" />
      <track
        src="/path/to/captions.vtt"
        kind="subtitles"
        srcLang="en"
        label="English"
      />
      Your browser does not support the video tag.
    </video>
  );
}