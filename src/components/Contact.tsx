import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export function Contact() {
  return (
    <section>
      <Card>
        <CardHeader>
          <CardTitle>Contact</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Email: <a href="mailto:nate@example.com">nate@example.com</a></p>
          <p>Location: Anytown, USA</p>
        </CardContent>
      </Card>
    </section>
  );
}
