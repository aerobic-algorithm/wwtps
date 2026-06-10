export const posts = [
  {
    slug: 'reduce-plant-downtime',
    title: '5 steps to reduce plant downtime',
    summary: 'A structured process for prioritizing performance improvements, from sampling to operator training.',
    content:
      'Unplanned downtime at a wastewater treatment plant can ripple into permit violations, process upsets, and costly emergency repairs. Over years of commissioning and troubleshooting across East Africa, we have developed a five-step framework that helps plant teams reduce downtime systematically.\n\n' +
      '**1. Baseline the process** — Start by reviewing the last 12 months of operational data: flow rates, influent/effluent characteristics, energy consumption, and chemical usage. This reveals patterns that point to recurring issues rather than one-off events.\n\n' +
      '**2. Identify high-impact risks** — Not all failures are equal. Focus on the equipment and process stages where a failure would most affect effluent quality or regulatory compliance. Aeration systems, chemical dosing pumps, and final clarifiers are frequent candidates.\n\n' +
      '**3. Build a tiered response plan** — Create clear escalation paths. Tier 1: operator-level adjustments (DO setpoints, recycle rates). Tier 2: maintenance interventions (replace diffusers, recalibrate sensors). Tier 3: engineering review (hydraulic rebalancing, control logic updates).\n\n' +
      '**4. Train operators on early warning signs** — The best intervention is the one that happens before a failure. Train operators to recognize subtle indicators: rising SVI, unusual DO profiles, changes in sludge color or odor.\n\n' +
      '**5. Document and iterate** — After each event, conduct a brief review. What was the root cause? Was the response effective? Update your SOPs and response plans accordingly.\n\n' +
      'This framework has helped plants reduce emergency call-outs by over 40% within six months of adoption.',
  },
  {
    slug: 'troubleshooting-aeration-failure',
    title: 'Troubleshooting an aeration failure',
    summary: 'A field-tested checklist for identifying air system, control, and biological risks quickly.',
    content:
      'When dissolved oxygen levels drop unexpectedly, the clock starts ticking. Here is a field-tested checklist we use when called in for aeration troubleshooting.\n\n' +
      '**Step 1: Verify the air delivery system** — Check blower discharge pressure and flow. A drop in pressure with constant flow may indicate a leak or open bypass. High pressure with low flow suggests fouled diffusers or a closed valve.\n\n' +
      '**Step 2: Inspect diffuser condition** — Fine-pore diffusers lose efficiency as they foul. If pressure has crept up over weeks, the diffusers likely need chemical cleaning or replacement. Observations of coarse bubbling at the surface are a telltale sign.\n\n' +
      '**Step 3: Check control logic** — Many plants have automated DO control. Verify that setpoints have not drifted, that the control loop is tuned properly, and that the DO probes are clean and calibrated.\n\n' +
      '**Step 4: Evaluate the biological load** — A sudden increase in organic loading can overwhelm the aeration capacity. Review influent BOD, COD, and flow trends. A slug load from an industrial discharger is a common culprit.\n\n' +
      '**Step 5: Short-term fixes** — While investigating root causes, consider supplemental aeration (portable surface aerators), reducing feed rates, or adding oxygen boost chemicals.\n\n' +
      'Document each finding carefully. Aeration problems are rarely caused by a single factor, and a thorough record helps prevent recurrence.',
  },
  {
    slug: 'commissioning-chemical-dosing',
    title: 'Commissioning upgraded chemical dosing',
    summary: 'How to validate feed strategy, sampling plans, and PLC integration on new treatment systems.',
    content:
      'A chemical dosing upgrade is one of the highest-leverage improvements a plant can make, but poor commissioning can turn it into a reliability headache. Here is our approach.\n\n' +
      '**Pre-commissioning checks** — Before any chemical is introduced, verify: tank construction and lining integrity, pump calibration curves, piping material compatibility, leak detection systems, and secondary containment.\n\n' +
      '**PLC and instrumentation validation** — Test every control loop in manual mode first. Confirm that flow-paced signals are correctly scaled, that alarm setpoints are programmed, and that failsafe logic (high/low flow, low tank level) functions as designed.\n\n' +
      '**Chemical feed validation** — Start at the lowest practical feed rate and ramp up gradually. Use grab samples at the point of application to confirm dosing accuracy, not just pump stroke or VFD speed.\n\n' +
      '**Sampling plan setup** — Establish sampling locations and frequency before commissioning. For coagulant or polymer dosing, jar testing should be repeated daily during the first week to optimize the feed rate as process conditions stabilise.\n\n' +
      '**Operator handover** — Provide at least two full days of hands-on training covering: normal operation, alarm response, calibration procedures, and emergency shutdown. Deliver a commissioning report that includes as-built P&IDs, setpoints, and troubleshooting guides.\n\n' +
      'A well-commissioned chemical dosing system typically achieves target performance within the first week and requires minimal follow-up adjustment.',
  },
]

export function getPostBySlug(slug) {
  return posts.find((p) => p.slug === slug) || null
}
