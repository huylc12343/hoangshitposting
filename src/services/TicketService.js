export const API_BASE_URL = "http://localhost:8080";
// export const API_BASE_URL = "https://api.gapgap.site";

export default class TicketService {
  static async getAllTickets() {
    try {
      const response = await fetch(`${API_BASE_URL}/v1/tickets/all`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
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

  static async holdTicket(ticketId, amount) {
    try {
      const response = await fetch(`${API_BASE_URL}/v1/tickets/hold`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          quantity: amount,
          ticketId: ticketId,
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

  static async makePayment(holdId, name, email, phone, proof) {
    try {
      const response = await fetch(`${API_BASE_URL}/v1/tickets/purchase`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          holdId: holdId,
          name: name,
          email: email,
          phoneNumber: phone,
          proof: proof,
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

  static async updateHoldInfo(holdId, newAmount) {
    try {
      const response = await fetch(
        `${API_BASE_URL}/v1/tickets/hold/${holdId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            amount: newAmount,
          }),
        }
      );

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
