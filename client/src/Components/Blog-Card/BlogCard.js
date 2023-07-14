import React from "react";
import "./BlogCard.css";
const BlogCard = ({ blog }) => {

  const { title, categories, link, thumbnail, pubDate, description } = blog;
  function getTimeAgo(dateString) {
    const date = new Date(dateString);
    const currentDate = new Date();

    const timeDifference = currentDate.getTime() - date.getTime();

    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) {
      return days === 1 ? `${days} day ago` : `${days} days ago`;
    } else if (hours > 0) {
      return hours === 1 ? `${hours} hour ago` : `${hours} hours ago`;
    } else if (minutes > 0) {
      return minutes === 1 ? `${minutes} minute ago` : `${minutes} minutes ago`;
    } else {
      return seconds === 1 ? `${seconds} second ago` : `${seconds} seconds ago`;
    }
  }

  const sanitizedDescription = description.replace(/<[^>]+>/g, '');


  return (

    <div class="card">
      <a href={link} rel='noreferrer' target="_blank" >
        <div class="card-header">
          <img src={thumbnail} alt="rover" />
        </div>
      </a>
      <div class="card-body">
        <a href={link} rel='noreferrer' target="_blank">
          <h1 className="card-header">
            {title}
          </h1>
        </a>
        <p>
          {sanitizedDescription.substring(0, 100)}
        </p>
        <div className="tags">
          {categories.map((tool) => (
            <div className="tag">{tool}</div>
          ))}
        </div>
        <div class="user">
          <img src="https://cdn-images-1.medium.com/v2/resize:fill:150:150/1*kvE-08BpRrydTksdsAtAfA@2x.jpeg" alt="user" />
          <div class="user-info">
            <h5>{pubDate}</h5>
            <small>{getTimeAgo(pubDate)}</small>
          </div>
        </div>
      </div>

    </div>


  );
};

export default BlogCard;
