import { describe, expect, test } from 'vitest'
import {
  validateSignup,
  type SignupValues,
} from './validateSignup'

const valid: SignupValues = {
  fullName: 'Aliya Nurlanovna',
  email: 'aliya@example.com',
  tickets: '2',
}

describe('validateSignup', () => {
  test('valid values return no errors', () => {
    expect(validateSignup(valid, 10)).toEqual({})
  })

  test('tickets 0 returns an error', () => {
    expect(
      validateSignup(
        { ...valid, tickets: '0' },
        10,
      ),
    ).toEqual({
      tickets: 'Choose 1 to 4 tickets',
    })
  })

  test('tickets 5 returns an error', () => {
    expect(
      validateSignup(
        { ...valid, tickets: '5' },
        10,
      ),
    ).toEqual({
      tickets: 'Choose 1 to 4 tickets',
    })
  })

  test('tickets 1.5 returns an error', () => {
    expect(
      validateSignup(
        { ...valid, tickets: '1.5' },
        10,
      ),
    ).toEqual({
      tickets: 'Choose 1 to 4 tickets',
    })
  })

  test('tickets 4 is valid', () => {
    expect(
      validateSignup(
        { ...valid, tickets: '4' },
        10,
      ),
    ).toEqual({})
  })

  test('tickets cannot be greater than seats left', () => {
    expect(
      validateSignup(
        { ...valid, tickets: '3' },
        2,
      ),
    ).toEqual({
      tickets: 'Only 2 seats left',
    })
  })
})