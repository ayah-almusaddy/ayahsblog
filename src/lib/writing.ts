type WritingItem = {
  id: number;        // internal number for “recent writings”
  title: string;
  href: string;
  date: string;      // ISO-ish string like "2025-01-14"
};

const WRITINGS: WritingItem[] = [
  {id: 109, title: "It's Ok to Hate Software Engineering", href: "/writing/software-engineering", date: "2026-08-19" },
  { id: 108, title: "Euthyphro's Dilemma: Morality and God", href: "/writing/euthyphro", date: "2026-06-17" },
  { id: 107, title: "1984 by George Orwell", href: "/writing/1984", date: "2026-01-04" },
  { id: 106, title: "Brave New World by Aldous Huxley", href: "/writing/bravenewworld", date: "2025-12-16" },
  { id: 105, title: "My Friends by Fredrik Backman", href: "/writing/myfriends", date: "2025-10-20" },
  { id: 104, title: "Intermezzo by Sally Rooney", href: "/writing/intermezzo", date: "2025-10-01" },
  { id: 103, title: "What constitues reinvention?", href: "/writing/reinvention", date: "2025-05-02" },
];
export { WRITINGS };
