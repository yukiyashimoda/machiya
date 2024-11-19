import React from "react";


export default function Service() {
  return (
    <>
    
      <ul
        className="nav nav-tabs tpl-alt-tabs mb-20 mb-xs-0 fadeInUp"
        role="tablist"
      >
        <li className="nav-item" role="presentation">
          <a
            href="#service-branding"
            className="nav-link active "
            data-bs-toggle="tab"
            role="tab"
            aria-selected="true"
          >
            <div className="alt-tabs-icon">
            <svg id="_レイヤー_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1241.66 579.49"><path d="m1190.98,42.09h-113.37c17.7,28.26,28.82,49.84,43.53,68.58,20.15,25.68,42.91,49.32,64.78,73.63,99.7,110.87,52.23,255.81-37.16,329.84-65.88,54.56-142.83,72.39-226.59,62.95-105.39-11.88-200.52-48.55-281.92-118.34-35.56-30.5-70.89-61.65-109.1-88.56-45.71-32.19-98.62-34.35-153.43-23.19,7.36,3.35,14.73,6.69,13.5,6.13,5.97,17.65,9.83,29.06,13.87,41.01-3.93.95-6.95,2.27-7.36,1.7-31.94-44.53-68.34-48.73-117.18-23.05-45.62,23.99-95.93,39.77-145.31,55.64-35.91,11.54-73.41,18.82-110.69,25.12-20.11,3.4-26.9-11.92-23.86-29.52,1.59-9.19,6.58-18.43,12.08-26.2,90.68-128.07,212.75-203.47,370.13-217.75,69.11-6.27,135.67,7.67,195.5,41.59,52.83,29.95,103.77,64.19,151.86,101.31,80.95,62.48,170.12,96.42,272.68,91.39,89.37-4.39,112.99-43.81,72.32-123.1-16.81-32.78-38.02-63.65-59.93-93.4-78.38-106.45-6.48-187.74,96.16-196.48,54.24-4.62,65.13.75,79.48,40.7Z"/></svg>
            </div>
            うなぎ料理
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a
            href="#service-ui-ux-design"
            className="nav-link "
            data-bs-toggle="tab"
            role="tab"
            aria-selected="false"
          >
            <div className="alt-tabs-icon">
            <svg id="_2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 400.75"><path d="m153.09,337.36v22.02c0,22.84,46.08,41.38,102.91,41.38s102.91-18.53,102.91-41.38v-22.02c90.14-39.61,153.09-129.67,153.09-234.45C512,46.08,397.39,0,256,0S0,46.08,0,102.91c0,104.78,62.97,194.84,153.09,234.45ZM41.83,102.91c0-2.23,8.98-17.98,48.75-33.95,42.89-17.24,103.17-27.13,165.42-27.13s122.53,9.89,165.44,27.12c39.75,15.97,48.73,31.72,48.73,33.95s-8.98,17.97-48.73,33.95c-42.91,17.23-103.19,27.12-165.44,27.12s-122.53-9.89-165.42-27.12c-39.77-15.98-48.75-31.72-48.75-33.95Z"/></svg>
            </div>
            一品料理
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a
            href="#service-animation"
            className="nav-link"
            data-bs-toggle="tab"
            role="tab"
            aria-selected="false"
          >
            <div className="alt-tabs-icon">
            <svg id="contents" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500.39 551"><path d="m250.94,551c-3.14,0-5.93-2.02-6.91-5-18.97-57.68-17.45-118.3-16.8-144.19.1-3.74.17-6.8.17-9.08,0-121.74,33.7-228.25,92.45-292.21l-42.87-90.12c-1.07-2.25-.91-4.9.42-7.01,1.33-2.11,3.65-3.39,6.15-3.39h160.17c2.49,0,4.82,1.28,6.15,3.39,1.33,2.11,1.49,4.76.42,7.01l-42.86,90.12c58.75,63.96,92.45,170.46,92.45,292.21,0,2.29.08,5.35.17,9.08.65,25.9,2.18,86.52-16.79,144.19-.98,2.98-3.77,5-6.91,5h-225.42Z"/><path d="m0,403.7v38.4c0,39.96,32.7,72.66,72.66,72.66h26.99c39.96,0,72.66-32.7,72.66-72.66v-38.4H0Z"/><rect x="57.46" y="523.43" width="59.92" height="27.27"/></svg>
            </div>
            お飲み物
          </a>
        </li>
      </ul>
      {/* End Nav tabs */}
      {/* Tab panes */}
      <div className="tab-content tpl-tabs-cont">
        {/* Service Item */}
        <div
          className="tab-pane fade show active"
          id="service-branding"
          role="tabpanel"
        >
          <div className="row">
            <div
              className="col-lg-4 mb-md-40 mb-xs-30 linesAnimIn"
              data-splitting="lines"
            >
              <blockquote className="mt-0 mb-0">
                <p className="font-alt mb-20 mb-sm-10">
                  国産の鰻を使用。<br />
                  ふっくらとした味わいを<br />
                  是非ご堪能ください。
                </p>
                
              </blockquote>
            </div>
            <div
              className="col-md-6 col-lg-4 mb-sm-30 linesAnimIn"
              data-splitting="lines"
            >
             <ul class="food-menu font-alt" >
               <li class="item">
                 <span class="name">うな重<div className="sub">(肝吸・お新香付き)</div></span>
                 <span class="price"><div className="sub">上(一尾)</div>¥3,980</span>
                 <span class="price"><div className="sub">特上(一尾半)</div>¥5,880</span>
                 <span class="price"><div className="sub">極上(二尾)</div>¥7,570</span>
               </li>
               <hr />
               <li class="item">
                 <span class="name">ひつまぶし<div className="sub">(肝吸・お新香・出汁・薬味付き)</div></span>
                 <span class="price"><div className="sub">上(一尾)</div>¥4,180</span>
                 <span class="price"><div className="sub">特上(一尾半)</div>¥6,080</span>
                 <span class="price"><div className="sub">極上(二尾)</div>¥7,770</span>
               </li>
               <hr />
               {/* <li class="item">
                 <span class="name">鰻串一通り<div className="sub">(5本盛り)</div></span>
                 <span class="price">¥1,700</span>
               </li>
               <hr /> */}
                <li class="item">
                 <span class="name">鰻串一通り<div className="sub">一押し！5本の盛り合わせ！</div></span>
                 <span class="price">¥1,850</span>
               </li>
               <hr />
               <li class="item">
                 <span class="name">鰻串３本盛り<div className="sub">ヒレ巻き、バラ身、肝焼き</div></span>
                 <span class="price">¥990</span>
               </li>
               <hr />
                <li class="item">
                 <span class="name">ひれ巻き【串】<div className="sub">人気！おすすめ食材をひれで巻きました</div></span>
                 <span class="price">¥350</span>
               </li>
               <hr />
               <li class="item">
                 <span class="name">ばら【串】<div className="sub">希少！あばら骨周りの身</div></span>
                 <span class="price">¥360</span>
               </li>
               <hr />
               <li class="item">
                 <span class="name">肝焼き【串】<div className="sub">うなぎ屋の定番</div></span>
                 <span class="price">¥450</span>
               </li>
               <hr />
               <li class="item">
                 <span class="name">短冊【串】<div className="sub">小さな蒲焼き（塩かタレ）</div></span>
                 <span class="price">¥490</span>
               </li>
               <hr />

             </ul>
            </div>
            <div
              className="col-md-6 col-lg-4 linesAnimIn footer-text"
              data-splitting="lines"
            >
              <ul class="food-menu font-alt" >
              <li class="item">
                 <span class="name">まずは！鰻屋の前菜３種(一人前)</span>
                 <span class="price">¥690</span>
               </li>
               <hr />
               <li class="item">
                 <span class="name">おすすめ！うなポン酢</span>
                 <span class="price">¥490</span>
               </li> 
               <hr />
               <li class="item">
                 <span class="name">おすすめ！肝刺し</span>
                 <span class="price">¥600</span>
               </li>
               <hr />
              <li class="item">
                 <span class="name">鰻の骨から揚げ　山椒塩</span>
                 <span class="price">¥500</span>
               </li>
               <hr />
               <li class="item">
                 <span class="name">うざく<div className="sub">鰻と胡瓜の酢の物</div></span>
                 <span class="price">¥1,200</span>
               </li>
               <hr />
              <li class="item">
                 <span class="name">うまき<div className="sub">鰻入りだし巻き卵</div></span>
                 <span class="price">¥1,300</span>
               </li>
               <hr />
               <li class="item">
                 <span class="name">蒲焼き 一尾<div className="sub">定番！</div></span>
                 <span class="price">¥3,680</span>
               </li>
               <hr />
               <li class="item">
                 <span class="name">白焼き 一尾<div className="sub">(生姜醤油とわさび醤油でどうぞ)</div></span>
                 <span class="price">¥3,680</span>
               </li>
               <hr />
               <li class="item">
                 <span class="name">塩焼き 一尾<div className="sub">ありそうでなかった！美味！</div></span>
                 <span class="price">¥3,680</span>
               </li>
               <hr />
               <li class="item">
                 <span class="name"></span>
                 <span class="price sub2">その他メニュー取り揃えております。</span>
               </li>
             </ul>
               
               <div className="sub font-alt">※価格は全て税込みとなっております。<br />
              ※メニューの内容は予告なく変更となる場合がございます。ご了承ください。</div>
             
            </div>
          </div>
        </div>
        {/* End Service Item */}
        {/* Service Item */}
        <div
          className="tab-pane fade"
          id="service-ui-ux-design"
          role="tabpanel"
        >
          <div className="row">
            <div className="col-lg-4 mb-md-40 mb-xs-30">
              <blockquote className="mt-0 mb-0">
              <p className="font-alt mb-20 mb-sm-10">
                  ちょっとしたつまみや<br />
                  お酒のあてに<br />
                  こだわりの一品です。
                </p>
              </blockquote>
            </div>
            <div className="col-md-6 col-lg-4 mb-sm-30">
            <ul class="food-menu font-alt" >
               <li class="item">
                 <span class="name">青とうがらしタラコ</span>
                 <span class="price">¥600</span>
               </li>
               <hr />
               <li class="item">
                 <span class="name">セロリの漬物</span>
                 <span class="price">¥500</span>
               </li>
               <hr />
               <li class="item">
                 <span class="name">つぶ貝旨煮</span>
                 <span class="price">¥620</span>
               </li>
               <hr />
               <li class="item">
                 <span class="name">海苔巻き梅水晶<div className="sub">サメ軟骨梅肉和え</div></span>
                 <span class="price">¥550</span>
               </li>
               <hr />
               <li class="item">
                 <span class="name">わさびで食べる生ハム</span>
                 <span class="price">¥500</span>
               </li>
               <hr />
               <li class="item">
                 <span class="name">奈良漬とクリームチーズの西京味噌<div className="sub">クラッカー添え</div></span>
                 <span class="price">¥600</span>
               </li>
               <hr />
               <li class="item">
                 <span class="name">京揚げ炭火焼き</span>
                 <span class="price">¥550</span>
               </li>
               <hr />
               <li class="item">
                 <span class="name">しらすと大葉の出汁巻き卵</span>
                 <span class="price">¥650</span>
               </li>
               <hr />
               <li class="item">
                 <span class="name">漬物盛り</span>
                 <span class="price">¥650</span>
               </li>
               <hr />
               <li class="item">
               <span class="name">炙り珍味盛合わせ<div className="sub">(鮭とば・エイヒレ・うるめ鰯・畳鰯・ホタルイカ)</div></span>
                 <span class="price">¥1,350</span>
               </li>
               <hr />
             </ul>
            </div>
            <div className="col-md-6 col-lg-4">
            <ul class="food-menu font-alt" >
               {/* <li class="item">
                 <span class="name">シャーベット</span>
                 <span class="price">¥480</span>
               </li>
               <hr />
               <li class="item">
                 <span class="name"></span>
                 <span class="price sub2">その他メニュー取り揃えております。</span>
               </li> */}
             </ul>
               
               <div className="sub font-alt">※価格は全て税込みとなっております。<br />
              ※メニューの内容は予告なく変更となる場合がございます。ご了承ください。</div>
            </div>
          </div>
        </div>
        {/* End Service Item */}
        {/* Service Item */}
        <div className="tab-pane fade" id="service-animation" role="tabpanel">
          <div className="row">
            <div className="col-lg-4 mb-md-40 mb-xs-30">
              <blockquote className="mt-0 mb-0">
              <p className="font-alt mb-20 mb-sm-10">
                  店主が厳選した<br />
                  こだわりのお飲み物を<br />
                  ご用意しております。
                </p>
              </blockquote>
            </div>
            <div className="col-md-6 col-lg-4 mb-sm-30">
            <ul class="food-menu font-alt" >
            <div className="sub2">ビール</div>
               <li class="item">
                 <span class="name">サッポロクラシック生</span>
                 <span class="price">¥590</span>
               </li>
               <hr />
               <li class="item">
                 <span class="name">サッポロ赤星（中瓶）</span>
                 <span class="price">¥770</span>
               </li>
               <hr />
               <li class="item">
                 <span class="name">サッポロエビス（中瓶）</span>
                 <span class="price">¥950</span>
               </li>
               <hr />
            <div className="sub2">ハイボール</div>
               <li class="item">
                 <span class="name">スーパーニッカ</span>
                 <span class="price">¥650</span>
               </li>
               <hr />
               <li class="item">
                 <span class="name">デュワーズホワイトラベル</span>
                 <span class="price">¥490</span>
               </li>
               <hr />
               <li class="item">
                 <span class="name">竹鶴</span>
                 <span class="price">¥950</span>
               </li>
               <hr />
             </ul>
            </div>
            <div className="col-md-6 col-lg-4">
            <ul class="food-menu font-alt" >
            <div className="sub2">ワイン</div>
               <li class="item">
               <span class="name">グラス各種<div className="sub">(赤・白)</div></span>
                 <span class="price">¥670〜</span>
               </li>
               <div className="sub">グラスワイン各種ご用意しております。お気軽にお申し付けください。</div>
               <hr />
               <div className="sub2">焼酎</div>
               <li class="item">
               <span class="name">各種<div className="sub">(芋・麦・米)</div></span>
                 <span class="price">¥550〜</span>
               </li>
               <hr />
               <div className="sub2">日本酒</div>
               <li class="item">
               <span class="name">各種</span>
               <span class="price"><div className="sub">グラス</div>620〜</span>
               <span class="price"><div className="sub">一合</div>¥1,190〜</span>
               </li>
               <hr />
               <div className="sub2">ソフトドリンク</div>
               <li class="item">
               <span class="name">各種<div className="sub"></div></span>
                 <span class="price">¥390〜</span>
               </li>
             </ul>
               
               <div className="sub font-alt">※価格は全て税込みとなっております。<br />
              ※メニューの内容は予告なく変更となる場合がございます。ご了承ください。</div>
            </div>
          </div>
        </div>
      </div>{" "}
    </>
  );
}
