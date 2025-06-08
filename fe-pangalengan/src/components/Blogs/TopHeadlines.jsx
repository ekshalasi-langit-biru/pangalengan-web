import TopHeadlineItem from './TopHeadlineItem';

export default function TopHeadlines({ headlines }) {
  return (
    <section>
      <h2 className="text-xl font-bold mb-4">Top Headlines</h2>
      <div className="grid grid-cols-2 gap-5">
        {headlines.map((headline, index) => (
          <TopHeadlineItem key={index} headline={headline} />
        ))}
      </div>
    </section>
  );
}
