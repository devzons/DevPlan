import React from 'react'

const ProjectDetails = (props) => {
  const id = props.match.params.id
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="cart-content">
          <span className="card-title">Project Title - {id}</span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio architecto perferendis quaerat iusto consequuntur odit temporibus fugiat pariatur laboriosam quae esse porro dicta placeat ducimus dolores ad, obcaecati voluptate a!</p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by The Dev</div>
          <div>Nov 2, 2AM</div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails
