export function imageToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => {
      resolve(reader.result.split(",")[1]); // Base64 without prefix
    };

    reader.onerror = (error) => reject(error);

    reader.readAsDataURL(file);
  });
}
