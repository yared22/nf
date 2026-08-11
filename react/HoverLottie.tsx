"use client";

import { useRef } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import type { DotLottie } from "@lottiefiles/dotlottie-web";

type HoverLottieProps = {
  /** Path or URL to the .lottie / .json animation. */
  src?: string;
  width?: number | string;
  height?: number | string;
  className?: string;
  /** Keep replaying while hovered instead of playing once. */
  loop?: boolean;
};

/**
 * Plays a Lottie only while the pointer (or keyboard focus) is on it.
 * Leaving rewinds to the first frame, so anything that animates in —
 * such as the "Hello" bubble — animates in again on the next hover.
 */
export default function HoverLottie({
  src = "/wave.lottie",
  width = 320,
  height = 252,
  className,
  loop = true,
}: HoverLottieProps) {
  const player = useRef<DotLottie | null>(null);

  const start = () => {
    const instance = player.current;
    if (!instance) return;
    instance.setFrame(0);
    instance.play();
  };

  const reset = () => {
    player.current?.stop();
  };

  return (
    <div
      className={className}
      style={{ width, height, cursor: "pointer" }}
      tabIndex={0}
      onMouseEnter={start}
      onMouseLeave={reset}
      onFocus={start}
      onBlur={reset}
    >
      <DotLottieReact
        src={src}
        loop={loop}
        autoplay={false}
        dotLottieRefCallback={(instance) => {
          player.current = instance ?? null;
        }}
      />
    </div>
  );
}
