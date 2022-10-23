export default function ClientDetails({ clientId, clientAddress }) {
  return (
    <>
    <h3>This is line 1</h3>
      <section className="mt-10">
        <h2>{clientId}</h2>
        <p>{clientAddress}</p>
      </section>
      <h2>This is line 2</h2>
    </>
  );
}
