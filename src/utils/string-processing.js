export function addComma(prev) {
  const length = prev.toString().length;
  let final;

  if (length > 3 && typeof prev === 'number') {
    final =
      prev.toString().slice(0, length - 3) +
      ',' +
      prev.toString().slice(length - 3, length);
  } else {
    final = prev;
  }

  return final;
}

export function zeroPreserve(prev) {
  const length = prev.toString().length;
  let final;

  if (length === 1 && typeof length === 'number') {
    final = '0' + prev;
  } else {
    final = prev;
  }

  return final;
}
