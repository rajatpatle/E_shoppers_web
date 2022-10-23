export default function ClientDetails({ clientId, clientAddress }) {
  return (
    <>
      <section className="mt-10">
        
        <h2>{clientId}</h2>
        <p>{clientAddress}</p>
        <h3>Git new practice</h3>
      </section>
    </>
  );
}
