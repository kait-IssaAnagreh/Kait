export const isValidPassword = (password: string) => {
  // numbers and letters
  let checkChars = !( (/[^A-Za-z0-9]+/).test(password) )

  return password.length >= 6;
};