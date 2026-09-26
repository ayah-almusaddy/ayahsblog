// src/app/writing/eastofeden/page.tsx
export const dynamic = 'force-static';
export const revalidate = 3600;
import React from "react";

export default function EastOfEden() {
    return (
        <section className="space-y-3 flex justify-center px-4 md:px-8 py-4">
            <div className="max-w-prose w-full space-y-5">
                <h1 className="text-2xl font-medium text-gray-800">East of Eden by John Steinbeck</h1>

                <p className="text-sm text-gray-500">Published on September 26, 2026</p>

                <p className="text-gray-700 leading-relaxed">
                    Sometimes I read a book and that book stabs my heart with a needle, delicately sewing itself inside. Blood trickles down the sides, the erratic beating changes its melody, and the words float on the stream of blood, spreading throughout my body, keeping me alive.
                </p>

                <p className="text-gray-700 leading-relaxed">
                    “And I feel that I am a man. And I feel that a man is a very important thing – maybe more important than a star. That is not theology. I have no bent toward gods. But I have a new love for that glittering instrument, the human soul. It is a lovely and unique thing in the universe. It is always attacked and never destroyed – because ‘Thou mayest.’” pg 304
                </p>

                <p className="text-gray-700 leading-relaxed">
                    East of Eden’s depiction of the human soul is the most disgustingly revolting experience I have read. It’s the most unbearable thing, to read a novel that ripples like waves of the clearest ocean, and it is your own reflection that looks back at you. To meet characters so deeply human, it's as if they intruded your mind and created themselves out of your own faults. Something in the way, Charles could not fathom how his own father never loved him back. Or, how Will needed to be liked by everyone, so he made sure to become like everyone. The way Mrs. Trask used religion to fit her life, to make sense of the world. To Samuel telling Tom not to try and convince her that there was no God, because he knew that she needed to believe in one. To Mrs. Trask ordering Samuel to put the pieces of Adam back together, after Cathy broke him.
                </p>

                <p className="text-gray-700 leading-relaxed">
                    To Samuel always being the one to crack jokes because he knows people come to him to laugh, to hear his ridiculous dreams. Samuel, who had to give himself a pep talk to hit Adam, to force himself back to life. Samuel - heavy with the weight of the people around him, telling Lee all he wanted was to break down in someone’s arms. Samuel, who forced Adam to name his children, convinced him to start his life again. Samuel, who saw Lee’s genius, who was kind to a fault, who could never become rich because his head was too full of ideas and his hands too slow to create them. To Samuel’s hope, the persistent stories, dreams, and laughter carried like light in the people who came to listen to him. Hope that never left the pages, even after he was gone.
                </p>

                <p className="text-gray-700 leading-relaxed">
                    To Dessie, coming to live with Tom, determined to breathe life back into him. Wanting to see the light in his eyes that died with his father. To Tom, consumed with emotion, always feeling everything to the extreme. His dog’s death, his world ending. So much joy and so much sadness. His guilt of Dessie’s death, destroying his mind. His mind destroying himself.
                </p>

                <p className="text-gray-700 leading-relaxed">
                    To Lee, who left to start a bookshop, coming back before a day even could pass. Coming back to the family who would not have been able to call themselves a family without him. To Adam, who’s naivety in people is a reflection of what he believes the world should be like. Not able to comprehend evil, because there is very little evil inside of him. Adam as a child, who wished to figure out why his mother was no longer here. So that maybe, he could do it to himself and he wouldn’t have to be here either. Adam, who depended on Charles, was afraid of his gentleness after his violence, wondering if it was a form of kindness before death. Cyrus who begged Adam to tell him why Charles was the way he was. And Adam who looked him in the eye and said, “He doesn’t think you love him.”.
                </p>

                <p className="text-gray-700 leading-relaxed">
                    This book is a desperate attempt to show humanity’s biggest vice: the need to be loved. Every character, even Cathy, is bound by this one need: love. And the lack of it, tearing a person piece by piece, changing who they are, until they can’t figure out why they act the way that they do. The parallels between Adam and Charles; Aaron and Cal, Abel and Cain; is a persistent theme throughout this novel. Is a person doomed from the start to be evil?  Cal being more twisted than Aron, tortured by the thought that he’s more his mother than his father. Cal whose only understanding of how to be loved was to imitate Aron. Cal’s cycle of self hatred, guilt, and shame. Lee asking Cal if he was enjoying his despair. Kate who can’t seem to realize that maybe she is afraid. Maybe the strength she’s built and the love she’s discarded is not enough to protect her from her own mind.
                </p>

                <p className="text-gray-700 leading-relaxed">
                    What does it mean to be a human? Steinbeck answers the question with this novel and the answer will etch itself into your mind forever.
                </p>

                <p className="text-gray-700 leading-relaxed">
                    “We’re a violent people, Cal. Does it seem strange to you that I include myself? Maybe it’s true that we are all descended from the restless, the nervous, the criminals, the arguers and brawlers, but also the brave and independent and generous. If our ancestors had not been that, they would have stayed in their home plots in the other world and starved over the squeezed-out soil.”
                </p>

                <p className="text-gray-700 leading-relaxed">
                    …And so we’re overbrave and overfearful – we’re kind and cruel as children. We’re overfriendly and at the same time frightened of strangers. We boast and are impressed. We’re oversentimental and realistic. We are mundane and materialistic – and do you know of any other nation that acts for ideals?” pg 570
                </p>
            </div>
        </section>
    );
}
