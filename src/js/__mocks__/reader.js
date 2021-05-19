/* eslint-disable no-unused-vars */
/* eslint-disable no-plusplus */
export default function read(data) {
  return new Promise((resolve, reject) => {
    if (typeof data === 'string') {
      setTimeout(() => ((input) => {
        const buffer = new ArrayBuffer(input.length * 2);
        const bufferView = new Uint16Array(buffer);
        for (let i = 0; i < input.length; i++) {
          bufferView[i] = input.charCodeAt(i);
        }
        resolve(buffer);
      })(data), 1000);
    } else {
      reject(new Error('error'));
    }
  });
}
