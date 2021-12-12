import { useParams } from "react-router-dom"

function Show() {
  const params = useParams();
  let postId = params.postId;
  return (
    <div>
      <h1>Show : {postId}</h1>
    </div>
  )
}

export default Show
