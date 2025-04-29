export default function Quote() {
  return (
    <section className="text-center py-12">
      <h1 className="text-3xl font-bold text-gray-800">quote of the day</h1>
      <blockquote className="mt-6 text-xl italic text-gray-800">
        {`"There is nothing I would not do for those who are really my friends. I have no notion of loving people by halves, it is not my nature. "`}
      </blockquote>
      <footer className="mt-2 text-gray-600">- Jane Austen</footer>
    </section>
  );
}
