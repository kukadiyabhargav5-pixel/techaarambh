import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Techaarambh — Where Technology Begins",
    short_name: "Techaarambh",
    description:
      "Techaarambh is a leading IT services company in India offering Website Development, Data Analytics, Application Development, and Digital Marketing services.",
    start_url: "/",
    display: "standalone",
    background_color: "#0A0A0F",
    theme_color: "#2563EB",
    orientation: "portrait-primary",
    icons: [
      {
        src: "/logo.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/techaarambh_logo.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
