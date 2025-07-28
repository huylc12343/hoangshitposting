import React, { useEffect, useState } from "react";
import Event_HeroSection from "../components/Event_HeroSection";
import BuyTicket from "../components/BuyTicket_HeroSection";
import { useParams } from "react-router-dom";
import TicketService from "../services/TicketService";

export default function MyComponent() {
  const { id } = useParams();

  const [selectedTicket, setSelectedTicket] = useState(null);

  useEffect(() => {
    const fetchTickets = async () => {
      TicketService.getAllTickets()
        .then((data) => {
          setSelectedTicket(data.find((ticket) => ticket.id == id));
        })
        .catch((error) => {
          alert(error.message);
        });
    };

    fetchTickets();
  }, [id]);

  if (!selectedTicket) return <p>Loading...</p>;

  return <BuyTicket ticket={selectedTicket} />;
}
