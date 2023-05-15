const spinner = ['\r|', '\r/', '\r-', '\r\\', '\r|', '\r/', '\r-', '\r\\'];

let delay = 0;
for (const char of spinner) {
  setTimeout(() => {
    process.stdout.write(char);
  }, delay);

  delay += 200;

}
