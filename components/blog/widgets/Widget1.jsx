"use client";
import React, { useEffect, useState } from "react";
import { client } from "@/libs/client"; // MicroCMSのクライアントをインポート
import Image from "next/image";
import Link from "next/link";
import dayjs from "dayjs"; 
import { FaPen } from "react-icons/fa"; 

export default function Widget1({
}) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // MicroCMS API からデータを取得
    const fetchPosts = async () => {
      try {
        const response = await client.get({
          endpoint: "news", // あなたのエンドポイントに応じて変更
        });
        setPosts(response.contents.slice(0, 9)); // 最新の投稿3つのみ取得
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
    <>
      <div className="widget">
        <h3 className="widget-title">最近の投稿</h3>
        <div className="widget-body">
          <ul className="clearlist widget-posts">
            {posts.map((post, index) => (
              <li key={index} className="clearfix">
                <Link href={`/news/${post.id}`}>
                  <Image
                    src={post.photo?.url || "/assets/images/machiya_logo.png"}
                    height={140}
                    style={{ height: "fit-content" }}
                    alt={post.title || "Image Description"}
                    width={100}
                    className="widget-posts-img"
                  />
                </Link>
                <div className="widget-posts-descr">
                  <Link href={`/news/${post.id}`} title={post.title}>
                    {post.title}
                  </Link>
                  <div className="post-prev-2-info">
                  <FaPen style={{ marginRight: "8px" }} />
                  {dayjs(post.publishedAt).format("YYYY年MM月DD日")}
                </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
