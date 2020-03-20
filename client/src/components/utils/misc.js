export const validate = element => {
  let valid = element.value.trim() !== "";
  let message = `${!valid ? "This field is required" : ""}`;

  if (valid && element.config.name === "email") {
    valid = /\S+@\S+\.\S+/.test(element.value);
    message = `${!valid ? "Must be a valid email" : ""}`;
  }

  return [valid, message];
};

export const isFormValid = formData => {
  for (let key in formData) {
    if (!formData[key].valid) return false;
  }
  return true;
};

export const update = (element, state) => {
  const newState = { ...state };
  const newFormData = newState.formData;
  const newElement = newFormData[element.id];
  newElement.value = element.event.target.value;

  if (element.blur) {
    let validData = validate(newElement);
    newElement.valid = validData[0];
    newElement.validationMessage = validData[1];

    newState.formSuccess = isFormValid(newFormData);
  }

  return newState;
};

export const generateData = formData => {
  let dataToSubmit = {};

  for (let key in formData) {
    dataToSubmit[key] = formData[key].value;
  }

  return dataToSubmit;
};
