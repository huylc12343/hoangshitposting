export function imageToBase64(file, maxWidth = 800, quality = 0.7) {
  return new Promise((resolve, reject) => {
    if (!file || !file.type.startsWith("image/")) {
      return reject(new Error("The selected file is not a valid image."));
    }

    const reader = new FileReader();

    reader.onload = (event) => {
      const img = new Image();
      img.src = event.target.result;

      img.onload = () => {
        const canvas = document.createElement("canvas");

        const scaleFactor = Math.min(1, maxWidth / img.width);
        canvas.width = img.width * scaleFactor;
        canvas.height = img.height * scaleFactor;

        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

        const base64 = canvas.toDataURL("image/jpeg", quality);
        resolve(base64);
      };

      img.onerror = () => reject(new Error("Error loading image."));
    };

    reader.onerror = () => reject(new Error("Error reading file."));
    reader.readAsDataURL(file);
  });
}
