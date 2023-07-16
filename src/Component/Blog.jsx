import React from 'react';
import styles from '../style';
import { articles } from '../data';

const Blog = () => {
    return (
        <div className={`${styles.paddingX} `}>
            <h1 className="text-center text-3xl font-bold">Blogs</h1>
            <hr className="mt-3 border-1" />
            <div className={` md:px-9 flex flex-wrap justify-around`}>
                {articles.map((article) => (
                    <article key={article.id} className=" w-80 border-1 mt-3 pb-3">
                        <a href={article.url} title={article.title}>
                            <img
                                className="w-full h-48 object-cover"
                                src={article.image}
                                alt={article.alt}
                                decoding="async"
                                title={article.title}
                            />
                        </a>
                        <div className="px-4">
                            <header className="entry-header">
                                <div className="py-2 text-lg text-yellow-500">{article.date}</div>
                                <h2 className="text-xl font-bold">
                                    <a href={article.url} rel="bookmark">{article.title}</a>
                                </h2>
                            </header>
                            <div className="text-base font-light pt-2">
                                <a href={article.url} title={article.title}>
                                    <p>{article.description}</p>
                                </a>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
};

export default Blog;
