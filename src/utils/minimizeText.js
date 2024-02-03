const minimizeText = (text, expectedLength) => {
  if (text.length > expectedLength) {
    return text.slice(0, expectedLength) + "...";
  } else {
    return text;
  }
};

export default minimizeText;
