function lastDigit(a, b, c) {
  if (b % 10 == a || a % 10 == b) {
    return true;
  }
  return false;
}
