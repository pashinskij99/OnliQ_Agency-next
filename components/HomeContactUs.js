import React, { useReducer } from "react";
import { PostUserData } from "../services/postUserData.services";
import {ToastContainer, toast} from 'react-toastify';

const email_reg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

const HomeContactUs = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const {
    name,
    email,
    instagram_link,
    onlyfans_link,
    onlyfans_percentage,
    message,
    error_message,
    loading
  } = state;

  const handleSubmit = async (event) => {
    event.preventDefault();

    if(!email_reg.test(email)) dispatch({type: SET_ERROR_EMAIL, payload: 'Incorrect email!'})
    else dispatch({type: SET_ERROR_EMAIL, payload: ''})

    if(name.length < 3) dispatch({type: SET_ERROR_NAME, payload: 'The name must be at least 3 characters long!'})
    else dispatch({type: SET_ERROR_NAME, payload: ''})

    if(email_reg.test(email) && name.length >= 3) {
      dispatch({type: SET_LOADING, payload: true})
      await PostUserData.postUserData(state).then((res) => {
        if(res.data.status === 200) {
          toast.success("Your data has been successfully sent!", {theme: 'light', style: {lineHeight: '1.5rem', top: '10vh', fontSize: '14px'}});
          dispatch({type: SET_INITIAL})
        }

      })
    }
  };

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
                onSubmit={handleSubmit}
                className="contact-form-validated contact-one__form"
              >
                <div style={{rowGap: '15px'}} className="row">
                  <div className="col-md-6">
                    <input
                      value={name}
                      className=""
                      onChange={(event) =>
                        dispatch({
                          type: SET_NAME,
                          payload: event.target.value,
                        })
                      }
                      type="text"
                      name="name"
                      placeholder="Name*"
                    />
                    
                    {
                      error_message.name
                        ? <span 
                            style={{fontSize: '12px', lineHeight: '1rem', transform: 'translateY(-40%)'}} 
                            className="text-danger position-absolute bottom-0"
                          >{error_message.name}</span>
                        : null
                    }
                    
                  </div>
                  <div className="col-md-6">
                    <input
                      value={email}
                      onChange={(event) =>
                        dispatch({
                          type: SET_EMAIL,
                          payload: event.target.value,
                        })
                      }
                      className=""
                      type="text"
                      name="email"
                      placeholder="Email*"
                    />
                    {
                      error_message.email
                        ? <span 
                            style={{fontSize: '12px', lineHeight: '1rem', transform: 'translateY(-40%)'}} 
                            className="text-danger position-absolute"
                          >{error_message.email}</span>
                        : null
                    }
                  </div>
                  <div className="col-md-6">
                    <input
                      value={instagram_link}
                      onChange={(event) =>
                        dispatch({
                          type: SET_INSTAGRAM,
                          payload: event.target.value,
                        })
                      }
                      type="text"
                      name="instagram_link"
                      placeholder="Instagram link"
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      value={onlyfans_link}
                      onChange={(event) =>
                        dispatch({
                          type: SET_ONLYFANS,
                          payload: event.target.value,
                        })
                      }
                      type="text"
                      name="onlyfans_link"
                      placeholder="Onlyfans link"
                    />
                  </div>
                  <div className="col-md-12">
                    <input
                      value={onlyfans_percentage}
                      onChange={(event) =>
                        dispatch({
                          type: SET_ONLYFANS_PERCENTAGE,
                          payload: event.target.value,
                        })
                      }
                      type="text"
                      name="onlyfans_percentage"
                      placeholder="Onlyfans Percentage"
                    />
                  </div>
                  <div className="col-md-12">
                    <textarea
                      value={message}
                      onChange={(event) =>
                        dispatch({
                          type: SET_MESSAGE,
                          payload: event.target.value,
                        })
                      }
                      name="message"
                      placeholder="Message"
                    ></textarea>
                    <div className="d-flex align-items-center">
                      <button
                        type="submit"
                        className="thm-btn contact-one__form-btn d-flex align-items-center"
                        disabled={loading}
                      >
                        {loading && <span class="spinner-border spinner-border-md mr-3" role="status" aria-hidden="true" />}
                        
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

const initialState = {
  name: "",
  email: "",
  instagram_link: "",
  onlyfans_link: "",
  onlyfans_percentage: "",
  message: "",
  error_message: {
    name: '',
    email: '',
  },
  loading: false,
};

const SET_NAME = "SET_NAME";
const SET_EMAIL = "SET_EMAIL";
const SET_INSTAGRAM = "SET_INSTAGRAM";
const SET_ONLYFANS = "SET_ONLYFANS";
const SET_ONLYFANS_PERCENTAGE = "SET_ONLYFANS_PERCENTAGE";
const SET_MESSAGE = "SET_MESSAGE";
const SET_LOADING = "SET_LOADING";
const SET_ERROR_NAME = "SET_ERROR_NAME";
const SET_ERROR_EMAIL = "SET_ERROR_EMAIL";
const SET_INITIAL = "SET_INITIAL";

const reducer = (state, action) => {
  switch (action.type) {
    case SET_NAME:
      return { ...state, name: action.payload };
      break;

    case SET_EMAIL:
      return { ...state, email: action.payload };
      break;

    case SET_INSTAGRAM:
      return { ...state, instagram_link: action.payload };
      break;

    case SET_ONLYFANS:
      return { ...state, onlyfans_link: action.payload };
      break;

    case SET_ONLYFANS_PERCENTAGE:
      return { ...state, onlyfans_percentage: action.payload };
      break;
    case SET_MESSAGE:
      return { ...state, message: action.payload };
      break;

    case SET_ERROR_NAME:
      return { ...state, error_message: {...state.error_message, name: action.payload} };
      break;

    case SET_ERROR_EMAIL:
      return { ...state, error_message: {...state.error_message, email: action.payload} };
      break;

    case SET_LOADING:
      return {...state, loading: action.payload}
      break

    case SET_INITIAL: 
      return {...initialState}
      break
    
    default:
      return state;
  }
};

export default HomeContactUs;
