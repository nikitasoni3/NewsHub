import React, { Component } from "react";

const truncateText = (text, maxLength) => {
  if (!text) return "";

  if (text.length > maxLength) {
    return text.substring(0, maxLength) + "...";
  } else {
    return text;
  }
};

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } =
      this.props;
    return (
      <div className="my-3  ">
        <div className="card">
          <div
            style={{
              display: "flex",
              position: "absolute",
              justifyContent: "flex-end",
              right: "0",
            }}
          >
            <span className="badge rounded-pill bg-danger">{source}</span>
          </div>

          <img
            src={
              !imageUrl
                ? "https://feeds.abplive.com/onecms/images/uploaded-images/2024/05/04/149723170340519d3701120d3a01ed9a1714816183348925_original.jpg?impolicy=abp_cdn&imwidth=1200"
                : imageUrl
            }
            className="card-img-top"
            alt="News"
            style={{ objectFit: "cover", height: "200px" }}
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              {!description || description.trim() === ""
                ? title
                : truncateText(description, 100)}
            </p>
            <p className="card-text">
              <small className="text-body-secondary">
                By {!author ? "Unkown" : author} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              href={newsUrl}
              rel="noreferrer"
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
