import React, { useState, useEffect } from "react";
import List from "../../components/organisms/List/List.component";
import GitHubRepos from "../../components/templates/GitHubRepos/GitHubRepos.component";
import Button from "../../components/atoms/Button/Button.components";
import Input from "../../components/atoms/Input/Input.component"

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


export function filterRepos(repos:any[], searchTerm:string){
    return repos.filter((repo:any) => repo.name.toLowerCase().includes(searchTerm.toLowerCase()))
}


function HomeComponent() {
  const [repos, setRepos] = useState<GithubRepo[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRepos().then((repos) => {
      setRepos(repos);
      setLoading(false);
    });
  }, []);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.currentTarget.value);
  };

  return (
    <GitHubRepos>
      <Input value={searchTerm} onChange={handleInputChange}/>
      {loading ? (
        <p>Loading repos...</p>
      ) : (
     
        <List items={filterRepos(repos,searchTerm)}/>
      )}
      <Button color="navy" text="Test"></Button>
    </GitHubRepos>
  );
}

export default HomeComponent;
