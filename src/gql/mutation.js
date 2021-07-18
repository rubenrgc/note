import { gql } from '@apollo/client';
const EDIT_NOTE = gql`
  mutation updateNote($id: ID!, $content: String!) {
    updateNote(id: $id, content: $content) {
      id
      content
      createdAt
      favoriteCount
      favoritedBy {
        id
        username
      }
      author {
        username
        id
      }
    }
  }
`;
const DELETE_NOTE = gql`
  mutation deleteNote($id: ID!) {
    deleteNote(id: $id)
  }
`;
// update to include DELETE_NOTE

// add the TOGGLE_FAVORITE mutation
const TOGGLE_FAVORITE = gql`
  mutation toggleFavorite($id: ID!) {
    toggleFavorite(id: $id) {
      id
      favoriteCount
    }
  }
`;
// update to include TOGGLE_FAVORITE
export { EDIT_NOTE, DELETE_NOTE, TOGGLE_FAVORITE };
