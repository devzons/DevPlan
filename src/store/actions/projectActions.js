const createProject = project => (dispatch, getState, { getFirestore }) => {
  const fireStore = getFirestore()
  // const { profile } = getState().firebase
  // const authorId = getState().firebase.auth.uid

  fireStore.collection('projects').add({
    ...project,
    authorFirstName: 'Don',
    authorLastName: 'Doe',
    authorId: 12345,
    createdAt: new Date(),
  }).then(() => dispatch({
    type: 'CREATE_PROJECT',
    project,
  })).catch(err => dispatch({
    type: 'CREATE_PROJECT_ERROR',
    err,
  }))
}

export default createProject