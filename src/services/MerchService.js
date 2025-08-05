export const API_BASE_URL = "https://api.gapgap.site";

export default class MerchService {
  static addToCart(product) {
    var cart = localStorage.getItem("cart");
    if (cart) {
      cart = JSON.parse(cart);
      const existingData = cart.find((c) => {
        return (
          c.id == product.id &&
          c.size == product.size &&
          c.color == product.color &&
          c.type == product.type
        );
      });
      if (existingData) {
        existingData.amount += product.amount;
      } else {
        cart.push(product);
      }
      localStorage.setItem("cart", JSON.stringify(cart));
    } else {
      cart = [product];
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }

  static removeFromCart(productId) {
    var cart = localStorage.getItem("cart");
    if (cart) {
      cart = JSON.parse(cart);
      cart = cart.filter((item) => item.id !== productId);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }

  static increaseAmount(productId) {
    var cart = localStorage.getItem("cart");
    if (cart) {
      cart = JSON.parse(cart);
      console.log(cart.find((item) => item.id === productId));
      cart.find((item) => item.id === productId).amount++;
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }

  static decreaseAmount(productId) {
    var cart = localStorage.getItem("cart");
    if (cart) {
      cart = JSON.parse(cart);
      cart.find((item) => item.id === productId).amount--;
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }

  static getAllCart() {
    var cart = localStorage.getItem("cart");
    if (cart) {
      return JSON.parse(cart);
    }
    return [];
  }

  static async buyMerch(merchData) {
    try {
      const response = await fetch(`${API_BASE_URL}/v1/merch/buy`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: merchData.email,
          fullName: merchData.lastName + " " + merchData.firstName,
          phoneNumber: merchData.phone,
          address: merchData.address,
          shippingFee: merchData.shippingFee,
          proof: merchData.proof,
          merches: merchData.merches.map((m) => {
            return {
              id: m.id,
              name: `${m.name} ${m.color ? `Màu ${m.color}` : ""}  ${m.type ? `Loại ${m.type}` : ""} ${ m.size ? `Size ${m.size}` : ""}`,
              price: m.price,
              metadata: {
                color: m.color,
                size: m.size,
                type: m.type,
              },
              amount: m.amount,
            };
          }),
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
  static clearCart() {
  localStorage.setItem("cart", JSON.stringify([]));
}
}
