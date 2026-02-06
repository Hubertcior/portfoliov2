export interface ApiEndpoint {
  id: number;
  method: 'GET';
  url : string;
}

export const AVAILABLE_ENDPOINTS: ApiEndpoint[] = [
  { id: 1, method: 'GET', url: '/api/skills/frontend-skills' },
  { id: 2, method: 'GET', url: '/api/skills/backend-skills' },
];

export interface ApiStatusEndpoint {
  apiVersion: string;
  condition: string;
  lastReported: string;
}