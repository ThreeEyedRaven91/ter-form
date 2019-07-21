const titleCol = ({ vertical, leftCol }) => {
  if (vertical) return 12;
  if (leftCol) return leftCol;
  return 3;
};

const controlCol = ({ vertical, rightCol, title }) => {
  if (vertical) return 12;
  if (!title) return 12;
  if (rightCol) return rightCol;
  return 9;
}

const helper = {
  titleCol,
  controlCol,
};

export default helper;