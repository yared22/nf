# Hover-interactive wave animation

`wave.lottie` is a robot that waves and shows a "Hello" bubble. Here it only plays
while the pointer (or keyboard focus) is on it, instead of looping like a video.

## How it works

The player is created with `autoplay: false`, and hover handlers drive playback:

- `mouseenter` / `focus` → `setFrame(0)` then `play()` — always starts the wave from the top.
- `mouseleave` / `blur` → `stop()` — pauses **and** rewinds to frame 0, so the "Hello"
  bubble disappears and animates in again on the next hover.

`playOnHover` (a built-in prop of the dotLottie players) is the one-line alternative, but it
only pauses on mouse out, leaving the animation frozen mid-wave with "Hello" still visible.

## Plain HTML

Open `index.html` through a local server (module imports and `fetch` do not work from
`file://`):

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## React demo

A minimal Vite app in `demo/` renders `react/HoverLottie.tsx` so the component can be
checked in a real React tree:

```bash
nvm use          # Node 22.12+ (Vite 8 / rolldown needs it)
npm install
npm run dev      # http://localhost:5173
npm run build    # tsc --noEmit && vite build
```

## Using it in your own project

Copy `react/HoverLottie.tsx` into your project and put `wave.lottie` in `public/`:

```bash
npm install @lottiefiles/dotlottie-react
```

```tsx
import HoverLottie from "@/components/HoverLottie";

<HoverLottie src="/wave.lottie" width={320} height={252} />;
```

Touch devices have no hover, so the animation stays on its first frame there; add an
`onClick={start}` (or an intersection observer) if you want it to play on mobile too.
