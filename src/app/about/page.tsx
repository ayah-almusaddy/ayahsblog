import React from "react";
import Image from "next/image";
import selfie from "./selfie.jpg";

export default function AboutPage() {
	return (
		<section className="space-y-5 flex justify-center">
		<div className="max-w-prose w-full space-y-5">
		<h1 className="text-3xl font-semibold text-gray-800">about me</h1>
		<h2 className="text-xl font-medium">Who am I?</h2>
		<p>{`This is the question of the century. It makes my skin crawl trying to answer this question. I've written maybe 12 different editions of my "about page" and I don't like any of them. Describing myself feels like bashing my head against a wall. It feels like having to interview for a job that doesn't even pay well. It feels like rehersing a 60 second elevator pitch at the career fair. But thirteenth time's the charm! Or whatever they say.`}</p>
	
		<p>{`My name is Ayah Almusaddy. I am 20 years old, attending college at UIC, majoring in Computer Science and will be interning as a software engineer this summer. I enjoy reading various genres, mainly fiction, occassionally nonfiction if I'm feeling intelligent. I eat out a lot, walk around downtown Chicago, go on runs, hang out with people, and contemplate life's mysticism.`}</p>

		<p>{`I enjoy talking to people, listening to music, studying human related topics (like psychology or politics), sleeping 9 hours a night, and doing things that scare me. I romanticise life, people say I have way too much confidence, and my face is already developing smile wrinkles. Life is beautiful and I am determined to enjoy every part of it. How you perceive me is up to you but I hope you enjoy the way my brain works as you read some of the things I've written.`}</p>

		<figure className="mt-6 text-center">
  		<Image src={selfie} alt="selfie" width={200} height={300} className="mx-auto rounded-lg shadow-md" />
  		<figcaption className="mt-2 text-sm text-gray-700">me on the train</figcaption>
		</figure>

		<h2 className="text-xl font-medium">What do I write about?</h2>
		<p>{`Honestly I don't know yet. I was going to use this website as a way to write new pieces and experiment with different writing forms and styles. I plan on writing book reviews, thought pieces, essays, maybe some creative writing, and whatever else sounds fun and appealing. I will try to write a new piece every week but I doubt I'll be that consistent. I do not plan on monetizing this website so enjoy browsing without getting bombarded with ads!`}</p>

		</div>
		</section>
	);
}