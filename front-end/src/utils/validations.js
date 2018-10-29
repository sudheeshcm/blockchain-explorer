const VALIDATIONS = {
  alphaNumericSpaceBrackets: {
    regex: '^[\\w\\-\\(\\)\\s]*$',
    message: 'Only alpha numeric characters with space and brackets allowed',
  },
  alphaNumericArabicPunctuation: {
    regex: '[أ-يa-zA-Z0-9\\_,\\?\\-\\[\\]\\{\\}\\(\\)\\!\\;\\:"\'\\s.]+',
  },
  alphaNumericArabicSpaceBrackets: {
    regex:
      '^[\\u0600-\\u065F\\u066A-\\u06EF\\u06FA-\\u06FFa-zA-Z0-9-_\\s\\(\\)\\[\\]]*$',
    message: 'Only alpha numeric characters with space allowed',
  },
  alphaNumericArabicSpace: {
    regex:
      '^[\\u0600-\\u065F\\u066A-\\u06EF\\u06FA-\\u06FFa-zA-Z0-9-_\\s\\(\\)\\[\\]]*$',
    message: 'Only alpha numeric characters with space allowed',
  },
  alphaNumericPunctuation: {
    regex: '[a-zA-Z0-9\\_,\\?\\-\\[\\]\\{\\}\\(\\)\\!\\;\\:"\'\\s.]+',
    message: 'Only alpha-numeric and punctuation characters allowed',
  },
  alphaNumericPunctuationHTML: {
    regex: '[a-zA-Z0-9\\_,\\?\\-\\[\\]\\{\\}\\(\\)\\!\\;\\:"\'\\s.]+',
    message: 'Only alpha-numeric and punctuation characters allowed',
  },
  alphaNumericPunctuationWYSIWYG: {
    regex:
      '[a-zA-Z0-9\\=\\/\\<\\>\\&\\_,\\?\\-\\[\\]\\{\\}\\(\\)\\!\\;\\:"\'\\s.]+',
    message: 'Only alpha-numeric and punctuation characters allowed',
  },
  email: {
    regex:
      '(([^<>()\\[\\]\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$',
    message: 'Please enter a valid email',
  },
  required: {
    regex: '([^\\s])',
    message: 'This is a required field',
  },
  date: {
    regex:
      '(^(((0[1-9]|[12]\\d|3[01])\\/(0[13578]|1[02])\\/((19|[2-9]\\d)\\d{2}))|((0[1-9]|[12]\\d|30)\\/(0[13456789]|1[012])\\/((19|[2-9]\\d)\\d{2}))|((0[1-9]|1\\d|2[0-8])\\/02\\/((19|[2-9]\\d)\\d{2}))|(29\\/02\\/((1[6-9]|[2-9]\\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))))$)',
    message: 'Please enter a valid date',
  },
};

/* Proxy function which converts validation definitions to
  validator functions
*/
export const VALIDATORS = new Proxy(VALIDATIONS, {
  get: (target, name) => (value, message) => ({
    valid:
      value || name === 'required'
        ? new RegExp(target[name].regex).test(value || '')
        : true,
    get message() {
      return this.valid ? '' : message || target[name].message;
    },
  }),
});

export default VALIDATIONS;
