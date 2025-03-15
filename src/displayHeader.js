require("colors");

function displayHeader() {
  process.stdout.write("\x1Bc");
  console.log("========================================".magenta);
  console.log("=          Monad Testnet Bot           =".magenta);
  console.log("=     Created by SilviuASY             =".magenta);
  console.log("=    https://t.me/silviu_asy           =".magenta);
  console.log("========================================".magenta);
  console.log();
}

module.exports = displayHeader;
