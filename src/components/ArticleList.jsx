import React from 'react';
import { PropTypes } from 'prop-types';

function ArticleList(props) {
  const { articles } = props;

  if (!articles) {
    return <div className="article-preview">Loading...</div>;
  }

  if (articles.length === 0) {
    return <div className="article-preview">No articles are here... yet.</div>;
  }

  return (
    <div className="ArticleList">
      {articles.map(article => (
        <h2>{article.title}</h2>
      ))}
    </div>
  );
}

ArticleList.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.object),
};

ArticleList.defaultProps = {
  articles: null,
};

export default ArticleList;
