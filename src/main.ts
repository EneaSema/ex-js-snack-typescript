let valore: unknown;

if (typeof valore === "string") {
  console.log(valore.toUpperCase());
} else if (typeof valore === "number") {
  const valoreDouble = valore * 2;
  console.log(valoreDouble);
} else if (typeof valore === "boolean") {
  if ((valore = true)) {
    console.log(valore ? "SI" : "NO");
  }
} else {
  console.log("Valore non supportato");
}
