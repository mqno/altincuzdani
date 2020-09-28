const Validator = require("validator");
const isEmpty = require("is-empty");
module.exports = function validateRegisterInput(data) {
  let errors = {};
// Convert empty fields to an empty string so we can use validator functions
  data.name = !isEmpty(data.userName) ? data.name : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";
// Name checks
  if (Validator.isEmpty(data.userName)) {
    errors.name = "Kullanici Adi bos birakilamaz";
  }
// Email checks
  if (Validator.isEmpty(data.email)) {
    errors.email = "Email bos birakilamaz";
  } else if (!Validator.isEmail(data.email)) {
    errors.email = "Email Yanlis yada gecersiz";
  }
// Password checks
  if (Validator.isEmpty(data.password)) {
    errors.password = "Parola bos birakilamaz";
  }
if (Validator.isEmpty(data.password2)) {
    errors.password2 = "Parola tekrari bos birakilamaz";
  }
if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "Parola en az 6 karakter olamali";
  }
if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = "Parola ile Parola tekrari Ayni olmali";
  }
return {
    errors,
    isValid: isEmpty(errors)
  };
};