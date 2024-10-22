export function addComma(prev) {
  const length = prev.toString().length;
  let final;

  if (length > 3 && typeof prev === 'number') {
    final =
      prev.toString().slice(0, length - 3) +
      ',' +
      prev.toString().slice(length - 3, length);

    // console.log('处理过：', final);
  } else {
    final = prev;
  }

  return final;
}
