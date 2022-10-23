export default function ClientDetails({ clientId, clientAddress }) {
  return (
    <>
    <h1>Git Practice creating changes</h1>
      <section className="mt-10">
        <h2>{clientId}</h2>
        <p>{clientAddress}</p>
      </section>
    </>
  );
}
