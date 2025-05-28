export default function Quote() {
  return (
    <section className="text-center py-12">
      <h1 className="text-3xl font-bold text-gray-800">quote of the day</h1>
      <blockquote className="mt-6 text-xl italic text-gray-800">
        {`" It hurts to want it all, so many things that can't coexist within the same life."`}
      </blockquote>
      <footer className="mt-2 text-gray-600">- Emily Henry</footer>
    </section>
  );
}
