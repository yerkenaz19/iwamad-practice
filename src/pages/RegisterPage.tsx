import { useState, type ChangeEvent, type SubmitEvent } from 'react'
import Button from '../components/ui/Button'
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

  const errors = validateRegistration(values)

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, type, value, checked } = event.target

    setValues((current) => ({
      ...current,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault()

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
        <div className="field">
          <label htmlFor="fullName">Full name</label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            value={values.fullName}
            onChange={handleChange}
            aria-invalid={errors.fullName ? 'true' : undefined}
          />
          {errors.fullName && (
            <p className="field-error">{errors.fullName}</p>
          )}
        </div>

        <div className="field">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
            aria-invalid={errors.email ? 'true' : undefined}
          />
          {errors.email && (
            <p className="field-error">{errors.email}</p>
          )}
        </div>

        <div className="field">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            value={values.password}
            onChange={handleChange}
            aria-invalid={errors.password ? 'true' : undefined}
          />
          {errors.password && (
            <p className="field-error">{errors.password}</p>
          )}
        </div>

        <div className="field">
          <label htmlFor="confirmPassword">Confirm password</label>
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            value={values.confirmPassword}
            onChange={handleChange}
            aria-invalid={errors.confirmPassword ? 'true' : undefined}
          />
          {errors.confirmPassword && (
            <p className="field-error">{errors.confirmPassword}</p>
          )}
        </div>

        <div className="field">
          <label className="check" htmlFor="acceptTerms">
            <input
              id="acceptTerms"
              name="acceptTerms"
              type="checkbox"
              checked={values.acceptTerms}
              onChange={handleChange}
              aria-invalid={errors.acceptTerms ? 'true' : undefined}
            />
            I accept the terms
          </label>

          {errors.acceptTerms && (
            <p className="field-error">{errors.acceptTerms}</p>
          )}
        </div>

        <Button type="submit">Create account</Button>
      </form>
    </main>
  )
}

export default RegisterPage