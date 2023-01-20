// P gets its own function because it is the same for major and minor
const P = ({ root, third, fifth, isMajor }) => {
  third = isMajor ? third - 1 : third + 1;
  return {
    root: root,
    third: third,
    fifth: fifth,
    isMajor: !isMajor,
  };
};

const transformation = (triad, transformations) => {
  console.log(triad);
  console.log(transformations);
  let newTriad = triad;
  for (let i in transformations) {
    const transformation = transformations[i];
    const { root, third, fifth, isMajor } = newTriad;
    if (transformation === "P") {
      newTriad = P(newTriad);
    } else if (isMajor) {
      if (transformation === "L") {
        newTriad = {
          root: third,
          third: fifth,
          fifth: root - 1,
          isMajor: false,
        };
      } else if (transformation === "R") {
        newTriad = {
          root: fifth + 2,
          third: root,
          fifth: third,
          isMajor: false,
        };
      }
    } else if (!isMajor) {
      if (transformation === "L") {
        newTriad = {
          root: fifth + 1,
          third: root,
          fifth: third,
          isMajor: true,
        };
      } else if (transformation === "R") {
        newTriad = {
          root: third,
          third: fifth,
          fifth: root - 2,
          isMajor: true,
        };
      }
    }
  }
  return newTriad;
};

//TODO write function that will make a single button for each unique motion

export default transformation;
