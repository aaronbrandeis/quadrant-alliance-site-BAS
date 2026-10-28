/**
 * Line-art plates that stand in for photography.
 *
 * Drawn on a 480x360 grid, stroked with currentColor so each plate picks
 * up the text colour of whatever surface it sits on. Swap any of these
 * out by filling in the matching slot in src/lib/media.ts.
 */

type PlateName =
  | "panel"
  | "rooftop"
  | "network"
  | "mechanical"
  | "sensor"
  | "grid";

function Panel() {
  return (
    <svg
      viewBox="0 0 480 360"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-full w-full"
      aria-hidden="true"
    >
      {/* enclosure */}
      <rect x="56" y="34" width="368" height="292" stroke="currentColor" strokeWidth="2" opacity="0.8" />
      <rect x="74" y="52" width="332" height="256" stroke="currentColor" strokeWidth="1" opacity="0.3" />

      {/* DIN rail with controller modules */}
      <path d="M92 96h296" stroke="currentColor" strokeWidth="2" opacity="0.55" />
      {[100, 152, 204, 256, 308].map((x, i) => (
        <g key={x}>
          <rect
            x={x}
            y="78"
            width="44"
            height="40"
            stroke="currentColor"
            strokeWidth="1.5"
            opacity="0.8"
          />
          {i === 1 && (
            <rect x={x} y="78" width="44" height="40" fill="currentColor" opacity="0.14" />
          )}
          {[86, 92, 98].map((y) => (
            <path key={y} d={`M${x + 6} ${y}h12`} stroke="currentColor" strokeWidth="1" opacity="0.35" />
          ))}
          <circle cx={x + 34} cy={88} r="2.5" fill="currentColor" opacity="0.6" />
        </g>
      ))}

      {/* second rail, I/O modules */}
      <path d="M92 176h296" stroke="currentColor" strokeWidth="2" opacity="0.55" />
      {[100, 140, 180, 220, 260, 300, 340].map((x) => (
        <rect
          key={x}
          x={x}
          y="158"
          width="32"
          height="40"
          stroke="currentColor"
          strokeWidth="1.25"
          opacity="0.6"
        />
      ))}

      {/* terminal strip */}
      <rect x="92" y="236" width="296" height="28" stroke="currentColor" strokeWidth="1.5" opacity="0.7" />
      {Array.from({ length: 18 }, (_, i) => 102 + i * 16).map((x) => (
        <g key={x}>
          <path d={`M${x} 236v28`} stroke="currentColor" strokeWidth="1" opacity="0.3" />
          <path d={`M${x + 8} 264v26`} stroke="currentColor" strokeWidth="1" opacity="0.22" />
        </g>
      ))}

      {/* wire looms into the strip */}
      <path
        d="M120 290c0 22 48 14 60 30M200 290c0 18-36 16-44 30M300 290c0 24 40 12 48 30"
        stroke="currentColor"
        strokeWidth="1.25"
        opacity="0.32"
      />

      {/* door hinges and latch */}
      <circle cx="56" cy="92" r="4" fill="currentColor" opacity="0.5" />
      <circle cx="56" cy="268" r="4" fill="currentColor" opacity="0.5" />
      <path d="M424 170v20" stroke="currentColor" strokeWidth="3" opacity="0.6" />
    </svg>
  );
}

function Rooftop() {
  return (
    <svg
      viewBox="0 0 480 360"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-full w-full"
      aria-hidden="true"
    >
      {/* roof deck */}
      <path d="M0 286h480" stroke="currentColor" strokeWidth="2" opacity="0.7" />
      <path d="M0 304h480M0 320h480" stroke="currentColor" strokeWidth="1" opacity="0.18" />

      {/* curb */}
      <path d="M86 286v-16h308v16" stroke="currentColor" strokeWidth="1.5" opacity="0.55" />

      {/* unit body */}
      <rect x="96" y="126" width="288" height="144" stroke="currentColor" strokeWidth="2" opacity="0.85" />
      <path d="M96 126l30 -28h288l-30 28" stroke="currentColor" strokeWidth="1.5" opacity="0.45" />
      <path d="M384 126l30 -28v144l-30 28" stroke="currentColor" strokeWidth="1.5" opacity="0.45" />

      {/* access panels */}
      <rect x="112" y="142" width="80" height="112" stroke="currentColor" strokeWidth="1.25" opacity="0.4" />
      <rect x="204" y="142" width="80" height="112" stroke="currentColor" strokeWidth="1.25" opacity="0.4" />
      <circle cx="186" cy="198" r="3" fill="currentColor" opacity="0.5" />
      <circle cx="278" cy="198" r="3" fill="currentColor" opacity="0.5" />

      {/* intake louvres */}
      <rect x="296" y="142" width="74" height="112" stroke="currentColor" strokeWidth="1.25" opacity="0.5" />
      {Array.from({ length: 9 }, (_, i) => 150 + i * 12).map((y) => (
        <path key={y} d={`M300 ${y}h66`} stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
      ))}
      <rect x="296" y="142" width="74" height="112" fill="currentColor" opacity="0.07" />

      {/* exhaust hood */}
      <path d="M150 98v-30h66v30" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
      <path d="M142 68h82" stroke="currentColor" strokeWidth="2" opacity="0.6" />

      {/* condenser fan */}
      <circle cx="300" cy="84" r="26" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
      <circle cx="300" cy="84" r="6" fill="currentColor" opacity="0.45" />
      <path d="M300 58v52M274 84h52" stroke="currentColor" strokeWidth="1" opacity="0.3" />

      {/* control conduit dropping to the deck */}
      <path d="M404 270v-96h-20" stroke="currentColor" strokeWidth="1.5" opacity="0.4" strokeDasharray="6 5" />
    </svg>
  );
}

function Network() {
  return (
    <svg
      viewBox="0 0 480 360"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-full w-full"
      aria-hidden="true"
    >
      {/* supervisor */}
      <rect x="192" y="34" width="96" height="52" stroke="currentColor" strokeWidth="2" opacity="0.9" />
      <rect x="192" y="34" width="96" height="52" fill="currentColor" opacity="0.12" />
      {[46, 54, 62].map((y) => (
        <path key={y} d={`M204 ${y}h44`} stroke="currentColor" strokeWidth="1.25" opacity="0.4" />
      ))}
      <circle cx="272" cy="74" r="3" fill="currentColor" opacity="0.7" />

      {/* trunk */}
      <path d="M240 86v54" stroke="currentColor" strokeWidth="2" opacity="0.6" />
      <path d="M72 140h336" stroke="currentColor" strokeWidth="2" opacity="0.6" />

      {/* field controllers and the devices below them */}
      {[72, 184, 296, 408].map((x) => (
        <g key={x}>
          <path d={`M${x} 140v40`} stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
          <rect
            x={x - 34}
            y="180"
            width="68"
            height="44"
            stroke="currentColor"
            strokeWidth="1.5"
            opacity="0.75"
          />
          {[192, 200].map((y) => (
            <path key={y} d={`M${x - 24} ${y}h30`} stroke="currentColor" strokeWidth="1" opacity="0.3" />
          ))}
          <circle cx={x + 22} cy={190} r="2.5" fill="currentColor" opacity="0.55" />

          <path d={`M${x} 224v34`} stroke="currentColor" strokeWidth="1.25" opacity="0.35" strokeDasharray="5 5" />
          <circle cx={x} cy={268} r="9" stroke="currentColor" strokeWidth="1.25" opacity="0.6" />
          <path d={`M${x} 277v23`} stroke="currentColor" strokeWidth="1" opacity="0.25" />
          <path d={`M${x - 20} 300h40`} stroke="currentColor" strokeWidth="1" opacity="0.25" />
        </g>
      ))}

      <path d="M72 330h336" stroke="currentColor" strokeWidth="1" strokeDasharray="7 7" opacity="0.3" />
    </svg>
  );
}

function Mechanical() {
  return (
    <svg
      viewBox="0 0 480 360"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-full w-full"
      aria-hidden="true"
    >
      {/* air handler body, sectioned */}
      <rect x="40" y="110" width="300" height="150" stroke="currentColor" strokeWidth="2" opacity="0.85" />
      <path d="M130 110v150M220 110v150" stroke="currentColor" strokeWidth="1.5" opacity="0.45" />

      {/* filter bank */}
      {Array.from({ length: 5 }, (_, i) => 50 + i * 16).map((x) => (
        <path key={x} d={`M${x} 120v130`} stroke="currentColor" strokeWidth="1" opacity="0.3" />
      ))}
      <rect x="50" y="120" width="70" height="130" stroke="currentColor" strokeWidth="1" opacity="0.25" />

      {/* coil section */}
      <path
        d="M142 128c14 0 14 18 28 18s14-18 28-18 14 18 28 18"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.5"
      />
      <path
        d="M142 168c14 0 14 18 28 18s14-18 28-18 14 18 28 18"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.5"
      />
      <path
        d="M142 208c14 0 14 18 28 18s14-18 28-18 14 18 28 18"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.5"
      />

      {/* supply fan */}
      <circle cx="280" cy="185" r="44" stroke="currentColor" strokeWidth="1.75" opacity="0.8" />
      <circle cx="280" cy="185" r="10" fill="currentColor" opacity="0.4" />
      <path d="M280 145v80M240 185h80M252 157l56 56M308 157l-56 56" stroke="currentColor" strokeWidth="1.25" opacity="0.28" />

      {/* supply duct with a damper blade */}
      <path d="M340 140h100v60H340" stroke="currentColor" strokeWidth="1.75" opacity="0.7" />
      <path d="M396 146l28 48" stroke="currentColor" strokeWidth="2" opacity="0.65" />
      <circle cx="410" cy="170" r="4" fill="currentColor" opacity="0.6" />

      {/* sensor tap */}
      <path d="M364 140v-28M364 112h-14" stroke="currentColor" strokeWidth="1.25" opacity="0.45" />
      <circle cx="346" cy="112" r="6" stroke="currentColor" strokeWidth="1.25" opacity="0.6" />

      {/* plinth and floor */}
      <path d="M40 260v22h300v-22" stroke="currentColor" strokeWidth="1.25" opacity="0.4" />
      <path d="M0 282h480" stroke="currentColor" strokeWidth="2" opacity="0.65" />
    </svg>
  );
}

function Sensor() {
  return (
    <svg
      viewBox="0 0 480 360"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-full w-full"
      aria-hidden="true"
    >
      {/* wall plane */}
      <path d="M0 40h480M0 320h480" stroke="currentColor" strokeWidth="1" opacity="0.15" />

      {/* backplate */}
      <rect x="138" y="86" width="204" height="188" stroke="currentColor" strokeWidth="1.25" opacity="0.3" />

      {/* housing */}
      <rect x="156" y="104" width="168" height="152" rx="6" stroke="currentColor" strokeWidth="2" opacity="0.9" />

      {/* display */}
      <rect x="176" y="124" width="128" height="68" rx="3" stroke="currentColor" strokeWidth="1.5" opacity="0.65" />
      <rect x="176" y="124" width="128" height="68" rx="3" fill="currentColor" opacity="0.1" />
      <path d="M192 150h42M192 164h28" stroke="currentColor" strokeWidth="3" opacity="0.5" />
      <path d="M262 142h26M262 154h26M262 166h16" stroke="currentColor" strokeWidth="1.5" opacity="0.35" />

      {/* buttons */}
      <circle cx="196" cy="222" r="11" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
      <circle cx="240" cy="222" r="11" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
      <circle cx="284" cy="222" r="11" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
      <path d="M191 222h10M235 222h10M279 217v10M274 222h10" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />

      {/* vent slots */}
      {[266, 272, 278].map((y) => (
        <path key={y} d={`M176 ${y}h128`} stroke="currentColor" strokeWidth="1" opacity="0.22" />
      ))}

      {/* airflow */}
      <path
        d="M372 140c22 18 22 42 0 60M402 128c32 26 32 62 0 88"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeDasharray="6 6"
        opacity="0.35"
      />
      <path
        d="M108 140c-22 18-22 42 0 60M78 128c-32 26-32 62 0 88"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeDasharray="6 6"
        opacity="0.35"
      />
    </svg>
  );
}

function Grid() {
  return (
    <svg
      viewBox="0 0 480 360"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-full w-full"
      aria-hidden="true"
    >
      {Array.from({ length: 11 }, (_, i) => i * 48).map((x) => (
        <path key={`v${x}`} d={`M${x} 0v360`} stroke="currentColor" strokeWidth="1" opacity="0.12" />
      ))}
      {Array.from({ length: 8 }, (_, i) => i * 48).map((y) => (
        <path key={`h${y}`} d={`M0 ${y}h480`} stroke="currentColor" strokeWidth="1" opacity="0.12" />
      ))}
      {/* a trend line, the thing every BAS dashboard shows */}
      <path
        d="M0 252c60-8 70-56 120-56s70 60 120 36 70-74 120-74 60 30 120 22"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.45"
      />
      {[
        [0, 252],
        [120, 196],
        [240, 232],
        [360, 158],
        [480, 180],
      ].map(([x, y]) => (
        <circle key={x} cx={x} cy={y} r="4" fill="currentColor" opacity="0.4" />
      ))}
    </svg>
  );
}

const plates: Record<PlateName, () => React.ReactElement> = {
  panel: Panel,
  rooftop: Rooftop,
  network: Network,
  mechanical: Mechanical,
  sensor: Sensor,
  grid: Grid,
};

export default function Plate({ name }: { name: PlateName }) {
  const Art = plates[name];
  return <Art />;
}

export type { PlateName };
