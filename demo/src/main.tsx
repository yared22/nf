import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import waveUrl from "../../wave.lottie?url";
import HoverLottie from "../../react/HoverLottie";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <main
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        fontFamily: "system-ui, sans-serif",
        background: "#fafafa",
      }}
    >
      <div>
        <HoverLottie src={waveUrl} />
        <p style={{ color: "#777", textAlign: "center" }}>
          Hover the robot to make it wave and say hello.
        </p>
      </div>
    </main>
  </StrictMode>,
);
