const server = Bun.serve({
  hostname: "::",
  port: process.env.PORT ?? 3000,
  fetch(request: Request) {
    const log = {
      referrer: request.referrer || "noreferrer",
      method: request.method,
      url: new URL(request.url).pathname,
    };
    console.info([...Object.values(log), "200"]);
    if (log.url === "/health") return new Response("OK");
    return new Response("Hello from Bun!");
  },
});

console.log(`Listening on http://localhost:${server.port}`);
