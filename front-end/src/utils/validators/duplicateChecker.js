const duplicateChecker = (operator, fieldToCompare) => (
  value,
  message,
  arrayToCompare = [],
) => {
  const validationMessage = message || "This field doesn't match the criteria";
  let customValidity = false;

  switch (operator) {
    case '!==':
      customValidity =
        arrayToCompare.findIndex(
          item =>
            item[fieldToCompare].toString().toLowerCase() ===
            value.toString().toLowerCase(),
        ) < 0;
      break;
    default:
  }

  return {
    valid: customValidity,
    message: customValidity ? '' : validationMessage,
  };
};

export default duplicateChecker;
