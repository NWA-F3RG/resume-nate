import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export function Experience() {
  return (
    <section>
      <Card>
        <CardHeader>
          <CardTitle>Experience</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3>Senior Developer, Tech Corp</h3>
            <p>2021 - Present</p>
            <ul className="list-disc ml-6">
              <li>Developed full-stack applications with React and Node.js.</li>
              <li>Managed cloud infrastructure on AWS and Dockerized services.</li>
            </ul>
          </div>
          <div>
            <h3>Systems Engineer, IT Solutions</h3>
            <p>2018 - 2021</p>
            <ul className="list-disc ml-6">
              <li>Implemented CI/CD pipelines improving deployment speed.</li>
              <li>Automated infrastructure using Ansible and Terraform.</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
