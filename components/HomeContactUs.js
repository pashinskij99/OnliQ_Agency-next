import React, { useReducer } from 'react'
import { PostUserData } from '../services/postUserData.services'

const HomeContactUs = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const {
    name,
    email,
    instagram_link,
    onlyfans_link,
    onlyfans_percentage,
    message
  } = state

  console.log(state)

  const handleSubmit = async (event) => {
    event.preventDefault()

    await PostUserData.postUserData(state)
      .then(res => console.log(res))
  }

  return (
    <section className="contact-one home-contact mb-5" id="contact">
      <img style={{ zIndex: '-1' }} src="/assets/images/shapes/contact-shape-1.png" alt="" className="contact-one__shape-1" />
      <img src="/assets/images/shapes/contact-shape-2.png" alt="" className="contact-one__shape-2" />
      <img src="/assets/images/shapes/contact-shape-3.png" alt="" className="contact-one__shape-3" />
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="contact-one__content">
              <div className="contact-one__infos">
                <div className="block-title">
                  <h3>Join our waiting list!</h3>
                </div>
                <p>
                  Use the contact form and one of our experts will get in touch when sign ups are reopened again (our aim is to go through sign ups every 2 weeks!)

                  You’ll then be contacted via email or DM (check your junk mail too!) for a free 30-minute phone call about how we can help you become the best version of YOU!

                  Looking forward to hear from you!
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="contact-one__form-wrap">

              <form onSubmit={handleSubmit} className="contact-form-validated contact-one__form">
                <div className="row">
                  <div className="col-md-6">
                    <input value={name} onChange={(event) => dispatch({ type: SET_NAME, payload: event.target.value })} type="text" name="name" placeholder="Name" />
                  </div>
                  <div className="col-md-6">
                    <input value={email} onChange={(event) => dispatch({ type: SET_EMAIL, payload: event.target.value })} type="text" name="email" placeholder="Email" />
                  </div>
                  <div className="col-md-6">
                    <input value={instagram_link} onChange={(event) => dispatch({ type: SET_INSTAGRAM, payload: event.target.value })} type="text" name="instagram_link" placeholder="Instagram" />
                  </div>
                  <div className="col-md-6">
                    <input value={onlyfans_link} onChange={(event) => dispatch({ type: SET_ONLYFANS, payload: event.target.value })} type="text" name="onlyfans_link" placeholder="Onlyfans" />
                  </div>
                  <div className="col-md-12">
                    <input value={onlyfans_percentage} onChange={(event) => dispatch({ type: SET_ONLYFANS_PERCENTAGE, payload: event.target.value })} type="text" name="onlyfans_percentage" placeholder="Onlyfans Percentage" />
                  </div>
                  <div className="col-md-12">
                    <textarea 
                      value={message} 
                      onChange={(event) => dispatch({ type: SET_MESSAGE, payload: event.target.value })} name="message" placeholder="Message"></textarea>
                    <button type="submit"
                      className="thm-btn contact-one__form-btn">Send Message
                    </button>
                  </div>

                </div>
              </form>
              <div className="result"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const initialState = {
  name: '',
  email: '',
  instagram_link: '',
  onlyfans_link: '',
  onlyfans_percentage: '',
  message: ''
}

const SET_NAME = 'SET_NAME'
const SET_EMAIL = 'SET_EMAIL'
const SET_INSTAGRAM = 'SET_INSTAGRAM'
const SET_ONLYFANS = 'SET_ONLYFANS'
const SET_ONLYFANS_PERCENTAGE = 'SET_ONLYFANS_PERCENTAGE'
const SET_MESSAGE = 'SET_MESSAGE'

const reducer = (state, action) => {
  switch (action.type) {
    case SET_NAME:
      return { ...state, name: action.payload }
      break

    case SET_EMAIL:
      return { ...state, email: action.payload }
      break

    case SET_INSTAGRAM:
      return { ...state, instagram_link: action.payload }
      break

    case SET_ONLYFANS:
      return { ...state, onlyfans_link: action.payload }
      break

    case SET_ONLYFANS_PERCENTAGE:
      return { ...state, onlyfans_percentage: action.payload }
      break
    case SET_MESSAGE:
      return { ...state, message: action.payload }
      break
    default:
      return state
  }
}



export default HomeContactUs