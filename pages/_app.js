import 'react-modal-video/css/modal-video.min.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Layout from '../components/Layout';

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <Navbar />
            <Component {...pageProps} />
            <Footer />
        </Layout>
    ) 
}