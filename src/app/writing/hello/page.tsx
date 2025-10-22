export const dynamic = 'force-static';
export const revalidate = 3600;
export default function HelloPost() {
  return (
    <section className="space-y-5 flex justify-center">
      <div className="max-w-prose w-full space-y-5">
        <h1 className="text-2xl font-medium text-gray-800">Hello</h1>
        <p>{`This is my first ever post on my website. I wanted to take the time to introduce myself to those who are curious. My name is Ayah Almusaddy and I'm not exactly sure how to describe myself but I will do my best.`}</p>

        <p>{`I am a reader. I have always had a hunger for words on a page. Always consumed people's thoughts and streams of consciousness as a way to understand my own. I have read hundreds of stories and dabbled in almost ever genre. I have explored many different hobbies in my life, tried many new experiences, but when the end of the day comes around and I settle myself into bed, I reach for my book.`}</p>

        <p>{`Secondly, I am a student. A pioneer of knowledge. Someone who will listen to any human being's wisdom. Will read and study every subject. My brain thirsts for information and skills. From coding to ancient medical herbs to criminology, I will soak up every type of education that I possibly can. I will spend the rest of my life learning and it will never be enough. `}</p>

        <p>{`I am, hesitantly, a writer. A bit new to the art, scared of messing up the grammar, terrified to sound too pretentious, but yet still a writer. The most difficult part of my life has been trying to articulate my thoughts. To communicate with the right words and the correct structure. It's an excruciating art. A practice of self restraint for the perfectionist. Yet, it is an art I do not want to lose. The type of art that can make the most beautiful portraits. I am aware that to make those portraits, you have to create thousands of ugly ones. But it is sometimes unbearable - to look at the ugly ones for too long. But I'll look. I'll look and wince and then I'll pick up a blank portrait and start again.`} </p>

        <p>{`I am a daughter and a sister and a friend. I am loud and extroverted. I am annoying, at times a bit too self consuming, and could always use a humbling experience. I am passionate and ambitious. I am a dreamer. I hope for a better world. `}</p>
        
        <p>{`Like everyone; I am a mosaic of many identities. I guess we are all trying to define ourselves one way or another. To see where we fit in this world. But maybe we aren't puzzle pieces meant to be rigidly slotted into the universe. So for now, I am just a girl, with too many thoughts, in an expanding universe. `}</p>
      </div>
    </section>
  );
}
