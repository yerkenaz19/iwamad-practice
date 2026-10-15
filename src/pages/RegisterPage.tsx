import {
  useState,
  type ChangeEvent,
  type FocusEvent,
  type SubmitEvent,
} from 'react'
import Button from '../components/ui/Button'
import TextField from '../components/ui/TextField'
import {
  validateRegistration,
  type RegistrationValues,
} from '../lib/validateRegistration'

function RegisterPage() {
  const [values, setValues] = useState<RegistrationValues>({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false,
  })

  const [registered, setRegistered] = useState(false)

  const [touched, setTouched] = useState<
    Partial<Record<keyof RegistrationValues, boolean>>
  >({})

  const [submitAttempted, setSubmitAttempted] = useState(false)

  const errors = validateRegistration(values)

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, type, value, checked } = event.target

    setValues((current) => ({
      ...current,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  function handleBlur(event: FocusEvent<HTMLInputElement>) {
    const { name } = event.target

    setTouched((current) => ({
      ...current,
      [name]: true,
    }))
  }

  function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault()

    setSubmitAttempted(true)

    if (Object.keys(errors).length === 0) {
      setRegistered(true)
    }
  }

  if (registered) {
    return (
      <main>
        <p role="status">
          Thanks, {values.fullName.trim()}. You are registered.
        </p>
      </main>
    )
  }

  return (
    <main>
      <h2>Register</h2>

      <form onSubmit={handleSubmit} noValidate className="form">
        <TextField
          name="fullName"
          type="text"
          label="Full name"
          value={values.fullName}
          onChange={handleChange}
          onBlur={handleBlur}
          error={
            touched.fullName || submitAttempted
              ? errors.fullName
              : undefined
          }
        />

        <TextField
          name="email"
          type="email"
          label="Email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          error={
            touched.email || submitAttempted
              ? errors.email
              : undefined
          }
        />

        <TextField
          name="password"
          type="password"
          label="Password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          error={
            touched.password || submitAttempted
              ? errors.password
              : undefined
          }
        />

        <TextField
          name="confirmPassword"
          type="password"
          label="Confirm password"
          value={values.confirmPassword}
          onChange={handleChange}
          onBlur={handleBlur}
          error={
            touched.confirmPassword || submitAttempted
              ? errors.confirmPassword
              : undefined
          }
        />

        <div className="field">
          <label className="check" htmlFor="acceptTerms">
            <input
              id="acceptTerms"
              name="acceptTerms"
              type="checkbox"
              checked={values.acceptTerms}
              onChange={handleChange}
              onBlur={handleBlur}
              aria-invalid={
                touched.acceptTerms || submitAttempted
                  ? errors.acceptTerms
                    ? true
                    : undefined
                  : undefined
              }
            />
            I accept the terms
          </label>

          {(touched.acceptTerms || submitAttempted) &&
            errors.acceptTerms && (
              <p className="field-error">
                {errors.acceptTerms}
              </p>
            )}
        </div>

        <Button type="submit">Create account</Button>
      </form>
    </main>
  )
}

export default RegisterPage