import React, { useState, useEffect } from "react";

const githubRepoEndpoint = "https://api.github.com/users/t0mashawk/repos";
const fetchOptions = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
};

type GithubRepo = {
  name: string;
  html_url: string;
};

const fetchRepos = async (): Promise<any> => {
  try {
    const result = await fetch(githubRepoEndpoint, fetchOptions);
    return await result.json();
  } catch (error) {
    console.log(error);
  }
};

function App() {
  const [repos, setRepos] = useState<GithubRepo[]>([]);
  const [serchTerm, setSerchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRepos().then((repos) => {
      setRepos(repos);
      setLoading(false);
    });
  }, []);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSerchTerm(event.currentTarget.value);
  };

  return (
    <div>
      <input value={serchTerm} onChange={handleInputChange}></input>
      {loading ? (
        <p>Loading repos...</p>
      ) : (
        <ul>
          {repos
            .filter((repo: GithubRepo) =>
              repo.name.toLowerCase().includes(serchTerm.toLowerCase())
            )
            .map((repo: GithubRepo, index) => (
              <li key={index}>
                <a href={repo.html_url}>{repo.name}</a>
              </li>
            ))}
        </ul>
      )}
    </div>
  );
}

export default App;
