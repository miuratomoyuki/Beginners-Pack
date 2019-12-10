
function ChangeTab(tabname) {
   // 全部消す
   document.getElementById('tab1').style.display = 'none';
   document.getElementById('tab2').style.display = 'none';
   document.getElementById('tab3').style.display = 'none';
	 document.getElementById('tab4').style.display = 'none';
	 document.getElementById('tab5').style.display = 'none';
	 document.getElementById('tab6').style.display = 'none';
	 document.getElementById('tab7').style.display = 'none';
	 document.getElementById('tab8').style.display = 'none';
	 document.getElementById('tab9').style.display = 'none';
	 document.getElementById('tab10').style.display = 'none';
	 document.getElementById('tab11').style.display = 'none';
	 document.getElementById('tab12').style.display = 'none';
	 // 指定箇所のみ表示
   document.getElementById(tabname).style.display = 'block';
}




$(function(){
   // #で始まるアンカーをクリックした場合に処理
   $('a[href^=#]').click(function() {

      // スクロールの速度
      var speed = 400; // ミリ秒
      // アンカーの値取得
      var href= $(this).attr("href");
      // 移動先を取得
      var target = $(href == "#" || href == "" ? 'html' : href);
      // 移動先を数値で取得
      var position = target.offset().top-130;
      // スムーススクロール
      $('body,html').animate({scrollTop:position}, speed, 'swing');
      return false;
   });
});
