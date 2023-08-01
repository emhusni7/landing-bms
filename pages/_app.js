import { ThemeProvider } from "next-themes";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../css/tailwind.css";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
