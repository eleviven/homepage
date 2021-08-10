import ThemeProvider from "../contexts/theme";
import { Layout } from "../components";
import "../../public/css/global.css";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
