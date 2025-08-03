export const API_BASE_URL = "https://api.gapgap.site";

export default class GalleryService {
  static async sendGalleryInvitation(email, fullName) {
    try {
      const response = await fetch(`${API_BASE_URL}/v1/gallery/invite`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          fullName: fullName,
        }),
      });

      if (!response.ok) {
        const text = await response.json();
        throw new Error(text.meta.message);
      }

      const data = await response.json();
      return data.data;
    } catch (error) {
      throw error;
    }
  }
}
