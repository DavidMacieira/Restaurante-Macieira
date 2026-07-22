function toLocalISODate(date) {
  const timezoneOffset = date.getTimezoneOffset() * 60_000;
  const localDate = new Date(date.getTime() - timezoneOffset);

  return localDate.toISOString().split("T")[0];
}

function dateFromToday(daysToAdd) {
  const date = new Date();

  date.setDate(date.getDate() + daysToAdd);

  return toLocalISODate(date);
}

const adminReservations = [
  {
    id: 1,
    name: "João Ferreira",
    email: "joao.ferreira@email.pt",
    phone: "+351 912 345 678",
    date: dateFromToday(0),
    time: "20:00",
    people: 2,
    status: "Confirmada",
    observations: "Mesa junto à janela, se possível.",
  },
  {
    id: 2,
    name: "Marta Silva",
    email: "marta.silva@email.pt",
    phone: "+351 934 567 890",
    date: dateFromToday(0),
    time: "20:30",
    people: 4,
    status: "Pendente",
    observations: "Uma pessoa é vegetariana.",
  },
  {
    id: 3,
    name: "Ricardo Alves",
    email: "ricardo.alves@email.pt",
    phone: "+351 965 432 100",
    date: dateFromToday(1),
    time: "19:30",
    people: 3,
    status: "Confirmada",
    observations: "",
  },
  {
    id: 4,
    name: "Ana Costa",
    email: "ana.costa@email.pt",
    phone: "+351 918 222 333",
    date: dateFromToday(1),
    time: "21:00",
    people: 2,
    status: "Cancelada",
    observations: "Celebração de aniversário.",
  },
  {
    id: 5,
    name: "Miguel Sousa",
    email: "miguel.sousa@email.pt",
    phone: "+351 926 111 444",
    date: dateFromToday(2),
    time: "20:15",
    people: 6,
    status: "Pendente",
    observations: "Preferência por uma mesa mais reservada.",
  },
  {
    id: 6,
    name: "Carolina Lima",
    email: "carolina.lima@email.pt",
    phone: "+351 911 700 800",
    date: dateFromToday(4),
    time: "19:45",
    people: 2,
    status: "Confirmada",
    observations: "Alergia a frutos secos.",
  },
  {
    id: 7,
    name: "Pedro Martins",
    email: "pedro.martins@email.pt",
    phone: "+351 938 505 600",
    date: dateFromToday(-1),
    time: "20:00",
    people: 4,
    status: "Confirmada",
    observations: "",
  },
];

export default adminReservations;