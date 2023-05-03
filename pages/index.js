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
import HomeBanner from "../components/HomeBanner";
import HomeServices from "../components/HomeServices";
import HomeFeaturesOne from "../components/HomeFeaturesOne";
import HomeFeaturesTwo from "../components/HomeFeaturesTwo";
import HomeBrands from "../components/HomeBrands";
import HomeWhatWeDo from "../components/HomeWhatWeDo";
import HomeOurServices from "../components/HomeOurServices";
import HomeCallToAction from "../components/HomeCallToAction";
import HomeContactUs from "../components/HomeContactUs";
import SeoHead from "../components/Head";

const Home = () => (

    <Layout pageTitle="Zimed - React Next App Landing Page Template">
        <SeoHead 
            title={'Onliq.Agency Home'} 
            description={'Onliq.Agency recognizes the significance of dependable management for the progress and expansion of OnlyFans. As the top agency to offer such services, we remain informed and knowledgeable about the most recent developments in this constantly evolving digital environment. Our adept blend of dependable marketing solutions and comprehensive comprehension of the OnlyFans algorithm guarantees that our clients always have an advantage over their rivals.'} 
        />
        <Navbar />
        
        {/* <Banner /> */}
        <HomeBanner />
        
        {/* <Services /> */}
        <HomeServices />
        
        {/* <FeaturesOne /> */}
        <HomeFeaturesOne />
        
        {/* <FeaturesTwo /> */}
        <HomeFeaturesTwo />
        
        {/* <Video /> */}
        {/* <Counter /> */}
        {/* <Screenshots /> */}
        {/* <Testimonial /> */}
        
        {/* <Brands /> */}
        {/* <HomeBrands /> */}

        {/* <Faq /> */}
        <HomeWhatWeDo />

        {/* <Pricing /> // -------------------------------------- */}
        <HomeOurServices />
        
        {/* <BlogHome /> */}
        
        {/* <Contact /> */}
        {/* <HomeContactUs /> */}

        {/* <CallToAction /> */}
        <HomeCallToAction />
        <Footer />
    </Layout>

)

export default Home;