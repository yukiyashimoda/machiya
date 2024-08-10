import React, { useEffect, useState } from "react";
import { client } from "@/libs/client"; // MicroCMSのクライアントをインポート
import Image from "next/image";
import Link from "next/link";
import dayjs from "dayjs"; // 日時フォーマット用のライブラリをインポート
import { FaPen } from "react-icons/fa"; // ペンのアイコンをインポート

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // MicroCMS API からデータを取得
    const fetchPosts = async () => {
      try {
        const response = await client.get({
          endpoint: "news", // あなたのエンドポイントに応じて変更
        });
        setPosts(response.contents.slice(0, 3)); // 最新の投稿3つのみ取得
        setLoading(false);
      } catch (error) {
        console.error("データの取得に失敗しました:", error);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return <p>Loading...</p>; // ローディング中の表示
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-5 mb-md-90 mb-sm-50">
          <h2 className="section-caption-border">Our Blog</h2>
          <h3 className="section-title-strong mb-40">
            <span className="font-alt">お知らせ</span>
          </h3>
          
          <div className="local-scroll">
            <Link
              href={`/archive`}
              className="btn btn-mod btn-white btn-large btn-round btn-hover-anim"
            >
              <span>もっと見る</span>
            </Link>
          </div>
        </div>
      </div>
      {/* Blog Grid */}
      <div className="row gy-4">
        {/* Post Item */}
        {posts.map((post, index) => (
          <div
            key={post.id}
            className={`post-prev-2 col-md-6 col-lg-4`}
            data-rellax-y={post.rellaxY}
            data-rellax-speed={post.rellaxSpeed}
            data-rellax-percentage={post.rellaxPercentage}
          >
            <div
              className={`
              ${index === 0 ? "mt-140 mt-md-0" : ""}
              ${index === 2 ? "mt-n140 mt-md-0" : ""}
            `}
            >
              <div className="post-prev-2-img">
                <Link href={`/news/${post.id}`}>
                  <Image
                    width={700}
                    height={479}
                    src={post.photo?.url || "/assets/images/machiya_logo.png"} // 画像がない場合はデフォルトの画像を使用
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
                <FaPen style={{ marginRight: "8px" }} />
                {dayjs(post.publishedAt).format("YYYY年MM月DD日")}
              </div>
            </div>
          </div>
        ))}
        {/* End Post Item */}
      </div>
      {/* End Blog Grid */}
    </div>
  );
}
