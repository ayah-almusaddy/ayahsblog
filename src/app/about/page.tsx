import React from "react";
import Image from "next/image";
import selfie from "./selfie.jpg";

export default function AboutPage() {
	return (
		<section className="space-y-5 flex justify-center">
		<div className="max-w-prose w-full space-y-5">
		<h1 className="text-3xl font-semibold text-gray-800">about me</h1>
		<h2 className="text-xl font-medium">Who am I?</h2>
	
		<p>{`My name is Ayah. I’m 21, and in my last semester of my undergraduate degree, studying Computer Science. I read a lot, write a lot, and think too much. What better way to utilize my long and winding musings than to start a blog? Stay and read a bit if you’re interested. Or don’t. I don’t particularly care.`}</p>
		</div>
		</section>
	);
}