import { initBotId } from 'botid/client/core';

// Protect the contact form endpoint against automated submissions.
initBotId({
  protect: [{ path: '/api/contact', method: 'POST' }],
});
