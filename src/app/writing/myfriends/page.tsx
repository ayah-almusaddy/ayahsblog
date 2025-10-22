// src/app/myfriends/page.tsx
export const dynamic = 'force-static';
export const revalidate = 3600;
import React from "react";

export default function MyFriendsReview() {
    return (
        <section className="space-y-3 flex justify-center">
            <div className="max-w-prose w-full space-y-5">
                <h1 className="text-2xl font-medium text-gray-800">My Friends by Fredrik Backman: Review & Quotes</h1>

                <p className="text-sm text-gray-500">Published on October 20, 2025</p>


                <h2 className="text-xl font-semibold">Review</h2>
                <p className="text-gray-700 leading-relaxed">
                    Another Backman novel, another couple of hours spent crying. I genuinely did not think I could find a book that topped <em>Anxious People</em> by Backman, but he has outdone himself with this one. This novel, a story about friendship and art, a story that has summed up all the experiences of human nature, has touched within me a part of my soul I didn’t even know existed. It’s very rare to find an author whose writing style clicks - Backman does that for me.
                </p>

                <p className="text-gray-700 leading-relaxed">
                    Backman’s writing style reminds me of children’s books. His tone is optimistic, and his ability to portray characters’ vulnerabilities is something I’ve found to have only been done well through children's books. In childhood, we aren’t yet taught to mask feelings, aren’t shamed to feel guilt and sadness, and love and a desire to be loved. There’s an innocence in that vulnerability; not yet knowing how scary it is to tell another human that you need friendship from them. As you grow, you learn that to reveal this to a person is to put yourself in a position to be hurt. That vulnerability can be used against you.  Backman strips all that away while writing his characters, and that’s why I think he’s one of the most loved authors in this day and age. He reminds people of their human desires. He tells people that it's okay to yearn for love, to be vulnerable, to want to be understood by others. 
                </p>

                <p className="text-gray-700 leading-relaxed">
                    The characters in this novel and their relationships with each other were what made this book what it is. Louisa and Ted’s bickering and immediate familial connection; Ted, Joar, Ali, and the artist’s friend group, being the only thing in all their lives that saved each one of them from the terrors of being a teenager. Christian’s understanding of the artist, seeing him for who he truly was, gave the artist a tiny bit of hope in himself, saving him from himself. “He’s one of us.” - a phrase said from Christian to his mom, from the artist to Ted, from Louisa to Ted. Every time Ali would tell someone that she believes in them, every fight Joar would get into to protect someone he loves, Ted and Joar agreeing to do whatever it took to get the artist out of that town, Joar’s mom, whose love kept Joar’s innocence intact, every moment and interaction were so important. Everything was that deep. Friendship tends to be a relationship that isn’t emphasized in so many stories, and a “secondary relationship” in countless books. Backman made friendship the most important part of this story. He reminds people that friendship can change your life; it can literally make life worth living again. 
                </p>

                <p className="text-gray-700 leading-relaxed">
                    I usually hate stories that alternate between the present and flashbacks of the past, but I found this form of storytelling to be very enjoyable from Backman. The chapters are short and quick, and Backman never lingered too long on certain scenes or flashbacks. I liked that the story of the past was mainly told through Ted. Ted had the most beautiful perception of his friends; he understood them deeply and remembered parts of the story that were the most impactful to everyone’s story arc. Each chapter revealed bits of information that pieced the story together, which was a fun way to keep me engaged and flipping through the book. 
                </p>

                <p className="text-gray-700 leading-relaxed">
                    Other parts of this novel I enjoyed: the conversation on art and what it means to be an artist. The idea that art needs more friends and has enough critics. The humor and the light-hearted, yet sensitive way Backman approaches all the difficult topics. Grief being all-consuming, how desperately humans need each other to process grief. The difference in how the world looks through a teenager’s eyes and the anxiety that comes with it. Family, the lack of, and the imperfection of parenting. Kindness being the thing that can change someone’s life. 
                </p>


                <details>
                    <summary className="cursor-pointer text-lg font-semibold">
                        Quotes
                    </summary>
                    <ul className="list-disc pl-6 space-y-2 mt-2">
                        <li>“Obviously none of them dares to actually talk about the paintings on the walls, they’re far too frightened of accidentally thinking the wrong thing, someone else needs to think something first so they can know what they’re allowed to love.” pg 3</li>
                        <li>“But Louisa knows the truth: Fish was murdered by reality. She was suffocated by the claustrophobia of being trapped on this planet, she died of being sad all the time.” pg 7</li>
                        <li>“That there is a speed at which a heart can beat that you can’t remember when you’ve stopped being young. There is art that can be so beautiful that it makes a teenager too big for her body. There is a sort of happiness so overwhelming that it is almost unbearable, your soul seems to kick its way through your bones.” pg 7</li>
                        <li>“Imagination is a child’s only weapon. And on the back of the postcard of the painting, Louisa wrote a message, the one she would have wanted, as if she had been longed for and loved: See you soon. -Mom.” pg 14</li>
                        <li>“Because in an ugly place, he was born with so much beauty inside him that it was like an act of rebellion. In a world full of sledgehammers, his art was a declaration of war.” pg 20</li>
                        <li>“He didn’t want to prove to the world how good the artist was, he wanted to prove it to the artist himself. Joar was good at mending engines, because in them he could always see what was broken, but humans are full of crap you can’t see. We break in the invisible parts. So Joar didn’t know how to say that he loved the artist,” pg 22</li>
                        <li>“The artist? He was good at seeing the beauty in everything that happens if you’re no good at seeing it in yourself.” pg 36</li>
                        <li>“The summer started and ended with death” pg 37</li>
                        <li>“He would often try to think that perhaps that has to be the case: that our teenage years have to simultaneously be the brightest light and the darkest depths, because that’s how we learn to figure out the horizons.” pg 37</li>
                        <li>“How could the sea be big enough to have room for their hearts? Incomprehensible.” pg 38</li>
                        <li>“<i>You'll</i> be alive. Not all the rest of us, but you’ll be alive, because you’re going to live forever.” pg 38</li>
                        <li>“Imagination is the only thing that stops us from thinking about death every second. And when we aren’t thinking? Oh, those are all our very best moments, when we’re wasting our lives. It’s an act of magnificent rebellion to do meaningless things, to waste time, to swim and drink soda and sleep late.” pg 39</li>
                        <li>“That’s all of life. All we can hope for. You mustn’t think about the fact that it might end, because then you live like a coward, you never love too much or sing too loudly.” pg 40</li>
                        <li>“The artist will never give the can of spray paint back, she will never get the chance to tell him what he really meant to her. It doesn’t matter, he’s with her everywhere now, on every wall.” pg 42</li>
                        <li>“He’s never been able to explain that all his paintings are an attempt to show how beautiful he wishes he actually was. He’s dreamed of being able to say: “Being human is to grieve constantly.” Because what he really wants to know is: “How the hell do all the rest of you cope?”” pg 43</li>
                        <li>“... grief does so many things to people, and one of those things is that we forget how to breathe. As if the body’s first instinct is to grieve itself to death.” pg 50</li>
                        <li>“And Ted has to forgive them, because in grief we are reminded that we’re human beings. In life we might be enemies, but when faced with death, we see the truth: we are one species, all we have is each other and where you go, I shall follow.” pg 54</li>
                        <li>“It’s the incomprehensibility of death that drives people mad, so that we forget how to breathe and how to walk, until we spend whole nights stumbling about in dark rooms, calling and calling, trying to understand how there can be a phone number that no longer belongs to anyone.” pg 54</li>
                        <li>“Nothing weighs more than someone else’s belief in you.” pg 67</li>
                        <li>“... but the ultimate expression of love is nagging, we don’t nag anyone the way we nag the people we love. All parents know that, and so do all best friends.” pg 77</li>
                        <li>“When you’re fourteen years old, friendship, and infatuation are the same feeling, light from the same star, so perhaps there ought to be a better word for it. But how do I explain that I’m freezing to death if I’m not seen by you?” pg 84</li>
                        <li>“Joar had made it his responsibility to make the artist world-famous, the artist had made it his responsibility not to disappoint Joar. Ted? He had made it his responsibility that none of the people he loved would die. That’s a terrible burden for a person. Your shoulders creak, your skeleton shrinks, in the end you can hardly walk.” pg 85</li>
                        <li>“The most dangerous thing you can give evil is free time, because that meant darker jealousy and deeper paranoia and more empty bottles.” pg 99</li>
                        <li>“Art is a moment. Art is being a reason. Art is coping with being alive for one more week.” pg 102</li>
                        <li>“Not many people are blessed like that, with as many giggles and chuckles as he was in his final weeks, with the chance to feel that he stole more moments from death than death had from him.” pg 107</li>
                        <li>“His laughter carried all the way to his home, to the open window and into the apartment. His mother stood there with dirt on her hands, smiling from ear to ear. Being a parent is so strange, all our children’s pain belongs to us, but so does their joy.” pg 124</li>
                        <li>“People worshipped his art. He was loved by millions of people. But there’s a difference between being loved and receiving love.” pg 132</li>
                        <li>“He often used to say that the only time he felt like himself was when he was painting. Everything else, life, reality, that was just an act. Only art was real for him.” pg 133</li>
                        <li>“Art is what we leave ourselves in other people.” pg 134</li>
                        <li>“Joar tried to save everyone he loved. It was like he knew he had a clock inside him, counting down to destruction, so he was in a hurry to fix everything for … all of us.” pg 168</li>
                        <li>“I wanted to be able to stop time. So my mom would never lose my dad, so Joar wouldn’t get beaten by his old man, so … so I would never run out of people.” pg 169</li>
                        <li>“Art is coincidence, love is chaos.” pg 174</li>
                        <li>“... no doubt she did her best, and that’s the worst thing about being a parent: that almost everyone does their best, but almost all fail regardless.” pg 177</li>
                        <li>“Art is nakedness, you have to be free to decide when you’re comfortable with it, and with whom.” pg 182</li>
                        <li>“You loved each other so much that you were scared of accidentally breaking each other.” pg 184</li>
                        <li>“I could never have lived there on my own. I would have frozen to death in that apartment without his eyes on me.” pg 185</li>
                        <li>“It’s so easy to be a critic, any coward can do that. But art doesn’t need critics, art has enough enemies already. Art needs friends.” pg 194</li>
                        <li>“Great art is a small break from human despair” pg 195</li>
                        <li>“Nature gains nothing from unhappy children, yet they are still walking around everywhere, without the words to describe their anxiety.” pg 197</li>
                        <li>“It was a desperate joke on Joar’s part, because really he was trying to say: <em>You’re not giving us enough oxygen, we’re suffocating without your laughter.</em>” pg 197</li>
                        <li>“It doesn’t take any strength at all to crush someone’s self-confidence if you know where to stomp.” pg 202</li>
                        <li>“Babies teach us not to be scared of death. That’s how we realize we can’t wish for eternal life. Because if no one died, we would have to ban new people from being born. And when the playgrounds are empty, when the last pair of rain boots has been grown out of, when the last puddle has been jumped in … What would we want eternity for then, Ted?” pg 206 </li>
                        <li>“The janitor looked ashamed at that, sometimes you don’t appreciate your own blessings until you see the envy in someone else.” pg 211</li>
                        <li>“You can’t love someone out of addiction, all the oceans are the tears of those who tried. We’re not allowed to die for our children, the universe won’t let us, because then there wouldn’t be any mothers left.” pg 215</li>
                        <li>“Fish always said that kind people were the worst, because at least with mean people you know what you’re dealing with. There’s no limit to how dangerous someone who seems kind can be.” pg 227</li>
                        <li>“Isn’t it like, totally unbelievable that we even exist? So it won’t be a tragedy when we don’t exist anymore! It’s just cool, really cool, that we happened at all.” pg 233</li>
                        <li>“Sometimes he imagines that mankind invented God just to have someone to be angry with, because you can’t be angry with a dad who’s dead,” pg 247</li>
                        <li>“Lucky children often ask what the most dangerous animal in the world is, but all the other children already know. It isn’t the lion or the hippopotamus or the snake or the spider or the shark. The most dangerous creature on the planet is, and has always been, a young man. And the worst thing about a young man? That until very recently he was just a boy. No one gets any warning when he stops being one.” pg 254-255</li>
                        <li>“In the fullness of time she will hate herself for this, and how natural this violence is to her. What must be missing inside her. Most people never find out what they’re truly capable of, but she will never forget.” pg 256</li>
                        <li>“Some people have those hands, as if all the living things instinctively know when they are being touched by someone who would never do them harm.” pg 289</li>
                        <li>“It is an act of violence when an adult yells at a child, all adults know that deep down, because all adults were once little. Yet we still do it. Time after time, we fail at being human beings.” pg 292</li>
                        <li>“But she didn’t dare leave her husband, and Joar couldn’t leave her. Their prison was invisible.” pg 303</li>
                        <li>“Because all we know about them is as moms and dads, nothing about who they were before that. We never saw them young, when they still fantasized about all the things that could happen, instead of regretting all the things that never did.” pg 311</li>
                        <li>“Sometimes we remember the last moments before a great catastrophe as more beautiful than they actually were.” pg 342-343</li>
                        <li>“The world is full of miracles, but none greater than how far a young person can be carried by someone else’s belief in them.” pg 361</li>
                        <li>“It’s a funny thing. The person we fall in love with, we hardly ever call by their name. Because it’s somehow just so obvious that it’s you that I’m talking to, that it’s you I’m always thinking of. Who else?” pg 367</li>
                        <li>“Fish telling her what evil among men is like: It’s like water being heated up a little at a time. It gets worse and worse, but so slowly it’s hardly noticeable, so everyone can convince themselves that it’s probably normal, until we’re all boiling.” pg 375</li>
                        <li>“Women like her can never do the right thing, their men’s guilt is always theirs.” pg 379</li>
                        <li>“Disappointment is a powerful thing. Used correctly, it is stronger than fear, more terrible than physical pain, if you see it in the eyes of the one you love, you’ll do almost anything to make it stop.” pg 399</li>
                        <li>“Art doesn’t require training, dear child, art just needs friends.” pg 409</li>
                        <li>“"Is it horrible being an adult?" the girl asked. “Unbearable,” the mother replied. “You fail with almost everything, all the time.”” pg 412</li>
                        <li>“They were hard people who had lived hard lives, but one damn Saturday they would go to a damn museum and see a damn painting, and that feeling would be like a damn sunrise in their chests: that they had been part of something beautiful.” pg 415</li>
                        <li>“Because art is a fragile magic, just like love, and that’s humanity’s only defense against death. That we create and paint and dance and fall in love, that’s our rebellion against eternity.” pg 417</li>
                        <li>“That you should paint like the birds sing. But Kimkim said it was never like that for him. He said he painted the way we laughed.” pg 420</li>   
                    </ul>
                </details>
            </div>
        </section>
    );
}