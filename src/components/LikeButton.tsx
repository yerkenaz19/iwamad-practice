import { useLikes } from '../context/LikesContext'

function LikeButton() {
  const { likes, addLike } = useLikes()

  return (
    <button type="button" onClick={addLike}>
      {likes > 0 ? `♥ ${likes}` : '♡ Like'}
    </button>
  )
}

export default LikeButton