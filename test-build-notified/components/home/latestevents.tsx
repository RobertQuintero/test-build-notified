"use client";

const latestevents = [
  {
    date: "12/10/2025 10:00 AM EST",
    title: "Discover developments.",
    url: "/events/1",
  },
  {
    date: "12/05/2025 10:00 AM EST",
    title: "Stay informed.",
    url: "/events/2",
  },
  {
    date: "12/08/2025 10:00 AM EDT",
    title: "Sustainable value creation.",
    url: "/events/3",
  },
];

export function LatestEvents() {
  return (
    <section className="bg-white w-full mx-auto p-6 md:p-12 py-8 md:py-16 text-neutral-500">
      <div className="max-w-7xl mx-auto text-left flex flex-col gap-8 md:gap-16 md:flex-row justify-between pb-6">
        <div className="w-full ">
          <h2 className="text-2xl md:text-4xl uppercase mb-6">
            MESSAGE FROM CEO
          </h2>
          <iframe
            className="max-w-xl aspect-video "
            src="https://www.youtube-nocookie.com/embed/upxNQzdP9Is"
            title="Message from CEO"
            referrerPolicy="strict-origin-when-cross-origin"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
        <div className="w-full ">
          <h2 className="text-2xl md:text-4xl uppercase mb-6">LATEST EVENTS</h2>
          <ul className="flex flex-col w-full justify-evenly gap-8 ">
            {latestevents.map((news, index) => (
              <li key={index}>
                <p className="text-sm pb-1">{news.date}</p>
                <a
                  href={news.url}
                  className=" font-medium hover:text-sky-700 hover:underline"
                >
                  {news.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
