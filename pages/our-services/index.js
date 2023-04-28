import FeaturesOne from "../../components/FeaturesOne"
import Layout from "../../components/Layout"

const OurServices = () => {
  return (
    <Layout pageTitle="Zimed - React Next App Landing Page Template">
      <section
        className="banner-one our-services"
        id="banner"
        style={{
          backgroundImage: `url(/assets/images/background/banner-bg-1-1.png)`,
        }}
      >
        <img
          src="/assets/images/shapes/banner-shapes-1-1.png"
          alt=""
          className="banner-one__shape-1"
        />
        <img
          src="/assets/images/shapes/banner-shapes-1-2.png"
          alt=""
          className="banner-one__shape-2"
        />

        <img
          src="/assets/images/shapes/banner-shapes-1-4.png"
          alt=""
          className="banner-one__shape-4"
        />
        <img
          src="/assets/images/shapes/banner-shapes-1-5.png"
          alt=""
          className="banner-one__shape-5"
        />
        <img
          src="/assets/images/shapes/banner-shapes-1-6.png"
          alt=""
          className="banner-one__shape-6"
        />
        <img
          src="/assets/images/shapes/banner-shapes-1-7.png"
          alt=""
          className="banner-one__shape-7"
        />

        <div className="container">
          <img
            src="/assets/images/shapes/banner-shapes-1-3.png"
            alt=""
            className="banner-one__shape-moc-1"
          />
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="banner-one__content">
                <p className="banner-one__tag-line">
                  Welcome to Our Services <a href="#">free trial</a>
                </p>
                <h3 className="">OnlyFans is not a piece of cake…</h3>
                <p className="description">Onlyfans' top 10% of creators earn 70% of the platform's income, while 70% of creators make less than $100 per month. Therefore, accessing the high revenues of the top creators requires the assistance of a professional team.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FeaturesOne />
    </Layout>
  )
}

export default OurServices