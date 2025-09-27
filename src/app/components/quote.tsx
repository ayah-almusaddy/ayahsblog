import PostageFrame from "./PostageFrame";

export default function Quote() {
    return (

        <PostageFrame className="bg-white">
            <div>
                <p className="font-serif text-4xl text-grape-800 mb-3">Quote of the Day</p>
                <blockquote className="font-serif text-lg leading-relaxed text-gray-800">
                    “Love is a teacher, but one must know how to acquire it, for it is acquired with
                    difficulty; it is dearly bought, one must spend a great deal of labour and time
                    on it, for we must love not only for a moment and fortuitously, but for ever.”
                </blockquote>
                <p className="mt-4 text-right text-sm text-gray-600">— Fyodor Dostoyevsky</p>
                <p className="mt-6 text-xs text-gray-500">September 9, 2025</p>
            </div>
        </PostageFrame>
    );
}
