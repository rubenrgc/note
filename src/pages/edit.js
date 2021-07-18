import React from 'react';
// import GraphQL dependencies
import { useMutation, useQuery } from '@apollo/client';
// import the Note component
// import the NoteForm component

import NoteForm from '../components/NoteForm';
// import the GET_NOTE query
import { GET_NOTE, GET_ME } from '../gql/query';
// import the mutation
import { EDIT_NOTE } from '../gql/mutation';

const EditNote = props => {
  // store the id found in the url as a variable
  const id = props.match.params.id;
  // define our note query
  const { loading, error, data } = useQuery(GET_NOTE, { variables: { id } });
  // fetch the current user's data
  const { data: userdata } = useQuery(GET_ME);
  // define our mutation
  const [editNote] = useMutation(EDIT_NOTE, {
    variables: {
      id
    },
    onCompleted: () => {
      props.history.push(`/note/${id}`);
    }
  });
  if (loading) return 'Loading...';
  // if there is an error fetching the data, display an error message
  if (error) return <p>Error! Note not found</p>;
  // if the current user and the author of the note do not match
  if (userdata.me.id !== data.note.author.id) {
    return <p>You do not have access to edit this note</p>;
  }
  // pass the data to the form component
  // pass the data and mutation to the form component
  return <NoteForm content={data.note.content} action={editNote} />;
};
export default EditNote;
