import React from "react";

function renderParas(content) {
  return content.map(para => {
    return <p className="left-align articleContent-para">{para}</p>;
  });
}

function ArticleContent({ article }) {
  let { content } = article;

  return (
    <div className="col s12 m12 l12">
      <img
        className="materialboxed"
        src="https://cdn.pixabay.com/photo/2019/09/28/00/36/plow-4509660_960_720.jpg"
        width={500}
      />
      <div>{renderParas(content)}</div>
    </div>
  );
}

export default ArticleContent;
