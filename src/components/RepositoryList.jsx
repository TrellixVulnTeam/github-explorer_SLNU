import { useState } from 'react';

import  { RepositoryItem} from "./RepositoryItem";
import '../styles/repositories.scss'

//https://api.github.com/orgs/Rocketseat/repos

const repository = {
  name: 'unform',
  description: '',
  link: 'https://github.com/unform/unform'
}

export function RepositoryList() {

const [repositories, setRepositories] = useState([])

  return (

  <section className="repository-list">

    <h1>Lista de Repositórios</h1>

    <ul>
     <RepositoryItem repository={repository} />
     <RepositoryItem repository={repository} />
     <RepositoryItem repository={repository} />
     <RepositoryItem repository={repository} />
    </ul>
    </section>
  );


}