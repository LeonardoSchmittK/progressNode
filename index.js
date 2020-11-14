const ProgressBar = require("progress");
const chalk = require("chalk");

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

const text = () =>
  `orem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget rhoncus orci. Nullam sem lectus, fringilla utrum se`;

