const dynamicProps = [
  {
    variableName: "--faceEyeSize",
    label: "Eye size",
    minValue: 1,
    maxValue: 10,
    stepSize: 1,
    unit: "%"
  }
];

const cssRoot = document.querySelector(':root');
const container = document.querySelector("#controls");
for (const dynamicProp of dynamicProps) {
  const inputElement = document.createElement("input");

  inputElement.addEventListener("input", debounce(
    this,
  (event) => {
    console.log(event.target.valueAsNumber);
    cssRoot.style.setProperty(dynamicProp.variableName, `${event.target.valueAsNumber}${dynamicProp.unit}`);
  }, 200
  ));

  
  const rs = getComputedStyle(cssRoot);
  const variableValueString = rs.getPropertyValue(dynamicProp.variableName);
  const variableValue = Number.parseFloat(variableValueString.substring(0, variableValueString.length - dynamicProp.unit.length));
  
  inputElement.setAttribute("type", "number");
  inputElement.setAttribute("min", dynamicProp.minValue);
  inputElement.setAttribute("max", dynamicProp.maxValue);
  inputElement.setAttribute("step", dynamicProp.stepSize);
  inputElement.setAttribute("value", variableValue);
  
  const label = document.createElement("label");
  label.append(`${dynamicProp.label} (${dynamicProp.unit})`);

  label.appendChild(inputElement);
  container.append(label);
}

function debounce(context, func, delay) {
  let timeout;

  return (...arguments) => {
    if (timeout) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(() => {
      func.apply(context, arguments);
    }, delay);
  };
};