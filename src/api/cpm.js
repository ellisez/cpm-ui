import axios from 'axios'

export async function loadComponent(directory) {
  const response=await axios({
    method: 'get',
    url: 'http://localhost:8080/load',
    params: {
      directory
    }
  });
  if (response.status===200) {
    if (response.data && response.data.code>0) {
      return response.data.data;
    }
  }
}

export async function searchComponent(query, nextToken) {
  const params={};
  params.q=query.keyword;
  if (nextToken) {
    params.continuationToken = nextToken;
  }
  const response=await axios({
    method: 'get',
    url: 'http://106.75.31.59:9999/service/rest/v1/search',
    params
  });
  if (response.status===200) {
    if (response.data) {
      const {items, continuationToken} = response.data;
      return {
        query,
        list: items,
        nextToken: continuationToken
      }
    }
  }
  return null;
}
