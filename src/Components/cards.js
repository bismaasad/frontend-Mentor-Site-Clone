import React from "react";

const articles = [
  {
    category: "NEWS",
    title: "Our \"Getting job ready\" learning path is live!",
    description:
      "Landing your first developer role can be challenging. This article introduces our latest learning path that provides all the information you need to impress potential employers.",
    date: "29 Jan 2025",
    author: "The Frontend Mentor team",
    image: "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_450/Admin/u9s0feliwaapxorwjzer.jpg",
  },
  {
    category: "NEWS",
    title: "Introducing Frontend Mentor for Teams!",
    description:
      "Project-based learning is a powerful approach to rapidly improving skills. We're excited to bring Frontend Mentor to teams and coding schools to help them take their developers to the next level.",
    date: "5 Sep 2024",
    author: "Matt Studdert",
    image: "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_450/Admin/aemp0obimqzxeyzlihdf.jpg",
  },
  {
    category: "CAREER",
    title: "How to get manager approval for Frontend Mentor for Teams",
    description:
      "Professional training is a crucial part of career progression. In this article, we help you make the case for integrating project-based learning into your professional training to boost your skills.",
    date: "5 Sep 2024",
    author: "Matt Studdert",
    image: "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_450/Admin/q5lqoqmezyhibv21dzoc.jpg",
  },
];

const NewsCards = () => {
  return (
    <section class="text-gray-600 body-font bg-gray-200">
    <div className="container mx-auto  px-2 py-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {articles.map((article, index) => (
          <div key={index} className="bg-gray-200  rounded-lg overflow-hidden">
            <img src={article.image} alt={article.title} className="w-full h-36 rounded-xl  object-cover" />
            <div className="p-6">
              <span className="text-xs font-bold text-blue-600 bg-blue-100 px-2 py-1 rounded-full">
                {article.category}
              </span>
              <h2 className="text-xl font-bold mt-4">{article.title}</h2>
              <p className="text-gray-600 mt-2">{article.description}</p>
              <div className="flex items-center mt-4 text-gray-500 text-sm">
                <span className="font-semibold">{article.author}</span>
                <span className="mx-2">·</span>
                <span>{article.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
};

export default NewsCards;
