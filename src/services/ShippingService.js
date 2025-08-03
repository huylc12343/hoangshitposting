export default class ShippingService {
  static async calculateShippingFee(address, totalPrice) {
    try {
      const response = await fetch(
        "https://api.gapgap.site/v1/shipping/calculate",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            receiverAddress: address,
            productPrice: totalPrice,
          }),
        }
      );

      const data = await response.json();
      return data.data;
    } catch (error) {}
  }
}
