import ProjectCard from "@/components/ProjectCard";
import Link from "next/link";

export default function Projects() {
  return (
    <section id="projects" className="py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
          Projects
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Link href="/gantt">
          <ProjectCard
            title="G4NTT - AI Business Action Plan Generator"
            description="Web app for business action plan generation using a Gantt chart. Placed 2nd in Luddy hackathon 2024. Made with Sky Angeles and Nicholas Goh."
            image="/gantt-chart.png"
            link="https://github.com/skaiiFlakes/Luddy-Hackathon-Fall-2024"
            tags={["Next.js", "AI", "Gantt Charts"]}
          />
            </Link>
            <Link href="/matrixpracticer">
          <ProjectCard
            title="Matrix Reduction Practicer"
            description="A web app to help students practice row reduction of matrices, a fundamental skill in linear algebra."
            image="/matrixss.png"
            link="https://github.com/conthom/Matrix-reduction-practice-platform"
            tags={["Next.js", "Linear Algebra", "Education"]}
          />
          </Link>
          <Link href="/groceryapp">
          <ProjectCard
            title="Community Grocery List App"
            description="A grocery list Android app featuring seven screens for efficient list management and sharing."
            image="/grocerylistss.png"
            link="https://github.com/conthom/App-dev/tree/main/Grocery%20List%20App"
            tags={["Android", "Kotlin", "Community"]}
          />
          </Link>
        </div>
      </div>
    </section>
  );
}
