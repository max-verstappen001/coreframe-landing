export const FAQ_ITEMS = [
  {
    q: "Can this run fully offline / air-gapped?",
    a: "Yes, subject to your environment. Air-gapped deployment is one of the core patterns we design for, not an edge case.",
  },
  {
    q: "Do we need our own GPUs?",
    a: "Not necessarily — on-prem, private cloud or hybrid are all options. We size the infrastructure to the workload during scoping.",
  },
  {
    q: "Open-source or commercial models?",
    a: "We select per requirement. Private deployment generally favors open-weight models you can host yourself, but the right choice depends on the task.",
  },
  {
    q: "Can our data be used to train anyone else's model?",
    a: "In private deployments, your data stays in your environment — we design explicitly for that, and data-use terms are governed by the engagement agreement.",
  },
];
