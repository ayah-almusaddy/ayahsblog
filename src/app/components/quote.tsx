export default function Quote() {
  return (
    <section className="text-center py-12">
      <h1 className="text-3xl font-bold text-gray-800">quote of the day</h1>
      <blockquote className="mt-6 text-xl italic text-gray-800">
        {`" Spring is the time of plans and projects. "`}
      </blockquote>
      <footer className="mt-2 text-gray-600">- Leo Tolstoy</footer>
    </section>
  );
}
