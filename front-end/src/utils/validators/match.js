const match = (value, message, valuesToBeCompared) => {
  const validationMessage = message || "This field doesn't match the criteria";
  let customValidity = true;
  Object.keys(valuesToBeCompared).forEach(key => {
    if (value.toLowerCase() !== valuesToBeCompared[key].toLowerCase()) {
      customValidity = false;
    }
  });

  return {
    valid: customValidity,
    message: customValidity ? '' : validationMessage,
  };
};

export default match;
