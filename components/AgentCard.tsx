type Props = {
  agent: string;
};

export default function AgentCard({ agent }: Props) {

  return (

    <div>

      <h2>{agent}</h2>

      <p>Frontier AI Agent</p>

    </div>

  );

}
