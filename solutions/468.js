const neither = "Neither";
const IPv4 = "IPv4";
const IPv6 = "IPv6";
const isHex = /^[a-f0-9]{1,4}$/i;
const isLeadingZero = /^0[0-9].*$/;
const isInteger = /^[0-9]+$/;

const validIPAddress = (ip) => {
    if (ip.includes(".")) {
      return validateIPv4(ip);
    }

    if (ip.includes(":")) {
      return validateIPv6(ip);
    }

    return neither;
};

const validateIPv6 = ip => {
  const chunks = ip.split(":");

  if (chunks.length !== 8) return neither;

  const verdict = chunks.every((chunk) => {
    if (isHex.test(chunk)) {
      const num = parseInt(chunk, 16);
      return num >= 0 && num <= 65535;
    }

    return false;
  });

  return verdict ? IPv6 : neither;
};

const validateIPv4 = (ip) => {
  const chunks = ip.split(".");

  if (chunks.length !== 4) return neither;

  const verdict = chunks.every((chunk) => {
      if (!isLeadingZero.test(chunk) && isInteger.test(chunk)) {
        const num = parseInt(chunk, 10);
        return num >= 0 && num <= 255;
      }

      return false;
  });

  retur
