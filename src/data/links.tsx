import * as linkIcons from "../resource/icons";
const links = [
  {
    name: "Customers",
    base_link: "/customers",
    entries: [
      {
        title: "Users",
        icon: <linkIcons.UsersSVG />,
        link: "/users",
      },
      {
        title: "Guarantors",
        icon: <linkIcons.GuarantorsSVG />,
        link: "/guarantors",
      },
      {
        title: "Loans",
        icon: <linkIcons.LoansSVG />,
        link: "/loans",
      },
      {
        title: "Decision Model",
        icon: <linkIcons.DecisionSVG />,
        link: "/decision-model",
      },
      {
        title: "Savings",
        icon: <linkIcons.SavingsSVG />,
        link: "/savings",
      },
      {
        title: "Loan Requests",
        icon: <linkIcons.LoanReqSVG />,
        link: "/loan-requests",
      },
      {
        title: "WhiteList",
        icon: <linkIcons.WhiteListSVG />,
        link: "/whitelist",
      },
      {
        title: "Karma",
        icon: <linkIcons.KarmaSVG />,
        link: "/karma",
      },
    ],
  },
  {
    name: "Businesses",
    base_link: "/businesses",
    entries: [
      {
        title: "Organization",
        icon: <linkIcons.OrgSVG />,
        link: "/organization",
      },
      {
        title: "Loan Products",
        icon: <linkIcons.LoanProductSVG />,
        link: "/loan",
      },
      {
        title: "Savings Product",
        icon: <linkIcons.SavingsProductSVG />,
        link: "/savins",
      },
      {
        title: "Fees and Charges",
        icon: <linkIcons.FeesSVG />,
        link: "/fees",
      },
      {
        title: "Transactions",
        icon: <linkIcons.TransactionsSVG />,
        link: "/transactions",
      },
      {
        title: "Services",
        icon: <linkIcons.ServicesSVG />,
        link: "/services",
      },
      {
        title: "Service Account",
        icon: <linkIcons.ServiceAccountSVG />,
        link: "/service-account",
      },
      {
        title: "Settlements",
        icon: <linkIcons.SettleMentSVG />,
        link: "/settlements",
      },
      {
        title: "Reports",
        icon: <linkIcons.ReportSVG />,
        link: "/fees",
      },
    ],
  },
  {
    name: "Settings",
    base_link: "/settings",
    entries: [
      {
        title: "Preferences",
        icon: <linkIcons.preferenceSVG />,
        link: "/preferences",
      },
      {
        title: "Fees and Pricing",
        icon: <linkIcons.FeesSVG />,
        link: "/fees-and-pricing",
      },
      {
        title: "Audit",
        icon: <linkIcons.AuditSVG />,
        link: "/audit",
      },
    ],
  },
];

export interface Link {
  name: string;
  base_link: string;
  entries: {
    title: string;
    icon: JSX.Element;
    link: string;
  }[];
}
export default links;
