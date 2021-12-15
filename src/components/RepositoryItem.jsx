export function RepositoryItem (props) {
  return (


    <li>
    <strong>{props.repository.name}</strong>
    <p>{props.repository.description}</p>
    <p>Forms in React</p>

    <a href={props.repository.html_url}>
      Acessar repositório
    </a>
</li>

  );
}