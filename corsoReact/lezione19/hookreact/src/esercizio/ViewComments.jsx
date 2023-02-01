import React from 'react'

export default function ViewComments({comments}) {
  return (
    <div>
        {comments.map(comment => <h2>{comment.name} ({comment.email})</h2>)}
    </div>
  )
}
