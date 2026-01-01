import React from "react";
import Image from "next/image";
import selfie from "./selfie.jpg";

export default function AboutPage() {
	return (
		<section className="space-y-5 flex justify-center">
		<div className="max-w-prose w-full space-y-5">
		<h1 className="text-3xl font-semibold text-gray-800">about me</h1>
		<h2 className="text-xl font-medium">Who am I?</h2>
	
		<p>{`I'll write this later.`}</p>

		<h2 className="text-xl font-medium">Credits</h2>

		<p>{`The home page was beautifully designed by the genius, spectacular Abigail Jensen.`}</p>

		<p>{`All writing is done by me, unless quoted or cited. Nothing is written with AI.`}</p>

		</div>
		</section>
	);
}