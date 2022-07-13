import logo from './logo.svg';
import './App.css';
import { gql, useQuery } from '@apollo/client'

const QUERY = gql`
  query {
    allRecipes {
      name,
      ingredients
    }
  }
`;

const App = () => {
  const result = useQuery(QUERY)

  if (result.loading)  {
    return <div>loading...</div>
  }

  return (
    <div>
      {result.data.allRecipes[0].name}
      <ul>
        {result.data.allRecipes.map( (r) => r.ingredients.map( (i, index) => <li key={index}>{i}</li>))}
      </ul>
    </div>
  )
}

export default App;