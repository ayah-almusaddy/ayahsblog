import QuoteFrame from "./quote_frame";
import { inriaSerif, inriaSans } from "../fonts";

export default function Quote() {
  return (
    <QuoteFrame
      className=""
      stroke="#852E92"
      viewBox="0 0 514 818"
      padding={55}
    >
      <div className="flex h-full flex-col justify-between">
        {/* Title */}
        <p
          className={`${inriaSerif.className} text-4xl text-center mb-5`}
          style={{ color: "#731082" }}
        >
          Quote of the Day
        </p>

        {/* Quote text */}
        <blockquote
          className={`${inriaSans.className} text-lg text-black text-center`}
        >
          “Cats and humans have been partners for over ten thousand years. And what you realize when you’ve lived with a cat for a long time is that we may think we own them, but that’s not the way it is. They simply allow us the pleasure of their company”
        </blockquote>

        {/* Author */}
        <p
          className={`${inriaSans.className} mt-4 text-sm text-black italic font-light text-right`}
        >
         - Genki Kawamura 
        </p>
      </div>
    </QuoteFrame>
  );
}
