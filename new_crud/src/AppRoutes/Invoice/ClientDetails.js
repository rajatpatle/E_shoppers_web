export default function ClientDetails({ clientId, clientAddress }) {
  return (
    <>
    <h3>This is line 1</h3>
      <section className="mt-10">
        
        <h2>{clientId}</h2>
        <p>{clientAddress}</p>
        <h3>Git new practice</h3>
      </section>
      <h2>This is line 2</h2>
    </>
  );
}
