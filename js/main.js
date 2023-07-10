// $(function(){
//   $('a[href^="#"]').click(function(){
//   // <a>を選択しクリックイベントを設定。
//   // href属性が#で始まるリンクを対象に 
//   let href = $(this).attr("href");
//     // クリックされたhrefの値を取得
//     // $(this)はクリックされたリンク要素自体
//   let target = $(href == "#" || href == "" ?'html' : href);
//   // 取得先が#または空欄であれば、top画面にそれ以外はhrefの要素を設定
//   let position = target.offset().top;
//   //offset().topがtop画面までの距離を測定。 
//   $("html, body").animate({scrollTop:position}, 600 ,"swing");
//   // animateメソッドを使ってスムーズなスクロール
//   // scrollTop:positionはスクロール位置を指定。600ミリ秒でswingはスクロール加減速をアニメーションで指定
//   return false;
//   // この行で動作がキャンセル
//   });
// });

document.addEventListener('DOMContentLoaded', function() {
  // ページ内のリンクをクリックした時に動作する
  const links = document.querySelectorAll('a[href^="#"]');
  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function(event) {
      event.preventDefault();
      
      // リンクを取得
      const href = this.getAttribute("href");
      // ジャンプ先のid名をセット
      const target = (href === "#" || href === "") ? document.documentElement : document.querySelector(href);
      // トップからジャンプ先の要素までの距離を取得
      const position = target.offsetTop;
      // animateでスムーススクロールを行う
      // 600はスクロール速度で単位はミリ秒
      window.scrollTo({top: position, behavior: "smooth"});
    });
  }
});
