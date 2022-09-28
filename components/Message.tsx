interface MessageProps {
  mensagem: string;
}

export default function Message(props: MessageProps) {
  return (
    <div>
      <div>Message: {props.mensagem}</div>
    </div>
  );
}
