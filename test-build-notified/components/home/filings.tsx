
"use client";

const filings = [
  {
    date: "05/02/2025",
    form: "SCHEDULE 13G/A",
    description: "SCHEDULE 13G/A - Description",
    formats: ["PDF", "XLS", "RTF", "HTML"],
  },
  {
    date: "04/18/2025",
    form: "20-F",
    description:
      "Registration of securities of foreign private issuers pursuant to section 12(b) or (g)",
    formats: ["PDF", "XLS", "RTF", "XSD", "HTML"],
  },
  {
    date: "11/08/2024",
    form: "SC 13G/A",
    description: "An amendment to the SC 13G filing",
    formats: ["PDF", "XLS", "RTF", "HTML"],
  },
];

export function Filings() {
  return (
    <section className="w-full bg-linear-to-r from-sky-800 via-sky-900 to-sky-950 mx-auto p-6 md:p-12 ">
      <div className="max-w-7xl mx-auto  text-white">

        {/* Heading */}
        <h2 className="mb-[48px] text-center text-[36px] font-normal leading-[43px] uppercase">
          FILINGS
        </h2>

        {/* Filings Table */}
        <div className="w-full overflow-x-auto">
          <table className="w-full min-w-[900px] table-fixed border-collapse text-left text-[16px]">
            <colgroup>
              <col className="w-[19%]" />
              <col className="w-[17%]" />
              <col className="w-[45%]" />
              <col className="w-[19%]" />
            </colgroup>

            <thead>
              <tr className="border-b border-white/70 [&>th]:px-2 [&>th]:pb-5 [&>th]:font-semibold">
                <th>
                  Filing date
                </th>
                <th >
                  Form
                </th>
                <th >
                  Description
                </th>
                <th>
                  View
                </th>
              </tr>
            </thead>

            <tbody>
              {filings.map((filing) => (
                <tr
                  key={filing.date}
                  className="border-b border-white/20 [&>td]:align-middle [&>td]:px-2 [&>td]:py-4"
                >
                  <td className=" whitespace-nowrap">
                    {filing.date}
                  </td>

                  <td className="font-semibold whitespace-nowrap">
                    {filing.form}
                  </td>

                  <td className="leading-7.5">
                    {filing.description}
                  </td>

                <td className="text-center">
                  <div className="flex items-center justify-start gap-1">
                    {filing.formats.map((format) => (
                      <a
                        key={format}
                        href="#"
                        className="flex h-7 items-center justify-center border border-white px-1.5 text-xs leading-none transition-colors hover:bg-white hover:text-slate-900"
                      >
                        {format}
                      </a>
                    ))}
                  </div>
                </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* View All Filings */}
          <a
            href="#"
            className="flex items-center justify-center gap-0.5 text-sm font-medium uppercase transition-opacity hover:opacity-70 px-4 py-2 mt-14"
          >
            VIEW ALL FILINNGS
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
            className="mt-[1px]"
          >
            <path d="M5 12h14" />
            <path d="m13 6 6 6-6 6" />
          </svg>
          </a>

      </div>
    </section>
  );
}
