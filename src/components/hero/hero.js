export default function Hero({ title, description }) {
  return (
    <section className="bg-tertiary border-default-100 border-b py-14">
      <div className="container">
        <h1 className="text-4xl font-bold font-dm-mone">{title}</h1>
        {description && <p className="text-default-500 text-2xl mt-6">{description}</p>}
      </div>
    </section>
  );
}
