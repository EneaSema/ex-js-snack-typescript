// 🏆 Snack 1
// Hai ricevuto un dato generico da un'API, ma non sai di che tipo sia…
// Il tuo compito è controllare il tipo del dato e stampare il valore in modo corretto.

// Se è una stringa: stampala in maiuscolo
// Se è un numero: moltiplicalo per due e stampalo
// Se è un booleano: stampa “Sì” o “No” in base al suo valore
// In tutti gli altri casi: stampa “Tipo non supportato”

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
}
// 🎯 BONUS
// Se è null: stampa “Il dato è vuoto”
// Se è un array: stampa la sua lunghezza
// Se è una Promise: attendi che si risolva e stampa il valore del resolve.
else if (valore === null) {
  console.log("Il dato è vuoto");
} else if (Array.isArray(valore)) {
  console.log(valore.length);
} else if (valore instanceof Promise) {
  valore.then((msg) => console.log(msg));
} else {
  console.log("Valore non supportato");
}

// 🏆 Snack 2
// Crea un type alias Dipendente che rappresenta un lavoratore con i seguenti dati:

// nome → stringa
// cognome → stringa
// annoNascita → numero
// sesso → Può essere solo "m" o "f".
// anniDiServizio (array di numeri, es. [2014, 2015, 2017, 2018])

type Dipendente = {
  nome: string;
  cognome: string;
  annoNascita: number;
  sesso: "m" | "f";
  anniDiServizio: number[];
  readonly emailAziendale: string;
  contratto: "indeterminato" | "determinato" | "freelance";
};
