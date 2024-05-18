/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
    // Deletes ALL existing entries
    await knex("herramienta_ia").del();
    await knex("herramienta_ia").insert([
      {
        nombreherramienta: "PalM2",
        propositoia: "General Purpose",
        subpropositoia: "Development - Technical Documentation",
        ecosistema: "Foundation Models",
        tipocontenido: "Text",
        descripcion: `PaLM 2 is Google's upgraded AI language model from PaLM 1, improving in reasoning, coding, and translation. Available in different sizes, it's fine-tuned with specific domain data. Although details on training data are limited, it includes various sources. PaLM 2 integrates into Google Bard and Gmail, and is accessible to developers via APIs for use in various products and services.`,
        licencia: "yes",
        imagen: "logo1",
        linkherramienta: "https://ai.google/discover/palm2/",
      },
    ]);
  };