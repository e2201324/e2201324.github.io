function toggle() {
       // 非表示
// $("#test-p-1").hide();

// 表示
// $("#test-p-1").show();

// 表示·非表示
$(".kieru").toggle();
}

function fade() {
    // フェードイン
// $("#test-p-1").fadeIn();
// スライドアウト
// $("#test-p-1").fade0ut();

// スライドアップ&ダウン
$(".kieru").fadeToggle();

}

function lawQuiz(choice) {
  const answers = {
    "心裡留保": "原則は有効（ただし相手方が悪意・有過失なら無効）",
    "通謀虚偽表示": "無効",
    "錯誤": "取消",
    "詐欺・強迫": "取消"
  };

 
  const cancelkanou = ["錯誤", "詐欺・強迫"];

  let result;
  if (cancelkanou.includes(choice)) {
    result = `正解 「${choice}」は取消です。`;
  } else {
    result = `不正解 「${choice}」は ${answers[choice]} です。`;
  }

  
  document.getElementById("explanation").textContent = result;
}
