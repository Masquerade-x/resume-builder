const colors = ['#FF5722', '#388E3C', '#FF4081', '#D32F2F', '#FFA000'];

export const randomColorPallete = () => {
  return colors[Math.floor(Math.random() * colors.length)]; // returns a random integer from 0 to 9
};
