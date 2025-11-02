function getPortalAddress(galacticCoordStr) {
  // Map each part of the :-sep string to a hex number
  const [gX, gY, gZ, gS] = galacticCoordStr.split(":").map((s) => parseInt(s, 16));
  const [pX, pY, pZ, pS] = [(gX + 0x801) % 0x1000, (gY + 0x81) % 0x100, (gZ + 0x801) % 0x1000, gS];
  return `${pS.toString(16).padStart(4, "0")}-${pY.toString(16).padStart(2, "0")}-${pZ.toString(16).padStart(3, "0")}-${pX.toString(16).padStart(3, "0")}`.toUpperCase();
}

console.log(getPortalAddress("0BF1:0083:0DC2:0152"));
