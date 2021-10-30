export const MaxLengthCreator = (maxLength) => {
  return (value) => {
    if (value && value.length > maxLength) return "Max length is " + maxLength;
    return undefined;
  }
}

export const requiered = (value) => {
  if (value) return undefined;
  return "This field is required";
}