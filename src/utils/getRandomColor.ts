export const getRandomYellowShade = () => {
  const randomBrightness = Math.floor(Math.random() * 50) + 50;
  return `hsl(60, 100%, ${randomBrightness}%)`;
};
