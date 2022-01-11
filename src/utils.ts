export const getDefaultSpacing = () => scale("1.371528vw");

export const getPosterCellSize = () => ({
  minHeight: scale("33.315972vw"),
  minWidth: scale("23.090278vw"),
});

export function scale(val: string): number {
  if (val.includes("vw")) {
    return (parseInt(val) / 100) * window.innerWidth;
  } else if (val.includes("vh")) {
    return (parseInt(val) / 100) * window.innerHeight;
  } else if (val.includes("em")) {
    const fontSize = parseInt(
      window.getComputedStyle(document.body).getPropertyValue("font-size")
    );
    return parseInt(val) * fontSize;
  }

  return parseInt(val);
}
