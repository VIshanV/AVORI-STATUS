// Avori status page config for UptimeFlare (matches the 2026 template format, checked 18 Oct 2026).
// Paste this over uptime.config.ts in the avori-status repo on GitHub and commit.
 
// Don't edit this line
import { MaintenanceConfig, PageConfig, WorkerConfig } from './types/config'
 
const pageConfig: PageConfig = {
  title: 'Avori status',
  links: [
    { link: 'https://avori.org.uk', label: 'avori.org.uk' },
    { link: 'mailto:hello@avori.org.uk', label: 'Email Avori', highlight: true },
  ],
}
 
const workerConfig: WorkerConfig = {
  monitors: [
    {
      id: 'avori_site',
      name: 'avori.org.uk',
      method: 'GET',
      target: 'https://avori.org.uk/',
      tooltip: 'Avori website',
      statusPageLink: 'https://avori.org.uk',
      expectedCodes: [200],
      timeout: 10000,
      headers: { 'User-Agent': 'Uptimeflare' },
      responseKeyword: 'Avori',
    },
    {
      id: 'avori_forms',
      name: 'Enquiry form handler',
      method: 'GET',
      target: 'https://avori-enquiry.vishan-varsani321.workers.dev/check',
      tooltip: 'Sends website enquiries to Avori',
      expectedCodes: [200],
      timeout: 15000,
      headers: { 'User-Agent': 'Uptimeflare' },
    },
    {
      id: 'jrr_site',
      name: 'jrr.co.uk',
      method: 'GET',
      target: 'https://jrr.co.uk/',
      tooltip: 'JRR Technology (client)',
      statusPageLink: 'https://jrr.co.uk',
      expectedCodes: [200],
      timeout: 10000,
      headers: { 'User-Agent': 'Uptimeflare' },
    },
  ],
  notification: {
    // Phone alerts through ntfy (Vishan's private topic)
    webhook: {
      url: 'https://ntfy.sh/',
      method: 'POST',
      payloadType: 'json',
      payload: {
        topic: 'avori-haudarkahgyl',
        title: 'Avori status',
        message: '$MSG',
        priority: 4,
      },
      timeout: 10000,
    },
    timeZone: 'Europe/London',
    // only alert after 5 minutes down, so one-off blips do not wake anyone
    gracePeriod: 5,
  },
}
 
const maintenances: MaintenanceConfig[] = []
 
// Don't edit this line
export { maintenances, pageConfig, workerConfig }
