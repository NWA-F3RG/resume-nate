// ---- Theme toggle with persistence ----
const root = document.documentElement;
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const saved = localStorage.getItem('theme');
if (saved === 'light') root.setAttribute('data-theme','light');

function flipIcon(){
  // simple icon swap by rotating path (kept minimal)
  themeIcon.style.transform = root.getAttribute('data-theme') === 'light' ? 'rotate(180deg)' : 'rotate(0deg)';
}
flipIcon();

themeToggle?.addEventListener('click', () => {
  const isLight = root.getAttribute('data-theme') === 'light';
  if (isLight) {
    root.removeAttribute('data-theme');
    localStorage.setItem('theme','dark');
  } else {
    root.setAttribute('data-theme','light');
    localStorage.setItem('theme','light');
  }
  flipIcon();
});

// ---- Scroll progress ----
const progress = document.getElementById('progress');
addEventListener('scroll', () => {
  const h = document.documentElement;
  const sc = h.scrollTop || document.body.scrollTop;
  const max = h.scrollHeight - h.clientHeight;
  progress.style.width = `${(sc / max) * 100}%`;
});

// ---- Print button ----
document.getElementById('printBtn')?.addEventListener('click', () => window.print());

// ---- Mailto with prefilled subject/body ----
const email = 'nate.nn@example.com';
const subject = encodeURIComponent('Resume inquiry for Nate N.');
const body = encodeURIComponent(`Hi Nate,

I saw your resume site and wanted to connect about a role.

— Your name
Company / Role
Best contact
`);
const mailtoHref = `mailto:${email}?subject=${subject}&body=${body}`;
document.getElementById('mailtoTop').setAttribute('href', mailtoHref);
document.getElementById('mailtoBottom').setAttribute('href', mailtoHref);

// ---- Copy email + toast ----
const copyBtn = document.getElementById('copyEmail');
const toast = document.getElementById('toast');
copyBtn?.addEventListener('click', async () => {
  await navigator.clipboard.writeText(email);
  toast.hidden = false;
  setTimeout(() => toast.hidden = true, 1500);
});

// ---- JSON resume + vCard downloads (client-side blobs) ----
const resume = {
  basics: {
    name: "Nate N.",
    label: "Tier II Technical Support",
    email,
    phone: "+1-817-555-0100",
    location: { city: "Dallas", region: "TX", country: "US" },
    profiles: [
      { network: "GitHub", url: "https://github.com/nate" },
      { network: "LinkedIn", url: "https://www.linkedin.com/in/naten" }
    ],
    summary: "Tier II Support with MSP experience. Strong documentation, fast triage, AD & M365, VPN, Unifi networking."
  },
  metrics: [
    { label: "CSAT", value: "98%" },
    { label: "Faster Resolution", value: "25%" },
    { label: "Users Supported Monthly", value: "500+" },
    { label: "Certs", value: "5+" }
  ],
  skills: ["Ticketing & Triage","Windows/macOS/Linux","AD & M365","VPN","Documentation","Remote Tools"],
  work: [
    {
      name: "Zenguard", position: "Tier II Technical Support",
      location: "Dallas, TX", startDate: "2024-06", endDate: "Present",
      highlights: [
        "Built PowerShell/Bash helpers for setup/cleanup tasks",
        "Troubleshot Windows access, profiles, and policy issues; documented fixes",
        "Device provisioning/compliance via Intune; tuned GPO and baselines",
        "Datto BCDR & Duplicati restores verified",
        "VPN/firewall escalations across SonicWall, Meraki, Ubiquiti, FortiGate"
      ]
    },
    {
      name: "Barrage Systems LLC", position: "Desktop Support Technician",
      location: "DFW, TX", startDate: "2023-12", endDate: "2024-05",
      highlights: [
        "Automated laptop setup to cut migration time",
        "Resolved endpoint/security/performance issues via M365 and NinjaOne",
        "Created step-by-step guides for users and internal teams"
      ]
    }
  ],
  education: [{ institution: "Tarrant County College", area: "Information Technology", studyType: "A.A.S.", endDate: "2022" }],
  certificates: ["CompTIA A+","CompTIA Network+"],
  projects: [
    { name: "Automated Onboarding Scripts", summary: "AD/M365 onboarding with PowerShell" },
    { name: "Self-Service Support Portal", summary: "Freshservice KB + reset tools" }
  ]
};

function setDownloadLink(idPrimary, idSecondary, mime, filename, text) {
  const blob = new Blob([text], { type: mime });
  const url = URL.createObjectURL(blob);
  document.getElementById(idPrimary).href = url;
  document.getElementById(idPrimary).setAttribute('download', filename);
  if (idSecondary) {
    document.getElementById(idSecondary).href = url;
    document.getElementById(idSecondary).setAttribute('download', filename);
  }
}

// JSON resume
setDownloadLink('jsonDownload','jsonDownload2','application/json','resume.json', JSON.stringify(resume, null, 2));

// vCard 3.0 (simple)
const vcard = [
  'BEGIN:VCARD',
  'VERSION:3.0',
  'N:Nwaeze;Nate;;;',
  'FN:Nate N.',
  'TITLE:Tier II Technical Support',
  'TEL;TYPE=CELL:+1-817-555-0100',
  `EMAIL;TYPE=INTERNET:${email}`,
  'ADR;TYPE=WORK:;;Dallas;TX;;;USA',
  'URL:https://www.linkedin.com/in/naten',
  'URL:https://github.com/nate',
  'END:VCARD'
].join('\n');
setDownloadLink('vcardDownload','vcardDownload2','text/vcard','NateN.vcf', vcard);

// ---- Active section highlight (optional styling hook) ----
const sections = [...document.querySelectorAll('main section')];
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){ /* hook point if you add a sticky section nav later */ }
  });
},{threshold:0.4});
sections.forEach(s=>observer.observe(s));

// ---- Year ----
document.getElementById('year').textContent = new Date().getFullYear();
