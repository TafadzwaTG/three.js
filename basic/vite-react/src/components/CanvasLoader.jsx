import { Html, useProgress } from "@react-three/drei";

// Creating a functional component called CanvasLoader
const CanvasLoader = () => {
  // useProgress hook returns progress information during 3D model loading
  const { progress } = useProgress();

  return (
    // Html component to render HTML content inside the 3D scene
    <Html
      as="div"
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      {/* Linear progress bar container */}
      <div
        style={{
          width: "80%",
          maxWidth: "400px",
          height: "10px",
          backgroundColor: "#ddd",
          borderRadius: "5px",
          overflow: "hidden",
          marginBottom: 20,
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        {/* Progress bar itself */}
        <div
          style={{
            width: `${progress}%`,
            height: "100%",
            backgroundColor: "#00f", // Blue color for progress
            borderRadius: "5px",
            transition: "width 0.5s ease-out", // Smooth animation for progress
          }}
        />
      </div>

      {/* Text indicating the progress */}
      <p
        style={{
          fontSize: 18,
          color: "#333",
          fontWeight: 600,
          marginTop: 10,
        }}
      >
        {progress !== null && progress !== undefined
          ? `${progress.toFixed(2)}%`
          : "Loading..."}
      </p>
    </Html>
  );
};

export default CanvasLoader;
