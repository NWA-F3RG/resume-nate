import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export function Skills() {
  return (
    <section>
      <Card>
        <CardHeader>
          <CardTitle>Skills</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="grid grid-cols-2 gap-2">
            <li>JavaScript / TypeScript</li>
            <li>React / Next.js</li>
            <li>Docker & Kubernetes</li>
            <li>Linux & Automation</li>
            <li>CI/CD Pipelines</li>
            <li>Cloud (AWS, Azure)</li>
          </ul>
        </CardContent>
      </Card>
    </section>
  );
}
