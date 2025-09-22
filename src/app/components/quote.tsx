export default function Quote() {
  return (
    <section className="text-center py-12">
      <h1 className="text-3xl font-bold text-gray-800">quote of the day</h1>
      <blockquote className="mt-6 text-xl italic text-gray-800">
        {`" Well, if that's suffering, he thinks, let me suffer. Yes. To love whoever I have left. And if ever I lose someone, let me descend into a futile and prolonged rage, yes, despair, wanting to break things, furniture, appliances, wanting to get into fights, to scream, to walk in front of a bus, yes. Let me suffer, please. To love just these few people, to know myself capable of that, I would suffer every day of my life."`}
      </blockquote>
      <footer className="mt-2 text-gray-600">- Sally Rooney</footer>
    </section>
  );
}
