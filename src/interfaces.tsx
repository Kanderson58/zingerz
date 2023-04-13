export interface JokeResponse {
  id: string;
  joke: string;
 }

 export interface SearchResponse {
  "current_page": number,
  "limit": number,
  "next_page": number,
  "previous_page": number,
  "results": Array<JokeResponse>,
  "search_term": string,
  "status": number,
  "total_jokes": number,
  "total_pages": number
}