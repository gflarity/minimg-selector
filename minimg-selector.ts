// Because this is meant to be launched as a worker, include this headers to keep VSCode happy
/// <reference no-default-lib="true" />
/// <reference lib="deno.worker" />

addEventListener("message",(ev) => {
  const key = ev.data.key;
  const file = ev.data.file;

  if (key === "Enter") {
    Deno.mkdirSync("./selected", { recursive: true })
    Deno.copyFileSync(file, "./selected/" + file)
  }

});

