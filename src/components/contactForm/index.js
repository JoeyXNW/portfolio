import React, { Component } from "react";
import "./contactForm.css";
import FormField from "../utils/formField";
import { update, generateData } from "../utils/misc";

const initialState = {
  formSuccess: false,
  formData: {
    name: {
      element: "input",
      value: "",
      config: {
        name: "name",
        type: "text",
        placeholder: "Name"
      },
      valid: false,
      validationMessage: ""
    },

    email: {
      element: "input",
      value: "",
      config: {
        name: "email",
        type: "email",
        placeholder: "Email"
      },
      valid: false,
      validationMessage: ""
    },

    subject: {
      element: "input",
      value: "",
      config: {
        name: "subject",
        type: "text",
        placeholder: "Subject"
      },
      valid: false,
      validationMessage: ""
    },

    message: {
      element: "textarea",
      value: "",
      config: {
        name: "message",
        type: "text",
        placeholder: "Message"
      },
      valid: false,
      validationMessage: ""
    }
  }
};

class ContactFrom extends Component {
  state = initialState;

  submitForm = event => {
    event.preventDefault();

    let dataToSubmit = generateData(this.state.formData);
    console.log(dataToSubmit);
  };

  updateForm = element => {
    const newState = update(element, this.state);
    this.setState(newState);
  };

  showFormField = () => {
    const { formData } = this.state;
    return Object.keys(formData).map(key => (
      <FormField
        key={key}
        id={key}
        formData={formData[key]}
        change={this.updateForm}
      />
    ));
  };

  render() {
    return (
      <div className="contact_form">
        <div className="form">
          <form>
            {this.showFormField()}
            <div
              className={`button ${
                !this.state.formSuccess ? "disable_button" : ""
              }`}
              onClick={event => this.submitForm(event)}
            >
              Submit
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default ContactFrom;
