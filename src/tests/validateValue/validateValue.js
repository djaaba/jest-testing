const validateValue = (value) => {
  return value < 0 || value > 100 ? false : true;
};

module.exports = validateValue;
