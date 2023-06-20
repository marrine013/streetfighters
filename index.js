const API_URL =
  'https://api.github.com/repos/oleksandr-danylchenko/street-fighter/contents/resources/api/fighters.json';
const SECURITY_HEADERS = {
  headers: {
    authorization: 'token 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'
  }
};

const rootElement = document.getElementById('root');

rootElement.innerText = 'Loading...';

const responsePromise = fetch(API_URL, SECURITY_HEADERS);
responsePromise
  .then(response => response.json())
  .then(file => {
    const fighters = JSON.parse(atob(file.content));
    const names = fighters.map(it => it.name);
    const namesStr = names.join('\n');
    rootElement.innerText = namesStr;
  });
