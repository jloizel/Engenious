import * as React from 'react';

export const SubmitCVForm2: React.FC = () => {
  const [content, setContent] = React.useState<string | null>(null);
  const [filename, setFilename] = React.useState<string>('');

  const onSubmit = async (e: React.FormEvent) => {
    try {
      e.preventDefault();

      if (content === null) {
        alert('No file content to send');
        return;
      }

      const base64Content = content.split(',')[1];
      const apiEndpoint = '/api/email';

      fetch(apiEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          content: base64Content,
          filename,
        }),
      });

      alert('Request sent');
    } catch (error) {
      alert('Something went wrong');
    }
  };

  const onAddFileAction = (e: React.ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();
    const files = e.target.files;

    if (files && files[0]) {
      reader.onload = (r) => {
        if (r.target && r.target.result) {
          setContent(r.target.result.toString());
          setFilename(files[0].name);
        }
      };

      reader.readAsDataURL(files[0]);
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        width: 200,
      }}
    >
      <input
        type="file"
        name="file"
        onChange={onAddFileAction}
        accept="image/*"
      />
      <input type="submit" value="Send Email" />
    </form>
  );
};

export default SubmitCVForm2;
