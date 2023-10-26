export const submitForm = (formData) => {
  return {
    type: "SUBMIT",
    payload: formData,
  };
};

export const resetForm = () => {
  return {
    type: "RESET",
  };
};

export const getFormData = () => ({
  type: "GET_FORM_DATA",
});

export const postData = (formData) => ({
  type: "POST_DATA",
  payload: formData,
});
