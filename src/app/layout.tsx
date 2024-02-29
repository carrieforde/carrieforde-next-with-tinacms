import "styles/styles.css";
import { ibmPlexMono, libreFranklin } from "theme";
import { Site } from "components";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${libreFranklin.variable} ${ibmPlexMono.variable}`}
    >
      <body>
        <Site>{children}</Site>
      </body>
    </html>
  );
}
