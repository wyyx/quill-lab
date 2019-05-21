export function parseArticle(url: string) {
  return getSourceCode(url)
}

export function getSourceCode(url: string) {
  return fetch(url)
}
