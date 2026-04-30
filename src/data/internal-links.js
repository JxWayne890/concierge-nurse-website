// Maps each resource page to its recommended related resources for the "Related Resources" section
// Format: { title, description, link, category }

export const internalLinks = {
  // Pillar Guides
  '/resources/what-is-a-concierge-nurse': [
    { title: 'How to Start a Concierge Nursing Business', description: 'Complete step-by-step guide to launching your practice.', link: '/resources/how-to-start-a-concierge-nursing-business', category: 'Pillar Guide' },
    { title: 'Toolkits & Resources', description: 'Self-paced templates for building your business foundation.', link: '/toolkits', category: 'Resources' },
    { title: 'Concierge vs. Private Duty vs. Home Health', description: 'Understand the key differences between models.', link: '/resources/concierge-nursing-vs-private-duty-vs-home-health', category: 'Comparison' },
  ],
  '/resources/how-to-start-a-concierge-nursing-business': [
    { title: 'Startup Costs Breakdown', description: 'What you will actually spend to launch.', link: '/resources/concierge-nursing-startup-costs', category: 'Financial' },
    { title: 'HIPAA Compliance Guide', description: 'What you need to know about HIPAA.', link: '/resources/hipaa-compliance-for-concierge-nurses', category: 'Legal' },
    { title: 'How to Get Your First Clients', description: 'Proven client acquisition strategies.', link: '/resources/how-to-get-concierge-nursing-clients', category: 'Marketing' },
  ],
  '/resources/hipaa-compliance-for-concierge-nurses': [
    { title: 'HIPAA for Cash-Pay Practices', description: 'Are you a covered entity?', link: '/resources/legal/hipaa-cash-pay-nursing-practice', category: 'Legal' },
    { title: 'HIPAA-Compliant Email', description: 'Set up secure email systems.', link: '/resources/guides/hipaa-compliant-email-nursing', category: 'Guide' },
    { title: 'Client Contracts', description: 'Include HIPAA acknowledgment in agreements.', link: '/resources/legal/concierge-nursing-client-contracts', category: 'Legal' },
  ],
  '/resources/concierge-nurse-pricing-guide': [
    { title: 'Income Breakdown', description: 'How much do concierge nurses make?', link: '/resources/financial/concierge-nurse-income', category: 'Financial' },
    { title: 'Revenue Models', description: 'Hourly vs. packages vs. retainer.', link: '/resources/financial/concierge-nursing-revenue-models', category: 'Financial' },
    { title: 'Service Packages', description: 'Design packages that sell.', link: '/resources/operations/concierge-nursing-service-packages', category: 'Operations' },
  ],
  '/resources/concierge-nursing-vs-private-duty-vs-home-health': [
    { title: 'What Is a Concierge Nurse?', description: 'The definitive guide.', link: '/resources/what-is-a-concierge-nurse', category: 'Pillar Guide' },
    { title: 'Leave Bedside Nursing', description: 'How to make the transition.', link: '/resources/career/leave-bedside-nursing-start-business', category: 'Career' },
    { title: 'Concierge Nursing FAQ', description: 'Answers to common questions.', link: '/resources/concierge-nursing-faq', category: 'Pillar Guide' },
  ],
  '/resources/how-to-get-concierge-nursing-clients': [
    { title: 'Physician Referral Relationships', description: 'Build partnerships with doctors.', link: '/resources/marketing/physician-referral-relationships', category: 'Marketing' },
    { title: 'Google Business Profile', description: 'Get found in local search.', link: '/resources/marketing/concierge-nurse-google-business-profile', category: 'Marketing' },
    { title: 'Social Media Marketing', description: 'Social strategies for nurses.', link: '/resources/marketing/concierge-nurse-social-media', category: 'Marketing' },
  ],
  '/resources/concierge-nursing-startup-costs': [
    { title: 'First Year Finances', description: 'Financial planning for year one.', link: '/resources/financial/concierge-nursing-first-year-finances', category: 'Financial' },
    { title: 'LLC vs. PLLC', description: 'Choose the right entity structure.', link: '/resources/legal/nursing-business-llc-vs-pllc', category: 'Legal' },
    { title: 'Insurance Requirements', description: 'What coverage you need.', link: '/resources/legal/concierge-nurse-insurance-requirements', category: 'Legal' },
  ],
  '/resources/concierge-nurse-business-plan': [
    { title: 'How to Start a Concierge Nursing Business', description: 'Complete startup guide.', link: '/resources/how-to-start-a-concierge-nursing-business', category: 'Pillar Guide' },
    { title: 'Startup Costs', description: 'Know your numbers.', link: '/resources/concierge-nursing-startup-costs', category: 'Financial' },
    { title: 'Marketing Your Business', description: 'Build your marketing plan.', link: '/resources/marketing/concierge-nursing-business-marketing', category: 'Marketing' },
  ],
  '/resources/concierge-nursing-faq': [
    { title: 'What Is a Concierge Nurse?', description: 'The full guide.', link: '/resources/what-is-a-concierge-nurse', category: 'Pillar Guide' },
    { title: 'How to Start', description: 'Step-by-step startup guide.', link: '/resources/how-to-start-a-concierge-nursing-business', category: 'Pillar Guide' },
    { title: 'Pricing Guide', description: 'How to set your rates.', link: '/resources/concierge-nurse-pricing-guide', category: 'Pillar Guide' },
  ],
};

// Default related resources for pages not explicitly mapped
export const defaultRelated = [
  { title: 'How to Start a Concierge Nursing Business', description: 'Complete step-by-step startup guide.', link: '/resources/how-to-start-a-concierge-nursing-business', category: 'Pillar Guide' },
  { title: 'Toolkits & Resources', description: 'Self-paced templates and resources.', link: '/toolkits', category: 'Resources' },
  { title: 'Concierge Nursing FAQ', description: 'Answers to all your questions.', link: '/resources/concierge-nursing-faq', category: 'Pillar Guide' },
];

export function getRelatedResources(path) {
  return internalLinks[path] || defaultRelated;
}
