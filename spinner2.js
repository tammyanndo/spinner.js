let spinner = ['|', '/', '-', '\\', '|', '/', '-', '\\' ]
let counter = 0

for (const x of spinner) {
  counter += 200
  setTimeout(() => {
  process.stdout.write(`\r${x}    `);
  }, counter)
}