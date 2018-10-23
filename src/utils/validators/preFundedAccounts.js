import { VALIDATORS } from '../validations';

const { required } = VALIDATORS;

export default accounts => {
  let customValidity = true;

  const customErrors = accounts.map(account => {
    const id = required(account.id);
    const amountToUse = required(account.amountToUse);

    if (customValidity) customValidity = id.valid && amountToUse.valid;

    return {
      valid: id.valid && amountToUse.valid,
      id,
      amountToUse,
    };
  });

  return { valid: customValidity, customErrors };
};
