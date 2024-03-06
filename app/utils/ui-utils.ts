export function setCssCustomProperty(property: string, value: string) {
  const cssRoot = document.querySelector(":root") as HTMLElement;
  if (cssRoot) {
    cssRoot.style.setProperty(property, value);
  }
}
