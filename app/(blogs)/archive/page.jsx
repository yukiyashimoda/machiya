'use client'

import { useEffect, useState } from "react";
import Footer9 from "@/components/footers/Footer9";
import Header10 from "@/components/headers/Header10";
import { client } from "@/libs/client"; // MicroCMSのクライアントをインポート
import { strongMultiPages } from "@/data/menu";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";

const ParallaxContainer = dynamic(
  () => import("@/components/common/ParallaxContainer"),
  {
    ssr: false, // サーバーサイドレンダリングを無効化
  }
);

const dark = false;
const onePage = false;

export default function StrongBlogPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 9;

  useEffect(() => {
    // MicroCMS API からデータを取得
    const fetchPosts = async () => {
      try {
        const response = await client.get({
          endpoint: "news", // あなたのエンドポイントに応じて変更
        });
        setPosts(response.contents); // すべての投稿を取得
        setLoading(false);
      } catch (error) {
        console.error("データの取得に失敗しました:", error);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  // 現在のページに基づいて表示する投稿をスライス
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // 前後のページを取得
  const totalPages = Math.ceil(posts.length / postsPerPage);
  const prevPage = currentPage > 1 ? currentPage - 1 : null;
  const nextPage = currentPage < totalPages ? currentPage + 1 : null;

  if (loading) {
    return <p>Loading...</p>; // ローディング中の表示
  }

  return (
    <>
      <div className="theme-strong">
        <div className="page" id="top">
          <nav className="main-nav dark transparent stick-fixed wch-unset">
            <Header10 links={strongMultiPages} />
          </nav>
          <main className="main">
            <ParallaxContainer
              className="page-section bg-dark-alpha-30 light-content parallax-5"
              style={{
                backgroundImage:
                  "url(/assets/images/demo-strong/section-bg-1.jpg)",
              }}
              id="home"
            >
              <div className="container position-relative pt-sm-30">
                {/* Home Section Content */}
                <div className="home-content text-center">
                  <h1 className="hs-title-7 mb-0">
                    <span className="charsAnimIn-2" data-splitting="chars">
                      <span className="font-alt">お知らせ</span>
                    </span>
                  </h1>
                </div>
                {/* End Home Section Content */}
              </div>
            </ParallaxContainer>
            <>
              <section className="page-section" id="blog">
                <div className="container position-relative">
                  {/* Blog Grid */}
                  <div
                    className="row mt-n50 mt-sm-n30 mb-50 mb-sm-30 fadeInUp"
                    data-wow-offset={0}
                  >
                    {/* Post Item */}
                    {currentPosts.map((post) => (
                      <div
                        className="post-prev-2 col-md-6 col-lg-4 mt-50 mt-sm-30"
                        key={post.id}
                      >
                        <div className="post-prev-2-img">
                          <Link href={`/news/${post.id}`}>
                            <Image
                              src={post.photo?.url || "/assets/images/machiya_logo.png"}
                              width={700}
                              height={479}
                              alt={post.title || "Image Description"}
                            />
                          </Link>
                        </div>
                        <h3 className="post-prev-2-title">
                          <Link href={`/news/${post.id}`}>
                            {post.title}
                          </Link>
                        </h3>
                        <div className="post-prev-2-info">
                          {new Date(post.publishedAt).toLocaleDateString("ja-JP", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </div>
                      </div>
                    ))}
                    {/* End Post Item */}
                  </div>
                  {/* End Blog Grid */}
                  {/* Prev/Next Post */}
                  <div className="clearfix mt-40">
                    {prevPage && (
                      <Link
                        href={`?page=${prevPage}`}
                        className="blog-item-more circle left"
                        onClick={() => setCurrentPage(prevPage)}
                      >
                        <i className="mi-chevron-left" />
                        &nbsp;前のページ
                      </Link>
                    )}
                    {nextPage && (
                      <Link
                        href={`?page=${nextPage}`}
                        className="blog-item-more circle right"
                        onClick={() => setCurrentPage(nextPage)}
                      >
                        次のページ&nbsp;
                        <i className="mi-chevron-right" />
                      </Link>
                    )}
                  </div>
                  {/* End Prev/Next Post */}
                </div>
              </section>
              {/* End Blog Section */}
              {/* Divider */}
              <hr className="mt-0 mb-0" />
              {/* End Divider */}
            </>
          </main>
          <footer className="footer-1 bg-dark-1 light-content">
            <Footer9 />
          </footer>
        </div>
      </div>
    </>
  );
}
