// Aspire TypeScript AppHost
// Local composition root for Patchline.

import { createBuilder } from "./.aspire/modules/aspire.mjs";

const builder = await createBuilder();

// Add local runtime resources here.
// First planned resources:
// - Postgres
// - n8n

const postgres = await builder.addPostgres("postgres");
await postgres.withPgAdmin();
await postgres.withDataVolume({ isReadOnly: false });

const postgresdb = await postgres.addDatabase("postgresdb");

await builder.build().run();
