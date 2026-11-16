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
    <section className="bg-linear-to-r from-sky-800 via-sky-900 to-sky-950 max-w-full mx-auto p-6 md:p-12 ">
    <div className="max-w-7xl mx-auto flex flex-col justify-center items-center text-white ">
      <h2 className="text-2xl md:text-4xl uppercase mb-6 ">
        Latest News
      </h2>

      <ul className="flex flex-col md:flex-row w-full justify-evenly gap-6 ">
        {latestnews.map((news, index) => (
          <li key={index} className="mb-2 border-b border-white pb-3.5">
            <span className="text-sm">{news.date}</span>
            <p className="text-base py-1">{news.content}</p>
            <a href={news.url} className="text-base font-medium capitalize transition-opacity hover:opacity-70 ">
              Read more
            </a>
          </li>
        ))}
      </ul>
          <a
            href="#"
            className="flex items-center justify-center gap-0.5 text-sm font-medium uppercase transition-opacity hover:opacity-70 px-4 py-2 mt-3"
          >
            VIEW ALL NEWS
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mt-px"
          >
            <path d="M5 12h14" />
            <path d="m13 6 6 6-6 6" />
          </svg>
          </a>
    </div>
    </section>
  );
}
