const ArticlePreview = ({ entry }) => {
  const title = entry.getIn(['data', 'title']);
  const date = entry.getIn(['data', 'date']);
  const body = entry.getIn(['data', 'body']);

  return (
    <article className="px-6 md:px-0">
      <header>
        <h1 className="mb-12 text-3xl text-center md:text-5xl dark:text-white">
          {title}
        </h1>
      </header>
      <main>
        <article className="prose dark:prose-dark">{body}</article>
      </main>
    </article>
  );
};
