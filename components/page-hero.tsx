type PageHeroProps = {
  eyebrow: string;
  title: string;
  highlight?: string;
  description: string;
  index: string;
};

export function PageHero({
  eyebrow,
  title,
  highlight,
  description,
  index,
}: PageHeroProps) {
  return (
    <section className="page-hero">
      <span className="page-index">{index}</span>
      <div>
        <p className="eyebrow"><span /> {eyebrow}</p>
        <h1>{title}{highlight && <em>{highlight}</em>}</h1>
      </div>
      <p className="page-description">{description}</p>
    </section>
  );
}
