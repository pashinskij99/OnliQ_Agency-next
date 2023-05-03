import React from "react";
import { PostUserData } from "../services/postUserData.services";
import {ToastContainer, toast} from 'react-toastify';
import { useForm } from "react-hook-form";

const email_reg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

const HomeContactUs = () => {
  const {register, handleSubmit, formState: {errors}, reset, formState: {isSubmitting}} = useForm()

  const onSubmit = async data => {
    await PostUserData.postUserData(data).then((res) => {
      if(res.data.status === 200) {
        toast.success("Your data has been successfully sent!", {theme: 'light', style: {lineHeight: '1.5rem', top: '10vh', fontSize: '14px'}});
        reset()
      }
    })
  }

  return (
    <section className="contact-one home-contact mb-5 pt-3" id="contact">
      <img
        style={{ zIndex: "-1" }}
        src="/assets/images/shapes/contact-shape-1.png"
        alt=""
        className="contact-one__shape-1"
      />
      <img
        src="/assets/images/shapes/contact-shape-2.png"
        alt=""
        className="contact-one__shape-2"
      />
      <img
        src="/assets/images/shapes/contact-shape-3.png"
        alt=""
        className="contact-one__shape-3"
      />
      <div className="container">
        <div className="row flex-column">
          <div className="col-lg-8 m-auto text-center">
            <div className="contact-one__content">
              <div className="contact-one__infos">
                <div className="block-title">
                  <h3>Join our waiting list!</h3>
                </div>
                <p>Looking forward to hear from you!</p>
              </div>
            </div>
          </div>
          <div className="col-lg-8 m-auto">
            <div className="contact-one__form-wrap">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="contact-form-validated contact-one__form"
              >
                <div style={{rowGap: '15px'}} className="row">
                  <div className="col-md-6">
                    <input
                      {...register('name', {required: true, minLength: 3})}
                      type="text"
                      name="name"
                      placeholder="Name"
                    />
                    {errors.name && 
                      <span 
                        style={{fontSize: '12px', lineHeight: '1rem', transform: 'translateY(-40%)'}} 
                        className="text-danger position-absolute bottom-0"
                      >Name must be at least 3 letters long!</span>
                    }
                    
                  </div>
                  <div className="col-md-6">
                    <input
                      {...register('email', {required: true, pattern: email_reg})}
                      className=""
                      type="text"
                      name="email"
                      placeholder="Email"
                    />
                    {errors.email &&
                      <span 
                        style={{fontSize: '12px', lineHeight: '1rem', transform: 'translateY(-40%)'}} 
                        className="text-danger position-absolute bottom-0"
                      >Incorrect email!</span>
                    }
                  </div>
                  <div className="col-md-6">
                    <input
                      {...register('instagram_link')}
                      type="text"
                      name="instagram_link"
                      placeholder="Instagram link"
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      {...register('onlyfans_link')}
                      type="text"
                      name="onlyfans_link"
                      placeholder="Onlyfans link"
                    />
                  </div>
                  <div className="col-md-12">
                    <input
                      {...register('onlyfans_percentage')}
                      type="text"
                      name="onlyfans_percentage"
                      placeholder="Onlyfans Percentage"
                    />
                  </div>
                  <div className="col-md-12">
                    <textarea
                      {...register('message')}
                      name="message"
                      placeholder="Message"
                    ></textarea>
                    <div className="d-flex align-items-center">
                      <button
                        type="submit"
                        className="thm-btn contact-one__form-btn d-flex align-items-center"
                        disabled={isSubmitting}
                      >
                        {isSubmitting && <span className="spinner-border spinner-border-md mr-3" role="status" aria-hidden="true" />}
                        
                        Send Message
                      </button>
                      <ToastContainer />
                    </div>
                  </div>
                </div>
              </form>
              <div className="result"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeContactUs;
