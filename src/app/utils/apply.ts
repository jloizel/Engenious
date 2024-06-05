import { FormData } from '../../../components/submitCVForm/applyCVForm';

export function sendCV(data: FormData) {
  const apiEndpoint = '/api/apply';

  fetch(apiEndpoint, {
    method: 'POST',
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((response) => {
      alert(response.message);
    })
    .catch((err) => {
      alert(err);
    });
}