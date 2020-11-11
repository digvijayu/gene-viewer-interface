const COLOR_SET = [
  "#214559",
  "#c65102",
  "#391285",
  "#cb416b",
  "#0000aa",
  "#9c004a",
  "#000133",
  "#033500",
  "#b4262a",
  "#00022e",
  "#c14a09",
  "#7f4330",
  "#ca6636",
  "#d5b60a",
  "#900020",
  "#420303",
  "#112222",
  "#820000",
  "#4a0100",
  "#980036",
  "#3a181a",
  "#696006",
  "#490648",
  "#76424e",
  "#35063e",
  "#80444c",
  "#280137",
  "#4d4b3a",
];

export const getRandomColor = (index: number): string => {
  const randomIndex = index % (COLOR_SET.length - 1);
  return COLOR_SET[randomIndex];
};
