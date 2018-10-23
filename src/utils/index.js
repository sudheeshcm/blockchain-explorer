export const isValidByRegex = (val, pattern) => {
  const regex = new RegExp(`^${pattern}$`);
  return val === '' || val.match(regex) !== null;
};

const reduceErrorState = (errors, field) => ({
  ...errors,
  [field]: { valid: true, message: '' },
});

export const getInitialErrorState = model =>
  Object.keys(model).reduce(reduceErrorState, {});

const generateRelatedData = (formData, fields = []) =>
  fields.reduce((data, field) => {
    // eslint-disable-next-line
    data[field] = formData[field];
    return data;
  }, {});

const getDataBasedOnModel = (data, validation) => {
  if (validation.relatedFields) {
    return generateRelatedData(data, validation.relatedFields);
  }
  if (validation.getStateVarFunc) {
    return typeof validation.getStateVarFunc === 'function'
      ? validation.getStateVarFunc()
      : null;
  }
  return null;
};

const validateField = (data, field) => (status, validation) => {
  if (status.valid) {
    return typeof validation === 'function'
      ? validation(data[field])
      : validation.validator(
          data[field],
          validation.message,
          getDataBasedOnModel(data, validation),
        );
  }
  return status;
};

const validateData = data => (errors, [field, validations]) => {
  const errorObject = validations.reduce(validateField(data, field), {
    valid: true,
  });

  return {
    ...errors,
    valid: errors.valid ? errorObject.valid : false,
    [field]: errorObject,
  };
};

/* Function validates fields defined in models based on provided data
   and return an object field names as keys and validation status object as values.
   validation status object will have `valid` boolean attribute and `message`
   attribute with error message
*/
export const validateForm = (data, model) =>
  Object.entries(model).reduce(validateData(data), { valid: true });
