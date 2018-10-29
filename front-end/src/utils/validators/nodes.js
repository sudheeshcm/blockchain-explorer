import { VALIDATORS } from '../validations';

const { required } = VALIDATORS;

export default nodes => {
  let customValidity = true;

  const customErrors = nodes.map(node => {
    const id = required(node.id);
    const client = required(node.client);

    if (customValidity) customValidity = id.valid && client.valid;

    return {
      valid: id.valid && client.valid,
      id,
      client,
    };
  });

  return { valid: customValidity, customErrors };
};
