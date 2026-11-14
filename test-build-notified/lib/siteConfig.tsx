// This component is used to render the navigation links for the application. It takes in several props that define the labels and URLs for each link. If no props are provided, it defaults to a set of predefined labels and URLs.
export const siteConfig = {

  navigation: {
    overview: {
      label: "OVERVIEW",
      href: "/",
      description:
        ".",
    },
    financials: {
      label: "FINANCIALS",
      href: "/financials",
      description:
        ".",
    },
    newsandegm: {
      label: "NEWS AND EGM",
      href: "/news-and-esg",
      description:
        ".",
    },
    leadershipandgovernance: {
      label: "LEADERSHIP AND GOVERNANCE",
      href: "/leadership-and-governance",
      description:
        ".",
    },
    faqsandresources: {
      label: "FAQS AND RESOURCES",
      href: "/faqs-and-resources",
      description:
        ".",
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
