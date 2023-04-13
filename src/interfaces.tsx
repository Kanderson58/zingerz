export interface IJokeResponse {
  id: string;
  joke: string;
 }

 export interface ISearchResponse {
  "current_page": number,
  "limit": number,
  "next_page": number,
  "previous_page": number,
  "results": Array<IJokeResponse>,
  "search_term": string,
  "status": number,
  "total_jokes": number,
  "total_pages": number
}