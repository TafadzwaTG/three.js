import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {
  // Get the loading progress from the useProgress hook
  const { progress } = useProgress();
  return (
    // Html component to render HTML content inside the 3D scene
    <Html
      as="div"
      center
      style={{
        display: "flex", // Flexbox for alignment
        justifyContent: "center", // Center horizontally
        alignItems: "center", // Center vertically
        flexDirection: "column", // Column layout
      }}
    >
      {/* Loader spinner */}
      <span className="canvas-loader"></span>

      {/* Progress bar container */}
      <p
        style={{
          fontSize: 14,
          color: "#F1F1F1",
          fontWeight: 800,
          marginTop: 40,
        }}
      >
        {/* Progress bar */}
        {progress !== 0 ? `${progress.toFixed(2)}%` : "Loading..."}
      </p>
    </Html>
  );
};

export default CanvasLoader;
