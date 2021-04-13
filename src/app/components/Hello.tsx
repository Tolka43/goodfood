interface HelloProps {
  text: string;
}

function Hello({ text }: HelloProps): JSX.Element {
  return (
    <div className='alert alert-primary' role='alert'>
      {text}
    </div>
  );
}

export default Hello;
