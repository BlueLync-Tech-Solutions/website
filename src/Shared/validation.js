// Shared form validation helpers.
export const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

// Returns an error message for an invalid email, or '' when it is valid.
export const getEmailError = (value) => {
  const v = value.trim();
  if (!v) return 'Email is required.';
  if (!EMAIL_PATTERN.test(v)) return 'Enter a valid email address.';
  return '';
};
