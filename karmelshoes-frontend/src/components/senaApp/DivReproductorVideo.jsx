import { useEffect, useMemo, useRef } from "react";

export const DivReproductorVideo = () => {
  const currentVideoIndexRef = useRef(0);
  const videos = useMemo(
    () => [
      "/src/assets/videos/zapato4.mp4",
      "/src/assets/videos/zapato2.mp4",
      "/src/assets/videos/zapato3.mp4",
    ],
    []
  );
  
  useEffect(() => {
    const videoElement = document.querySelector(".video video");

    const handleVideoEnd = () => {
      currentVideoIndexRef.current =
        (currentVideoIndexRef.current + 1) % videos.length;
      videoElement.src = videos[currentVideoIndexRef.current];
      videoElement.play();
    };

    videoElement.addEventListener("ended", handleVideoEnd);

    const playPromise = videoElement.play();

    if (playPromise) {
      playPromise
        .then(() => {})
        .catch((error) => {
          console.error("Error al reproducir el video:", error);
        });
    }

    return () => {
      videoElement.removeEventListener("ended", handleVideoEnd);
    };
  }, [videos]);

  return (
    <>
      <div className="video">
        <video muted autoPlay>
          {videos.map((videoSrc, index) => (
            <source key={index} src={videoSrc} type="video/mp4" />
          ))}
        </video>
      </div>
    </>
  );
};
