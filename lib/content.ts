// P32 Cyber Intelligence & Exposure: content from the approved brief, with
// the October 2026 client updates. Split from the company site, which stays
// at p32.ltd.

export const MAIN_SITE = "https://p32.ltd";

export const contact = {
  address: "HaNechoshet 3, Tel Aviv",
  email: "contact@p32.ltd",
  phone: "+972 3 653 0997",
  phoneHref: "tel:+97236530997",
  emailHref: "mailto:contact@p32.ltd",
};

export type Person = {
  name: string;
  roles: string[];
  portrait: string;
};

// The two cyber leads, roles as on the company site (October 2026).
export const cyberLeads = {
  title: "Cyber Leadership & Strategic Advisory",
  people: [
    { name: "Dana Toren", roles: ["Head of Cyber"], portrait: "dana-toren" },
    { name: "Yuval Segev", roles: ["Senior Advisor, National-Level Cyber Strategy"], portrait: "yuval-segev" },
  ] satisfies Person[],
};

export const cyber = {
  label: "Cyber Intelligence & Exposure",
  headline: "Intelligence that ends in a decision.",
  intro:
    "P32 works with governments, national cyber agencies and critical-sector operators. We track the adversaries that target you, test whether they can actually reach you, and tell you what to do first. Then we build that capability inside your organization, so you can run it yourself.",
  problem: {
    title: "The Problem",
    lead: "Most organizations already pay for threat intelligence. They get feeds, indicators and actor reports. What they don't get is an answer to three questions:",
    questions: [
      "Which of these threats can actually reach us?",
      "What do we fix, block or test first?",
      "Can we do this ourselves next year?",
    ],
  },
  different: {
    title: "How P32 Is Different",
    typicalLabel: "Typical CTI Provider",
    p32Label: "P32",
    rows: [
      ["Feeds and reports", "A prioritized list of actions"],
      ["Generic threat picture", "Mapped to your assets, sector and geography"],
      ["Risk stays on paper", "Risk tested through hunting, attack-path analysis and red teaming"],
      ["Its own data source", "Technical, dark-web, OSINT, partner and sector sources combined"],
      ["Proprietary platform, annual licence", "A system built on open-source tools, customized for you and owned by you"],
      ["Permanent dependence", "A defined path to running it in-house"],
    ] as const,
  },
  whoWeAre: {
    title: "Who We Are",
    lead: "Our team built and led national CERTs, SOCs and incident response operations.",
    body: "We know how attackers choose targets, build infrastructure and move inside networks. We also know how a defender turns that knowledge into action under pressure.",
  },
  howWeWork: {
    title: "How We Work",
    stages: [
      { name: "Collect", detail: "from multiple sources" },
      { name: "Map", detail: "threats to your assets and mission" },
      { name: "Prioritize", detail: "by intent, exploitability and asset criticality" },
      { name: "Validate", detail: "with hunting and red teaming" },
      { name: "Act", detail: "what to block, patch, hunt, escalate, and what to brief to leadership" },
    ],
  },
  deliver: {
    title: "What We Deliver",
    groups: [
      {
        name: "Know the adversary",
        items: [
          "Threat actor tracking and profiling",
          "Attack infrastructure tracking and attribution (hosting, location, ownership)",
          "Monitoring of leaks, influence operations and hostile narratives",
        ],
      },
      {
        name: "Know your exposure",
        items: ["External attack surface mapping", "Continuous threat exposure management (CTEM)"],
      },
      {
        name: "Test and fix",
        items: [
          "Threat hunting",
          "Penetration testing, red teaming and attack-path analysis",
          "Action lists for SOC and IT teams",
          "Executive briefings",
        ],
      },
      {
        name: "Be ready",
        items: ["DDoS preparedness", "Incident response and crisis exercises", "Advisory for national cyber programs"],
      },
    ],
  },
  engagement: {
    title: "Engagement Path",
    stages: [
      { name: "Foundation", detail: "Map needs, assets and attack surface. Select tools. Set up collection." },
      { name: "Fusion", detail: "Connect sources, build actor profiles, detect recurring attack patterns." },
      { name: "Operation", detail: "Integrate with your SOC and CERT workflows. Run continuous testing and automation." },
      { name: "Handover", detail: "Train your team and transfer methods and tools until you run it on your own." },
    ],
    scaleStart: "Built with P32",
    scaleEnd: "Run by your team",
  },
};
