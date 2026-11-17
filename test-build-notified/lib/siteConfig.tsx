// This component is used to render the navigation links for the application. It takes in several props that define the labels and URLs for each link. If no props are provided, it defaults to a set of predefined labels and URLs.
export const siteConfig = {

  navigation: {
    overview: {
      label: "OVERVIEW",
      href: "/",
      description:
        ".",
      children: [],
    },
    financials: {
      label: "FINANCIALS",
      description:
        ".",
      children: [
        { label: "Financial Results", href: "/financials/results" },
        { label: "Annual Reports", href: "/financials/annual-reports" },
        {
          label: "Shareholder Information",
          href: "/financials/shareholder-information",
        },
      ],
    },
    newsandegm: {
      label: "NEWS AND EGM",
      description:
        ".",
      children: [
        { label: "Latest News", href: "/news-and-esg/news" },
        { label: "Events and Presentations", href: "/news-and-esg/events" },
        { label: "EGM Information", href: "/news-and-esg/egm" },
      ],
    },
    leadershipandgovernance: {
      label: "LEADERSHIP AND GOVERNANCE",
      description:
        ".",
      children: [
        { label: "Board of Directors", href: "/leadership-and-governance/board" },
        {
          label: "Corporate Governance",
          href: "/leadership-and-governance/governance",
        },
        {
          label: "Board Committees",
          href: "/leadership-and-governance/committees",
        },
      ],
    },
    faqsandresources: {
      label: "FAQS AND RESOURCES",
      description:
        ".",
      children: [
        { label: "Frequently Asked Questions", href: "/faqs-and-resources/faqs" },
        { label: "Useful Resources", href: "/faqs-and-resources/resources" },
        { label: "Contact Information", href: "/faqs-and-resources/contact" },
      ],
    }

  },

  contacts: {
    address: "Address: The Company",
    address2: "11-11 11th AVE",
    address3: "New York, New York",
    telephone: "+11234567",
    emailLink: "mailto:info@thecompany.com",
    rights: "© 2025 The Company",
  },
  quicklinks: {
    informationrequestform: {
      label: "INFORMATION REQUEST FORM",
      href: "/information-request-form",
      description:
        ".",
    }
  }
}
