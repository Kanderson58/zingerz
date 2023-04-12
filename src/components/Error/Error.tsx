import './Error.css';

interface Props {
  error: string;
}

const Error = ({error}: Props) => {
  return (
    <section className='error'>
      <h2 className='error-message'>Sorry! Something went wrong. {error}</h2>
    </section>
  );
}

export default Error;