const express = require("express");
const util = require("util");
const exec = util.promisify(require("child_process").exec);

const app = express();

app.get("/turn_on", async (req, res, next) => {
  try {
    const { stdout, stderr } = await exec(
      "java -jar cf-client-1.0.0-M3.jar DISCOVER coap://[fd00::302:304:506:708]/turn/on",
    );
    console.log("stdout:", stdout);
    console.error("stderr:", stderr);
    res.send(stdout);
  } catch (e) {
    next(e);
  }
});

app.get("/turn_off", async (req, res, next) => {
  try {
    const { stdout, stderr } = await exec(
      "java -jar cf-client-1.0.0-M3.jar DISCOVER coap://[fd00::302:304:506:708]/turn/off",
    );
    console.log("stdout:", stdout);
    console.error("stderr:", stderr);
    res.send(stdout);
  } catch (e) {
    next(e);
  }
});

app.listen("8080", () => console.log(`listening on port :8080!`));
