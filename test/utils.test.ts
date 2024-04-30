import { expect, test } from 'vitest'
import { cn } from '../src/lib/utils'

test('combine class names', () => {
	expect(cn('p-3 border bg-white', 'm-2 text-black')).toBe('p-3 border bg-white m-2 text-black')
})
