import parse from "csv-simple-parser";

const associationsFile = Bun.file("./data/associations_etudiantes.csv");
const associationsText = await associationsFile.text();

const associations = parse(associationsText, { header: true });
console.log("Les associations", associations);

const evenementsFile = Bun.file("./data/evenements_associations.csv");
const evenementsText = await evenementsFile.text();

const evenements = parse(associationsText, { header: true });
console.log("Les évènements", evenements);

Bun.serve({
  routes: {
    // Completer les routes ici
  },
});
