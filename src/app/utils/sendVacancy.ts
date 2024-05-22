import { FormData } from '../../../components/submitCVForm/submitCVForm';

export function sendVacancy(data: FormData) {
  const apiEndpoint = '/api/send2';

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