import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm("xvoewlvz");

  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }

  return (
    <div className="resume-section container">
      <div className="row justify-content-center">
        <div className="col-12 col-sm-10 col-md-8 col-lg-6">
          <h1 className="mb-3">Contact Form</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text" 
                name="name"
                className="form-control"
              />
              <ValidationError 
                prefix="Name" 
                field="name"
                errors={state.errors}
                className="invalid-feedback"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                type="email" 
                name="email"
                className="form-control"
              />
              <ValidationError 
                prefix="Email" 
                field="email"
                errors={state.errors}
                className="invalid-feedback"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                className="form-control"
              />
              <ValidationError 
                prefix="Message" 
                field="message"
                errors={state.errors}
                className="invalid-feedback"
              />
            </div>
            
            <button type="submit" disabled={state.submitting} className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;