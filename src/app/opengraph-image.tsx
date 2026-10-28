import { ImageResponse } from "next/og";
import { SITE_NAME } from "@/lib/site";

/**
 * The card shown when a link to the site is pasted into Slack, LinkedIn,
 * iMessage, email, and so on. Generated at build time rather than kept as a
 * static file, so it never drifts out of step with the brand.
 *
 * 1200x630 is the size every major platform crops from.
 */

export const alt =
  "Quadrant Alliance, building automation and controls";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0b0c0e",
          padding: "72px",
          position: "relative",
        }}
      >
        {/* red glow, echoes the site's hero treatment */}
        <div
          style={{
            position: "absolute",
            top: -160,
            right: -160,
            width: 620,
            height: 620,
            borderRadius: "50%",
            background: "#dc2f24",
            opacity: 0.22,
            filter: "blur(120px)",
            display: "flex",
          }}
        />

        {/* the quadrant mark, one square live */}
        <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              width: 68,
              height: 68,
              gap: 6,
            }}
          >
            <div
              style={{
                width: 31,
                height: 31,
                background: "#dc2f24",
                borderRadius: 5,
                display: "flex",
              }}
            />
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                style={{
                  width: 31,
                  height: 31,
                  border: "3px solid #4f5259",
                  borderRadius: 5,
                  display: "flex",
                }}
              />
            ))}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 34,
              fontWeight: 700,
              color: "#ffffff",
              letterSpacing: "-0.02em",
            }}
          >
            {SITE_NAME}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 62,
              fontWeight: 700,
              color: "#ffffff",
              lineHeight: 1.08,
              letterSpacing: "-0.03em",
              maxWidth: 940,
            }}
          >
            Keeping Buildings Running at Peak Performance
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 28,
              fontSize: 27,
              color: "#94979e",
              maxWidth: 900,
              lineHeight: 1.4,
            }}
          >
            Operator-led. We partner with independent building automation
            integrators.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            height: 8,
            width: 160,
            background: "#dc2f24",
            borderRadius: 4,
          }}
        />
      </div>
    ),
    size,
  );
}
