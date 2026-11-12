/** Public artifact inspected during the audit; no ownership or production adoption claim. */
export const CUSTOS = {
  name: "Custos",
  href: "https://github.com/sanjaynandanj/custos",
  description: "A public project for runtime policy checks and signed decision records around MCP tool calls. The repository includes Python and Node implementations, policy examples and documentation.",
  tags: ["MCP", "Policy enforcement", "Audit records"],
};
export const LAB_REFERENCES = [
  { title: "Runtime policy enforcement", body: "Review how tool calls are checked against explicit policies before execution.", href: CUSTOS.href },
  { title: "Human approval boundaries", body: "Inspect a simulated operations console with approval and deny paths. It is a demo, not a customer deployment.", href: `${CUSTOS.href}/tree/main/examples/webmcp-control-room` },
  { title: "Design and security notes", body: "Read the public design documents and review the project's stated scope and limitations.", href: `${CUSTOS.href}/tree/main/docs/webmcp` },
];
