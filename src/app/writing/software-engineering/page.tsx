// src/app/software-engineering/page.tsx
export const dynamic = 'force-static';
export const revalidate = 3600;
import React from "react";

export default function SoftwareEngineering() {
    return (
        <section className="space-y-3 flex justify-center px-4 md:px-8 py-4">
            <div className="max-w-prose w-full space-y-5">
                <h1 className="text-2xl font-medium text-gray-800">It's Ok to Hate Software Engineering</h1>

                <p className="text-sm text-gray-500">Published on August 19, 2026</p>

                <p className="text-gray-700 leading-relaxed">
                    When I was choosing a major in college, I was the most meticulous, annoying, overthinking type of student to exist. I watched a million "how to choose a college major" videos, took millions of personality tests, talked to my teachers, and made a shit ton of pros and cons lists. I narrowed it down to neuroscience or computer science. Both were subjects I enjoyed immensely, leading to career prospects – psychiatrist and software engineer – that I was genuinely interested in. Now, I’m aware those are two completely different paths, but after great deliberation, I went with the latter. I didn’t think I had enough interest in neuroscience to endure 10+ years of schooling, and I truly loved math and problem solving. I wanted a career where I could work a 9 to 5 and have time for my hobbies afterward. It seemed like sound logic to me.
                </p>

                <p className="text-gray-700 leading-relaxed">
                    My senior year of high school coincided with the first release of ChatGPT. I was curious, and I was one of the first people to explore its coding skills in my AP CS class. It was helpful, but our teacher was old-school and made us take exams by handwriting code. Ultimately, I didn’t give it much thought beyond casual interest until college started. The conversations around AI replacing coding began before I even entered the first year of my bachelor's. I was slightly worried, but there were enough people online saying the technology wasn’t advanced enough yet, so it didn't stress me out too much.
                </p>

                <p className="text-gray-700 leading-relaxed">
                    During the first two years of my CS degree, I still coded. I used AI, don’t get me wrong, but I had assignments and exams that forced me to write out syntax and understand core coding principles. I was trying to ensure I cultivated skills independently of the tools available. I used AI for homework and assignments where it was allowed because I didn’t want to become “left behind”. I’m not sure if that was the right approach, considering basic coding skills might actually contribute to the ability to prompt efficiently, but alas, it was the approach 18 to 21 year old me took.
                </p>

                <p className="text-gray-700 leading-relaxed">
                    Now, almost one year into my job as a software engineer, I don’t remember the last time I wrote a line of code. Claude lives in my codebase, changing however many files it wants. My entire job is to debate architectural decisions with my coworkers, prompt Claude, test its code, and prompt it again to fix the bugs it created. I hate it. The reason I chose CS was because the process of finding a bug and spending 3 to 4 hours deeply immersed in fixing it was the job. It was fun, and there was a deep satisfaction in accomplishing that goal. Now, my job is to make architectural decisions that I don’t have the experience or understanding to make, and to bully AI into building them.
                </p>

                <p className="text-gray-700 leading-relaxed">
                    I don’t think this rapid change in the field of software engineering was necessarily foreseeable, or if it was, it wasn't foreseeable to the majority. For some reason, I thought CS was untouchable. I thought it would be around for a very long time. That 18 year old girl who tried to plan out every single part of her future and account for every extraneous variable did not see this one coming.
                </p>

                <p className="text-gray-700 leading-relaxed">
                    And there’s something freeing in being able to be angry with how the field turned out. Becoming a fucking AI bootlicker was not something I consented to, and I hate capitalism for turning me into one. I hate software engineering now. I’m grateful for the job that many were not able to get (also because of capitalism, by the way), but I am actively working to get out of a field that betrayed itself.
                </p>

                <p className="text-gray-700 leading-relaxed">
                    I don’t think the field is dead; I think it’s changed. Some say it’ll change back, and others say it won’t. Personally, I don’t believe it will ever be the same. I don’t think all hope is lost for everyone who studied CS. There will still need to be people who prompt the AI, and people who know what went wrong when the AI fucks up. But the change in the industry took away my love for it. I went into CS because I enjoyed the activity of coding. That activity is no longer something I do as a software engineer. And I do not love prompting nearly as much as I loved coding. I don’t love it at all, actually. I hate it.
                </p>

                <p className="text-gray-700 leading-relaxed">
                    Software engineering is no longer something I care about, and I look forward to the day that I get out. My sympathies go out to everyone who feels the same way, experiencing disappointment in a career we didn’t even get to truly mourn because we were never fully in it before it warped. And to those who have been in the career for a lot longer than I have and also hate it now, I can’t imagine how much worse that feeling is. 
                </p>
            </div>
        </section>
    );
}