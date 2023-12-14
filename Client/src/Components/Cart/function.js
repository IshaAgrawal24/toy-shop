export const shippingWidthFunc = (subtotal) => {
  const value = 1000 - subtotal;
  const ranges = [
    { range: [1, 200], width: "90%" },
    {
      range: [201, 300],
      width: "70%",
    },
    {
      range: [301, 400],
      width: "60%",
    },
    {
      range: [401, 500],
      width: "50%",
    },
    {
      range: [501, 600],
      width: "40%",
    },
    {
      range: [601, 700],
      width: "30%",
    },
    {
      range: [701, 800],
      width: "20%",
    },
    {
      range: [801, 900],
      width: "10%",
    },
    {
      range: [901, 999],
      width: "5%",
    },
  ];
  let width = "";
  for (const item of ranges) {
    const [start, end] = item.range;
    if (value >= start && value <= end) {
      width = item.width;
      break;
    } else if (value < 0) {
      width = "100%";
    }
  }
  return width;
};
