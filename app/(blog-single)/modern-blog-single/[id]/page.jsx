"use client";

import React, { useEffect, useState } from "react";
import { client } from "@/libs/client"; // MicroCMSのクライアントをインポート
import Image from "next/image";
import Widget1 from "@/components/blog/widgets/Widget1";
import Header10 from "@/components/headers/Header10";
import { strongMultiPages } from "@/data/menu";
import dynamic from "next/dynamic";
import Link from "next/link";
import Footer9 from "@/components/footers/Footer9";

// ParallaxContainerのdynamic import
const ParallaxContainer = dynamic(
  () => import("@/components/common/ParallaxContainer"),
  {
    ssr: false, // サーバーサイドレンダリングを無効化
  }
);

export default function ModernBlogSinglePage({ params }) {
  const [post, setPost] = useState(null); // 単一の投稿のために post を使用
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        // MicroCMS APIからデータを取得
        const response = await client.get({
          endpoint: "news", // あなたのエンドポイントに応じて変更
          contentId: params.id, // URLのパラメータからIDを取得
        });

        // レスポンスの内容を確認
        console.log('API Response:', response);

        // 取得したデータを設定
        setPost(response);
        setLoading(false); // ローディングを終了
      } catch (error) {
        console.error("データの取得に失敗しました:", error);
        setLoading(false);
      }
    };

    fetchPost();
  }, [params.id]); // params.idが変更された場合に再取得する

  if (loading) {
    return <p>Loading...</p>; // ローディング中の表示
  }

  if (!post) {
    return <p>投稿が見つかりませんでした。</p>; // 投稿が見つからなかった場合の表示
  }

  // publishedAtの日付をフォーマット
  const formattedDate = new Date(post.publishedAt).toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <div className="theme-modern">
        <div className="page" id="top">
          <nav className="main-nav dark stick-fixed ">
            <Header10 links={strongMultiPages} />
          </nav>
          <main id="main">
            <ParallaxContainer
              className="page-section pt-90 pb-90 pb-xs-40 bg-dark-alpha-60 parallax-5 light-content"
              style={{
                backgroundImage: "url(/assets/images/noren.png)",
              }}
              id="home"
            >
              <div className="container position-relative">
                <div className="mb-20">
                  <div className="mb-10">
                    <Link
                      href={`/`}
                      className="link-hover-anim align-middle"
                      data-btn-animate="y"
                    >
                      <i className="icon-arrow-left2 size-14" /> HOME
                    </Link>
                  </div>
                  <hr className="white mt-0 mb-0" />
                </div>
                <h1 className="section-title-large font-alt uppercase mb-0  fadeRotateIn">
                  {post.title}
                </h1>
                {/* Author, Categories, Comments */}
                <div
                  className="blog-item-data mt-30 mt-sm-10 mb-0  fadeInUp"
                  data-wow-delay="0.2s"
                >
                  <div className="d-inline-block me-3">
                    <a href="#">
                      <i className="mi-clock size-16" />
                      <span className="visually-hidden">Date:</span>{" "}
                      {formattedDate}
                    </a>
                  </div>
                  {post.author && (
                    <div className="d-inline-block me-3">
                      <a href="#">
                        <i className="mi-user size-16" />
                        <span className="visually-hidden">Author:</span>{" "}
                        {post.author}
                      </a>
                    </div>
                  )}
                </div>
                {/* End Author, Categories, Comments */}
              </div>
              {/* Scroll Down */}
              <div
                className="local-scroll scroll-down-wrap-2 d-none d-lg-block wow fadeInUp"
                data-wow-offset={0}
              >
                <div className="full-wrapper text-end">
                  
                </div>
              </div>
              {/* End Scroll Down */}
            </ParallaxContainer>
            {/* Blog Content */}
            <section className="page-section">
              <div className="container relative">
                <div className="row">
                  {/* Content */}
                  <div className="col-lg-8 mb-md-80">
                    {/* Post */}
                    <div className="blog-item mb-80 mb-xs-40">
                      <div className="blog-item-body">
                        {/* Media Gallery */}
                        <div className="blog-media mb-40 mb-xs-30">
                        <span className="">
                    <Image
                      src={post.photo?.url || "/assets/images/machiya_logo.png"}
                      alt="Scroll Down"
                      width={500}
                      height={700}
                    />
                  </span>
                        </div>
                        <p
                          className="font-alt"
                          dangerouslySetInnerHTML={{ __html: post.body }}
                        />
                        
                      </div>
                    </div>
                    {/* End Post */}

                    {/* Prev/Next Post */}
                    <div className="clearfix mt-40">
                      <a href="#" className="blog-item-more circle left">
                        <i className="mi-chevron-left" />
                        &nbsp;Prev post
                      </a>
                      <a href="#" className="blog-item-more circle right">
                        Next post&nbsp;
                        <i className="mi-chevron-right" />
                      </a>
                    </div>
                    {/* End Prev/Next Post */}
                  </div>
                  {/* End Content */}
                  {/* Sidebar */}
                  <div className="col-lg-4 col-xl-3 offset-xl-1">
                    {/* Search Widget */}
                    <Widget1 searchInputClass="form-control input-md search-field input-circle" />
                    {/* End Widget */}
                  </div>
                  {/* End Sidebar */}
                </div>
              </div>
            </section>
            {/* End Blog Content */}
            {/* Divider */}
            <hr className="mt-0 mb-0" />
            {/* End Divider */}
            {/* Newsletter Section */}
          </main>
          <footer className="footer-1 bg-dark-1 light-content">
            <Footer9 />
          </footer>
        </div>
      </div>
    </>
  );
}
