export default function MbtiPost() {
  return (
    <section className="space-y-5 flex justify-center">
      <div className="max-w-prose w-full space-y-5">
        <h1 className="text-2xl font-medium text-gray-800">Taking every MBTI test so you don't have to</h1>

        <h2 className="text-xl mt-8">Background Information:</h2>
        <p>The MBTI, Myers Briggs Type Indicator, is a personality indicator founded by Katherine and Isabel Briggs, inspired by Carl Jung’s work. There are 16 different personality types with four “letters” making up each type. The first is Introversion/Extroversion (I or E); the second is Sensing/Intuition (S or N); the third is Thinking/Feeling (T or F); and the last is Judging/Perceiving (J or P). So if someone is an ISFJ, they are introverted, sensing, feeling, and judging type.</p>

        <h3 className="text-lg font-semibold mt-6">Definitions:</h3>
        <p><strong>Extroversion</strong> - someone who gains energy by being around others<br />
        <strong>Introversion</strong> - someone who gains energy by being alone</p>
        <p><strong>Sensing</strong> - someone who processes the world through their reality<br />
        <strong>Intuition</strong> - someone who processes the world through their intuition</p>
        <p><strong>Thinking</strong> - Making decisions through logic<br />
        <strong>Feeling</strong> - Making decisions through feeling</p>
        <p><strong>Judging</strong> - someone who is more decisive and a “planner”<br />
        <strong>Perceiving</strong> - someone who is more open-minded and flexible</p>

        <h3 className="text-lg font-semibold mt-6 underline">Perceiving Functions: How You Take In Information</h3>
        <p><strong>Introverted Sensing (Si):</strong> Stores and recalls past experiences in great detail. Si-users rely on memory, tradition, and personal experience to understand the present.</p>
        <p><strong>Extroverted Sensing (Se):</strong> Using your five senses to perceive the world: sight, sound, touch, smell, taste. Se-users tend to be very grounded in reality and live “in the moment”. They are observant and have good control and perception over their surrounding environment.</p>
        <p><strong>Introverted Intuition (Ni):</strong> Sees underlying patterns and long-term possibilities. Ni-users trust gut feelings and make connections between abstract ideas.</p>
        <p><strong>Extroverted Intuition (Ne):</strong> Explores multiple possibilities and generates creative ideas. Ne-users make quick, unexpected connections between concepts.</p>

        <h3 className="text-lg font-semibold mt-6 underline">Judging Functions: How You Make Decisions</h3>
        <p><strong>Introverted Feeling (Fi):</strong> Makes decisions based on personal values and inner morality. Fi-users prioritize authenticity and staying true to themselves and their values.</p>
        <p><strong>Extroverted Feeling (Fe):</strong> Prioritizes social harmony and considers how actions affect others. Fe-users are highly aware of emotions in their environment and seek to maintain group cohesion.</p>
        <p><strong>Introverted Thinking (Ti):</strong> Analyzes and organizes information based on internal logic. Ti-users focus on accuracy and consistency within their own logical framework.</p>
        <p><strong>Extroverted Thinking (Te):</strong> Focuses on external efficiency, structure, and results. Te-users make decisions based on facts and objective logic, often in a systematic, goal-oriented manner.</p>

        <h2 className="text-xl mt-10">Tests and Results</h2>
        <p>I took 9 different MBTI tests - some focused on the four letters and others focused on the cognitive functions. I took each test on January 1st and January 31st to test for consistent results. Here’s a breakdown on their accuracy, format, and how useful I think they are. </p>
        <p>Disclaimer: My opinions and interpretations of these tests are completely my own and you have all the right to disagree with me. I am not an expert or a scientist - I’m just bored. </p>

        <h4 className="text-lg font-semibold mt-6 underline">1. 16Personalities - <a href="https://www.16personalities.com/free-personality-test" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">take test here</a></h4>
        <p>Format: Agree/Disagree Scale<br/>Focus: Four Letter Type + (Turbulent/Assertive)</p>
        <p><strong><br/>Pros:</strong> Easy to understand, simple, leans towards a Big Five influence which has more scientific standing <br/><strong>Cons:</strong> Simplifies MBTI to the four-letter type instead of utilizing cognitive functions, turbulence/assertiveness not based in Jungian theory, questions can get repetitive</p>
        <p><br/>Jan 1 Result:  INTJ-T<br/>Jan 31 Result: ENTJ-A</p>
        <p className ="font-semibold text-pink-800"> <br/>RATING: 7/10</p>

        <h4 className="text-lg font-semibold mt-6 underline">2. Truity - <a href="https://www.truity.com/test/type-finder-personality-test-new" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">take test here</a></h4>
        <p>Format: Mix of agree/disagree, accurate/inaccurate, and this or that scale questions<br/>Focus: Four Letter Type</p>
        <p><strong><br/>Pros:</strong> variety of different question types, full report gives other measures of personality, my favorite of the “four letter type” tests, results are consistent<br/><strong>Cons:</strong> you have to pay for the full report, doesn’t take cognitive functions into consideration</p>
        <p><br/>Jan 1 Result:  ENTJ<br/>Jan 31 Result: ENTJ</p>
        <p className ="font-semibold text-pink-800"> <br/>RATING: 8/10</p>

        <h4 className="text-lg font-semibold mt-6 underline">3. IDRLabs - <a href="https://www.idrlabs.com/test.php" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">take test here</a></h4>
        <p>Format: One or the other questions<br/>Focus: Four Letter Type</p>
        <p><strong><br/>Pros:</strong> Results give percentage of each letter (82% extroverted, 18% introverted)<br/><strong>Cons:</strong> No scale questions (can’t pick an inbetween), questions are too rigid</p>
        <p><br/>Jan 1 Result: ENTJ<br/>Jan 31 Result: ENTP</p>
        <p className="font-semibold text-pink-800"><br/>RATING: 5/10</p>

        <h4 className="text-lg font-semibold mt-6 underline">4. PersonalityJunkie - <a href="https://personalityjunkie.com/free-online-personality-test-3/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">take test here</a></h4>
        <p>Format: One or the other questions<br/>Focus: Both letters and cognitive functions (maybe)</p>
        <p><strong><br/>Pros:</strong> Short and sweet, results page shows a good explanation of type, meant to be an intro and not conclusive<br/><strong>Cons:</strong> Too short, questions are not measured on a scale</p>
        <p><br/>Jan 1 Result: ENTJ<br/>Jan 31 Result: ENTP</p>
        <p className="font-semibold text-pink-800"><br/>RATING: 6/10</p>

        <h4 className="text-lg font-semibold mt-6 underline">5. Humanmetrics - <a href="https://www.humanmetrics.com/personality/test" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">take test here</a></h4>
        <p>Format: Yes/No scale<br/>Focus: Four Letter Type</p>
        <p><strong><br/>Pros:</strong> Questions are not ambiguous, consistent results<br/><strong>Cons:</strong> I could argue that the questions aren’t a good measurement for the four letters (they could come up with better ones that aren’t biased)</p>
        <p><br/>Jan 1 Result: ENFJ<br/>Jan 31 Result: ENFJ</p>
        <p className="font-semibold text-pink-800"><br/>RATING: 6/10</p>

        <h4 className="text-lg font-semibold mt-6 underline">6. Mistype Investigator - <a href="https://mistypeinvestigator.com/test/v1" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">take test here</a></h4>
        <p>Format: One or the other scale<br/>Focus: Cognitive Functions</p>
        <p><strong><br/>Pros:</strong> Long and detailed test, results page shows percentage of each function AND type, results page also shows Grant-Brownsword score, letter score, type families score, and custom measured score<br/><strong>Cons:</strong> Questions can be a bit vague (could be interpreted differently)</p>
        <p><br/>Jan 1 Result: INTJ<br/>Jan 31 Result: ENFP</p>
        <p className="font-semibold text-pink-800"><br/>RATING: 8/10</p>

        <h4 className="text-lg font-semibold mt-6 underline">7. Sakinorva - <a href="https://sakinorva.net/functions" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">take test here</a></h4>
        <p>Format: No/Yes scale<br/>Focus: Cognitive Functions</p>
        <p><strong><br/>Pros:</strong> Results give Grant-Brownsword model, Myers model, axis-based model, and Myers letter type, consistent results<br/><strong>Cons:</strong> Questions can be ambiguous and confusing</p>
        <p><br/>Jan 1 Result: ENFP<br/>Jan 31 Result: ENFP</p>
        <p className="font-semibold text-pink-800"><br/>RATING: 8.5/10</p>

        <h4 className="text-lg font-semibold mt-6 underline">8. Michael Caloz - <a href="https://www.michaelcaloz.com/personality/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">take test here</a></h4>
        <p>Format: One or the other question scale, picking “type family”, picking 1–3 greatest weaknesses out of list<br/>Focus: Cognitive Functions</p>
        <p><strong><br/>Pros:</strong> Each option gives an example to go with it (easier to understand), different types of questions—measures more than just the cognitive functions, takes weaknesses into account, consistent results<br/><strong>Cons:</strong> Could make it a bit longer</p>
        <p><br/>Jan 1 Result: ENTJ<br/>Jan 31 Result: ENTJ</p>
        <p className="font-semibold text-pink-800"><br/>RATING: 9.5/10</p>

        <h4 className="text-lg font-semibold mt-6 underline">9. Keys2Cognition - <a href="http://www.keys2cognition.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">take test here</a></h4>
        <p>Format: Exactly me/Not me scale<br/>Focus: Cognitive Functions</p>
        <p><strong><br/>Pros:</strong> Gives “cognitive development” profile (how well you use each function), gives score on function pairs (NT, ST, NF, SF), gives top three results<br/><strong>Cons:</strong> Questions can get confusing—the wording could be better, ambiguous questions</p>
        <p><br/>Jan 1 Result: ENFP<br/>Jan 31 Result: ESFP</p>
        <p className="font-semibold text-pink-800"><br/>RATING: 7.5/10</p>

        <h2 className="text-xl mt-10">Conclusion</h2>
        <p>If you discuss MBTI tests with anyone - they will all agree on one thing and one thing only: tests can never truly be accurate and should be used as a guide rather than a conclusive measurement. After spending years engaging with ‘MBTI nerds’ and taking numerous tests over and over again - I have come to the conclusion not to “type myself”. As much as I love studying the cognitive functions and the different measurements people have come up with - inspired by Carl Jung’s work, I believe that personality will always be fluid and can always be changed. I do not like to box myself in - whether for a personality type or a hogwarts house - I have always enjoyed my ability to reinvent myself throughout my life. Maybe I’m an ENTJ, maybe an ENFP, maybe I’ve taken these tests too often and know how to answer them to get the result that I want, or maybe it doesn’t matter at all.</p>

        <p><br/>My recommendations:<br/>Four Letter Type - Truity<br/>Cognitive Functions - Michael Caloz</p>
      </div>
    </section>
  );
}
