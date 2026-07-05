import React from "react";
import Image from "next/image";
import selfie from "./selfie.jpg";

export default function AboutPage() {
	return (
		<section className="space-y-5 flex justify-center px-6 md:px-8">
		<div className="max-w-prose w-full space-y-5">
		<h1 className="text-3xl font-semibold text-gray-800">about me</h1>
		<p>{`From the famous words of Oscar Wilde, "To define is to limit."`}</p>
		</div>
		</section>
	);
}