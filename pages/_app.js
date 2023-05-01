import 'react-modal-video/css/modal-video.min.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
    return (
        <>
            {/* <Navbar /> */}
            <Component {...pageProps} />
            {/* <Footer /> */}
        </>
    )
}