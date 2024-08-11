"use client";
import { contactItems } from "@/data/contact";
import Image from "next/image";
import React from "react";

export default function Contact() {
  return (
    <div className="container font-alt">
      <div className="row mb-90 mb-sm-50">
        <div className="col-lg-5 col-xl-4 mb-md-90 mb-sm-50 wow fadeInUp">
          <h2 className="section-title-strong mb-40">
            <span className="font-alt">求人情報</span>
          </h2>
          <p className="mb-0 sub4">
            うなぎと酒 まちやでは現在、アルバイトスタッフを募集しています。<br />ご興味のある方は下記の要項をご確認の上、電話もしくはメールにてご連絡ください。
          </p>
        </div>
        <div className="col-lg-7 offset-xl-1">
          <div className="round overflow-hidden">
            <Image
              width={1080}
              height={516}
              src="/assets/images/machiya_view.jpg"
              alt="Image Description"
              className="wow scaleOutIn"
              data-wow-offset={110}
            />
          </div>
        </div>
      </div>
      <div className="row wow fadeInUp" data-wow-delay="0.27s">
        
        <ul className="food-menu">
          <li className="sub3 text-center">募集要項</li>
          <hr />
          <li className="item">
            <span className="sub3">業務内容</span>
            <span className="sub4">ホールスタッフ(簡単な調理補助も)</span>
          </li>
          <hr />
          <li className="item">
            <span className="sub3">勤務時間</span>
            <span className="sub4">17:00〜22:00</span>
          </li>
          <hr />
          <li className="item">
            <span className="sub3">時給</span>
            <span className="sub4">¥1,100(経験により要相談)</span>
          </li>
          <hr />
          <li className="item">
            <span className="sub3">勤務日</span>
            <span className="sub4">シフト制：平日・土日祝</span>
          </li>
          <hr />
          <li className="item">
            <span className="sub3">特記事項</span>
            <span className="sub4">賄いあり・交通費支給</span>
          </li>
          <hr />
        </ul>

        {/* ボタンの追加 */}
        <div className="text-center mt-4">
          {/* 電話をかけるボタン */}
          <a href="tel:011-600-1747" className="btn btn-primary me-2 sub4">
            電話をかける
          </a>
          {/* メールを送るボタン */}
          <a href="mailto:info@unagi-machiya.com" className="btn btn-secondary sub4">
            メールを送る
          </a>
        </div>
        <div className="sub4 text-center">担当：町屋</div>
      </div>
    </div>
  );
}
