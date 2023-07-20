export interface ISearchResult<T> {
  hits: {
    hits: {
      _source: T
    }[]
  }
}