import React from 'react'
import './BlogCard.css'
const BlogCard = () => {
    return (
        <div className="blog-container">
            <div className="card">
                <div className="img-container" style={{ backgroundImage: 'url(https://www.dropbox.com/s/7d5qt5wb2xpqeww/city-street.jpg?raw=1)' }}></div>
                <div className="card-content">
                    <h2>Hello</h2>
                    <h1>From the Other Side of the World</h1>
                    <p className="excerpt">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia odio dolorem amet, sunt magnam asperiores exercitationem consequuntur? Molestias asperiores rerum doloremque reiciendis.</p>
                    <p className="author">know more</p>
                </div>
            </div>
        </div>
    )
}

export default BlogCard