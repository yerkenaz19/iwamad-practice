import { useLikes } from '../context/LikesContext'
import Button from './ui/Button'

export default function LikeButton() {
  const { likes, addLike } = useLikes()

  return (
    <Button
      variant="primary"
      onClick={addLike}
      aria-label={`Like (${likes} likes)`}
    >
      ♥ {likes}
    </Button>
  )
}