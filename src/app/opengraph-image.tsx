import { ImageResponse } from "next/og";

// Branded, dynamically-generated Open Graph image. This replaces the missing
// static /og-image.jpg and is auto-wired by Next as the default OG/Twitter image
// for every route that doesn't define its own.
export const alt = "Tatvix Technologies — Embedded Systems & IoT Development";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
    return new ImageResponse(
        (
            <div
                style={{
                    height: "100%",
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    padding: "80px",
                    background:
                        "linear-gradient(135deg, #0a0a0a 0%, #0f172a 55%, #082f49 100%)",
                    color: "#ffffff",
                    fontFamily: "sans-serif",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "16px",
                        fontSize: 34,
                        fontWeight: 700,
                        letterSpacing: "-0.02em",
                        color: "#22d3ee",
                    }}
                >
                    <div
                        style={{
                            width: 18,
                            height: 18,
                            borderRadius: 6,
                            background: "#22d3ee",
                        }}
                    />
                    Tatvix Technologies
                </div>

                <div
                    style={{
                        marginTop: 28,
                        fontSize: 72,
                        fontWeight: 800,
                        lineHeight: 1.05,
                        letterSpacing: "-0.03em",
                        maxWidth: 900,
                    }}
                >
                    Embedded Systems & IoT Product Development
                </div>

                <div
                    style={{
                        marginTop: 28,
                        fontSize: 30,
                        color: "#cbd5e1",
                        maxWidth: 880,
                    }}
                >
                    Hardware design, firmware, and IoT — from concept to mass
                    production. India HQ, serving clients worldwide.
                </div>

                <div
                    style={{
                        marginTop: 48,
                        fontSize: 26,
                        color: "#94a3b8",
                    }}
                >
                    tatvixtech.com
                </div>
            </div>
        ),
        { ...size }
    );
}
