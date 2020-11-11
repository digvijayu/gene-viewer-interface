const COLOR_SET = [
  "#214559",
  "#00022e",
  "#112222",
  "#391285",
  "#0000aa",
  "#000133",
  "#033500",
  "#696006",
  "#b4262a",
  "#c14a09",
  "#7f4330",
  "#c65102",
  "#ca6636",
  "#d5b60a",
  "#900020",
  "#420303",
  "#820000",
  "#4a0100",
  "#980036",
  "#3a181a",
  "#9c004a",
  "#cb416b",
  "#490648",
  "#76424e",
  "#35063e",
  "#80444c",
  "#280137",
  "#4d4b3a",
];

export const getRandomColor = (index: number): string => {
  const randomIndex = (index * 10) % (COLOR_SET.length - 1);
  return COLOR_SET[randomIndex];
};
