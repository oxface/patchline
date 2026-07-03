// Aspire TypeScript AppHost
// Local composition root for Patchline.

import { createBuilder } from "./.aspire/modules/aspire.mjs";

const builder = await createBuilder();

// Add local runtime resources here.
// First planned resources:
// - Postgres
// - n8n

await builder.build().run();

