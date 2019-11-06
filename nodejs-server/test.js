var child = require("child_process").spawn("java", [
  "-jar",
  "cf-client-1.0.0-M3.jar",
  "DISCOVER",
  "coap://[fd00::302:304:506:708]",
]);

child.stdout.on("data", function(data) {
  console.log(data.toString());
});

child.stderr.on("data", function(data) {
  console.log(data.toString());
});
