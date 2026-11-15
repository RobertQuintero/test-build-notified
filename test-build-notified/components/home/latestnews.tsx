"use client";

const latestnews = [
  {
    date: "12/17/2025",
    content:
      "Discover the latest developments and initiatives supporting the Company's continued growth and long-term objectives.",
    url: "/news/1",
  },
  {
    date: "12/11/2025",
    content:
      "Stay informed about important company announcements, operational developments, and corporate milestones.",
    url: "/news/2",
  },
  {
    date: "12/03/2025",
    content:
      "Learn more about our ongoing efforts to promote transparency, accountability, and sustainable value creation.",
    url: "/news/3",
  },
];

export function LatestNews() {
  return (
    <section className="bg-linear-to-r from-sky-700 via-sky-900 to-sky-950 max-w-full mx-auto p-6 md:p-12 ">
    <div className="max-w-7xl mx-auto flex flex-col justify-center items-center text-white ">
      <h2 className="text-2xl md:text-4xl uppercase mb-6 ">
        Latest News
      </h2>

      <ul className="flex flex-col md:flex-row w-full justify-evenly gap-6 ">
        {latestnews.map((news, index) => (
          <li key={index} className="mb-2 border-b border-white pb-3.5">
            <span className="text-sm">{news.date}</span>
            <p className="text-base py-1">{news.content}</p>
            <a href={news.url} className=" font-medium hover:text-sky-700 hover:underline">
              Read more
            </a>
          </li>
        ))}
      </ul>
     <button className="mt-4 px-4 py-2  rounded hover:text-sky-700 ">
        View All News
      </button>
    </div>
    </section>
  );
}
