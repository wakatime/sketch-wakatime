var Buffer = require('buffer').Buffer;

function handleBuffer(buffer, encoding) {
  if (encoding === 'buffer') {
    return buffer;
  }
  if (encoding === 'NSData') {
    return buffer.toNSData();
  }
  return buffer.toString(encoding);
}

export function handleData(data, encoding) {
  var buffer = Buffer.from(data);

  return handleBuffer(buffer, encoding);
}
