const fs = require("fs");
const path = require("path");
const BASE_PATH = "./public/assets/gallery";
fs.readdir(BASE_PATH, (err, events) => {
  events.forEach((event_name) => {
    const curr_event = path.join(BASE_PATH, event_name);
    const stats = fs.statSync(curr_event);
    if (!stats.isDirectory()) return;
    fs.readdir(curr_event, (err, images) => {
      if (err) {
        console.log(err);
        return;
      }
      for (let i = 1; i <= images.length; i++) {
        const ext = images[i - 1].split(".").pop();
        const old_name = path.join(BASE_PATH, event_name, `${images[i - 1]}`);
        const new_name = path.join(BASE_PATH, event_name, `${i}.${ext}}`);
        fs.rename(old_name, new_name);
      }
    });
  });
});
