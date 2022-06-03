export function useMock({ size }) {
  return Array.from({ length: size }).map((_, idx) => {
    return idx + 1;
  })
}