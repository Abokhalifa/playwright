// /media/lenovo/f96ce320-8708-4bfa-8573-5adc28f5c715/Playwright/proj4/test.ts
// Small utility to generate random numbers and choices.

export function randomInt(min = 0, max = 100): number {
    if (!Number.isFinite(min) || !Number.isFinite(max)) throw new TypeError('min and max must be numbers')
    if (max < min) [min, max] = [max, min]
    return Math.floor(Math.random() * (max - min + 1)) + min
}

export function randomFloat(min = 0, max = 1): number {
    if (!Number.isFinite(min) || !Number.isFinite(max)) throw new TypeError('min and max must be numbers')
    if (max < min) [min, max] = [max, min]
    return Math.random() * (max - min) + min
}

export function randomBoolean(chanceTrue = 0.5): boolean {
    if (chanceTrue <= 0) return false
    if (chanceTrue >= 1) return true
    return Math.random() < chanceTrue
}

export function randomChoice<T>(arr: T[]): T | undefined {
    if (!Array.isArray(arr) || arr.length === 0) return undefined
    return arr[Math.floor(Math.random() * arr.length)]
}

// Example usage when run directly (ts-node or compiled to JS)
if (require.main === module) {
    console.log('randomInt(1,10):', randomInt(1, 10))
    console.log('randomFloat(0,5):', randomFloat(0, 5))
    console.log('randomBoolean(0.3):', randomBoolean(0.3))
    console.log('randomChoice([a,b,c]):', randomChoice(['a', 'b', 'c']))
}