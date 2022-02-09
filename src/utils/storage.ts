export const getItem = <T>(key: string): T|null => {
  const data = localStorage.getItem(key)
  if (!data) return null
  try {
    return JSON.parse(data) as T
  } catch (err) {
    return null
  }
}
export const setItem = (key: string, value: object | string | null) => {
  if (typeof value === 'object') {
    value = JSON.stringify(value)
  }
  localStorage.setItem(key, value)
}

export const removeItem = (key: string) => {
  localStorage.removeItem(key)
}
