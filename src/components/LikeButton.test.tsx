import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { expect, test } from 'vitest'
import { LikesProvider } from '../context/LikesContext'
import LikeButton from './LikeButton'

test('like button changes visible text when clicked', async () => {
  const user = userEvent.setup()

  render(
    <LikesProvider>
      <LikeButton />
    </LikesProvider>,
  )

  const button = screen.getByRole('button', { name: '♡ Like' })

  await user.click(button)

  expect(button).toHaveTextContent('♥ 1')
})