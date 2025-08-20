const root = document.documentElement;
const themeToggle = document.getElementById('theme-toggle');
const printBtn = document.getElementById('print-btn');
const jsonBtn = document.getElementById('json-btn');
const vcardBtn = document.getElementById('vcard-btn');
const year = document.getElementById('year');

const storedTheme = localStorage.getItem('theme');
if (storedTheme === 'light') {
  root.setAttribute('data-theme', 'light');
}

function setTheme(theme) {
  if (theme === 'light') {
    root.setAttribute('data-theme', 'light');
  } else {
    root.removeAttribute('data-theme');
  }
  localStorage.setItem('theme', theme);
}

themeToggle.addEventListener('click', () => {
  const newTheme = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
  setTheme(newTheme);
});

printBtn.addEventListener('click', () => window.print());

const resume = {
  name: 'Nate N.',
  title: 'IT Support Engineer',
  email: 'nwaezec@gmail.com',
  phone: '+1-817-555-9882',
  location: 'Austin, TX'
};

jsonBtn.addEventListener('click', () => {
  const blob = new Blob([JSON.stringify(resume, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'resume.json';
  a.click();
  URL.revokeObjectURL(url);
});

const vcard = `BEGIN:VCARD\nVERSION:4.0\nFN:${resume.name}\nTITLE:${resume.title}\nEMAIL:${resume.email}\nTEL:${resume.phone}\nADR:;;${resume.location};;;;\nEND:VCARD`;

vcardBtn.addEventListener('click', () => {
  const blob = new Blob([vcard], { type: 'text/vcard' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'contact.vcf';
  a.click();
  URL.revokeObjectURL(url);
});

year.textContent = new Date().getFullYear();
