
"use client";

const latestnews = [
  {
    date: "12/17/2025",
    content: "Discover the latest developments and initiatives supporting the Company's continued growth and long-term objectives.",
    url: "/news/1",
  },
  {
    date: "12/11/2025",
    content: "Stay informed about important company announcements, operational developments, and corporate milestones.",
    url: "/news/2",
  },
  {
    date: "12/03/2025",
    content: "Learn more about our ongoing efforts to promote transparency, accountability, and sustainable value creation.",
    url: "/news/3",
  },

];


export function LatestNews() {


  return (
    <section className="">
    <h2>Latest News</h2>

    <ul className="list-disc pl-5">
        {latestnews.map((news, index) => (
            <li key={index} className="mb-2">
            <span className="font-semibold">{news.date}: </span>
            <p>{news.content}</p>
            <a href={news.url} className="text-blue-500 hover:underline">Read more</a>
            </li>
        ))}
        </ul>
    </section>
  );
}
