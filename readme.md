# Progress bar with node

`npm install progress`

```
const bar = new ProgressBar(":bar :percent :eta", {
  total: 20,
  clear: true,
  complete: "/",
  incomplete: "_",
});
const log = console.log;
const time = setInterval(() => {
  bar.tick();
  // log("LOADING...");
  if (bar.complete) {
    clearInterval(time);
    log(chalk.green(text()));
  }
}, 200);
```
