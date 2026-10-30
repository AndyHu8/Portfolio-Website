
import { useEffect, useState } from "react";
import projectData from "./ProjectData";
import "./Projekte.css";

const GITHUB_USERNAME = "AndyHu8";

function Projekte() {
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  //Fetch ausgewählte Repos von GitHub & packe in "repositories" (Alle, die in projectData befinden)
  useEffect(() => {
    async function fetchRepositories() {
      try {
        const results = await Promise.all(
          projectData.map(async (project) => {
            const response = await fetch(
              `https://api.github.com/repos/${GITHUB_USERNAME}/${project.repo}`
            );

            if (!response.ok) {
              throw new Error(`Fehler bei diesem Repo: ${project.repo}`);
            }

            return await response.json();
          })
        );

        setRepositories(results);
      } catch (err) {
        console.error("GitHub API:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchRepositories();
  }, []);

  if (loading) return <p>Projekte werden geladen ...</p>;
  if (error) return <p>Projekte konnten nicht geladen werden.</p>;

  return (
    <section className="projekte-wrapper" id="projekte">
      <h1>Meine Projekte</h1>

      <div className="projekte-grid">
        {projectData.map((project) => {
          const repository = repositories.find(
            (repo) => repo.name === project.repo
          );

          if (!repository) return null;

          //Darstellung der Projekte
          return (
            <article className="projekte-card" key={project.repo}>
              <img
                src={project.image}
                alt={`Vorschau von ${project.title}`}
                className="projekte-image"
                loading="lazy"
              />

              <div className="projekte-content">
                <h2>{project.title}</h2>

                <p>{project.description}</p>

                <div className="projekte-tags">
                  {project.technologies.map((technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="projekte-links">
                  <a
                    href={repository.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub ↗
                  </a>

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo ↗
                    </a>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Projekte;
