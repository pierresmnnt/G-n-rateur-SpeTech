/**
 * @param {URL} url
 */
export async function fetchUrl(url) {
  const response = await fetch(url);
  if (response.status >= 200 && response.status < 300) {
    return await response.json();
  } else {
    console.error(response);
  }
}
