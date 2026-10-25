import { useState } from 'react'
import type { CampusEvent } from '../data/events'
import {
  validateSignup,
  type SignupValues,
} from '../lib/validateSignup'
import TextField from './ui/TextField'
import Button from './ui/Button'

type EventSignupFormProps = {
  event: CampusEvent
}

function EventSignupForm({
  event,
}: EventSignupFormProps) {
  const [seatsLeft, setSeatsLeft] = useState(event.seats)

  const [values, setValues] = useState<SignupValues>({
    fullName: '',
    email: '',
    tickets: '1',
  })

  const [touched, setTouched] = useState<
    Partial<Record<keyof SignupValues, boolean>>
  >({})

  const [submitAttempted, setSubmitAttempted] =
    useState(false)

  const [message, setMessage] = useState('')

  const errors = validateSignup(
    values,
    seatsLeft,
  )

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement>,
  ) {
    const { name, value } = event.target

    setValues((current) => ({
      ...current,
      [name]: value,
    }))

    setMessage('')
  }

  function handleSubmit(
    event: React.FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault()

    setSubmitAttempted(true)

    const currentErrors = validateSignup(
      values,
      seatsLeft,
    )

    if (Object.keys(currentErrors).length > 0) {
      return
    }

    const tickets = Number(values.tickets)

    setSeatsLeft((current) => current - tickets)

    setMessage(
      `Booked: ${tickets} for ${values.fullName.trim()}.`,
    )

    setValues({
      fullName: '',
      email: '',
      tickets: '1',
    })

    setTouched({})
    setSubmitAttempted(false)
  }

  return (
    <>
      <p>Seats left: {seatsLeft}</p>

      {message && (
        <p role="status">
          {message}
        </p>
      )}

      <form
        className="form"
        onSubmit={handleSubmit}
        noValidate
      >
        <TextField
          label="Full name"
          name="fullName"
          value={values.fullName}
          onChange={handleChange}
          onBlur={() =>
            setTouched((current) => ({
              ...current,
              fullName: true,
            }))
          }
          error={
            (touched.fullName || submitAttempted)
              ? errors.fullName
              : undefined
          }
        />

        <TextField
          label="Email"
          name="email"
          type="email"
          value={values.email}
          onChange={handleChange}
          onBlur={() =>
            setTouched((current) => ({
              ...current,
              email: true,
            }))
          }
          error={
            (touched.email || submitAttempted)
              ? errors.email
              : undefined
          }
        />

        <TextField
          label="Tickets"
          name="tickets"
          type="number"
          min={1}
          max={4}
          value={values.tickets}
          onChange={handleChange}
          onBlur={() =>
            setTouched((current) => ({
              ...current,
              tickets: true,
            }))
          }
          error={
            (touched.tickets || submitAttempted)
              ? errors.tickets
              : undefined
          }
        />

        <Button type="submit">
          Book
        </Button>
      </form>
    </>
  )
}

export default EventSignupForm