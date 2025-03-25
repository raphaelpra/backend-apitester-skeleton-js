import parse from "csv-simple-parser";

const associationsFile = Bun.file("./data/associations_etudiantes.csv");
const associationsText = await associationsFile.text();

const associations = parse(associationsText, { header: true });
console.log("Les associations", associations);

const evenementsFile = Bun.file("./data/evenements_associations.csv");
const evenementsText = await evenementsFile.text();

const evenements = parse(associationsText, { header: true });
console.log("Les évènements", evenements);

// On rajoute les headers CORS pour des raisons de sécurité
const addCors = (res: any) => {
  res.headers.set("Access-Control-Allow-Origin", "*");
  res.headers.set(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  return res;
};

const server = Bun.serve({
  port: 5001,
  routes: {
    "/api/associations": () => {
      const res = Response.json(/* Le code a completer ici  */);
      return addCors(res);
    },
    // Rajouter les routes manquantes
  },
});

console.log(`The server is started on port: ${server.port}`);
