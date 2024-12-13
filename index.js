// index.js

function formatDate(date, format) {
    // Ensure the input is a valid Date object
    if (!(date instanceof Date)) {
      throw new Error("The provided argument is not a valid Date object.");
    }
  
    // Options for date formatting
    const options = {
      'YYYY': date.getFullYear(),
      'MM': String(date.getMonth() + 1).padStart(2, '0'),
      'DD': String(date.getDate()).padStart(2, '0'),
      'HH': String(date.getHours()).padStart(2, '0'),
      'mm': String(date.getMinutes()).padStart(2, '0'),
      'ss': String(date.getSeconds()).padStart(2, '0')
    };
  
    // Replace the format placeholders with actual values
    Object.keys(options).forEach((key) => {
      format = format.replace(key, options[key]);
    });
  
    return format;
  }
  
  module.exports = formatDate;
  