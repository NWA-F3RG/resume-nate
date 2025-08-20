import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export function Projects() {
  return (
    <section>
      <Card>
        <CardHeader>
          <CardTitle>Projects</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3>Homelab Automation</h3>
            <p>Automated home server setup using Ansible, Proxmox, and Kubernetes.</p>
          </div>
          <div>
            <h3>Portfolio Website</h3>
            <p>Built a personal portfolio with Next.js and deployed on Vercel.</p>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
