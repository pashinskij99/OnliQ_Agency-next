import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Services from "../components/Services";
import FeaturesOne from "../components/FeaturesOne";
import FeaturesTwo from "../components/FeaturesTwo";
import Video from "../components/Video";
import Counter from "../components/Counter";
import Pricing from "../components/Pricing";
import Screenshots from "../components/Screenshots";
import Testimonial from "../components/Testimonial";
import Brands from "../components/Brands";
import Faq from "../components/Faq";
import BlogHome from "../components/BlogHome";
import Contact from "../components/Contact";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";


const Home = () => (

    <Layout pageTitle="Zimed - React Next App Landing Page Template">
        <Navbar />
        <Banner />
        <Services />
        <FeaturesOne />
        <FeaturesTwo />
        <BlogHome />
        <Faq />
        <CallToAction />
        <Testimonial />
        <Contact />

        <Footer />

        {/* <Video /> */}
        {/* <Counter /> */}
        {/* <Pricing /> */}
        {/* <Screenshots /> */}
        {/* <Brands /> */}
    </Layout>

)

export default Home;