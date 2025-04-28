export default function Quote() {
  return (
    <section className="text-center py-12">
      <h1 className="text-3xl font-bold text-gray-800">quote of the day</h1>
      <blockquote className="mt-6 text-xl italic text-gray-800">
        {`"I faced it all, and I stood tall, and did it my way"`}
      </blockquote>
      <footer className="mt-2 text-gray-600">- Frank Sinatra</footer>
    </section>
  );
}
