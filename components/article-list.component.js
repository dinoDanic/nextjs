import React from "react";
import ArticleItem from "./article-item.component";
import articleStyles from "../styles/article.module.css";

const ArticleList = ({ articles }) => {
  console.log(articles);
  return (
    <div className={articleStyles.grid}>
      {articles.map((article) => (
        <ArticleItem key={article.id} article={article} />
      ))}
    </div>
  );
};

export default ArticleList;
