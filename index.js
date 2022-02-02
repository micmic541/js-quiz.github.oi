// クイズデータ
const quiz = [
    // クイズ１つめ
    {
        question: 'ゲーム市場、もっとも売れたゲーム機は次の内どれ？',
        answers: ['Switch', 'DS', 'XBOX', 'PS4'],
        correct: 'DS'
    },
    // クイズ２つめ
    {
        question: 'ページ主が一番食べたいお寿司は次の内どれ？',
        answers: ['サーモン', 'マグロ', '河童巻き', 'UNAGI'],
        correct: 'サーモン'
    },
    // クイズ３つめ
    {
        question: 'ページ主が好きなゲームは次の内どれ？',
        answers: ['あつもり', 'ポケモン', 'テトリス', '桃鉄'],
        correct: 'ポケモン'
    }
];

// クイズの長さ（個数）取得
const quizLength = quiz.length;
// クイズの定義・初期化
let quizIndex = 0;
// スコア定義・初期化
let score = 0;
// ボタン取得
const $button = document.getElementsByTagName('button');
// ボタンの個数（長さ）取得
const buttonLength = $button.length;

// クイズの問題
const setUpQuiz = function(){
    // クイズ欄にクイズのquestion内容を代入
    document.getElementById('js-question').textContent = quiz[quizIndex].question;
    // ボタンの定義・初期化
    let buttonIndex = 0;
    while(buttonIndex < buttonLength){
        // ボタンにクイズのanswersを代入
        $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
        buttonIndex++;
    };
};
// 上の関数呼び出し
setUpQuiz();

// イベントの関数
const clickHandler = function(e){
    if(quiz[quizIndex].correct === e.target.textContent){
        window.alert('correct!');
        score++;
    } else {
        window.alert('wrong..');
    }

    quizIndex++;
    if(quizIndex < quizLength){
        // 問題がまだあれば次の問題に
        setUpQuiz();
    } else {
        // 終了
        window.alert('終わり！あなたの正解数は' + score + '/' + quizLength + 'です。');
    }
};

// イベント実行
let handleIndex = 0;
while (handleIndex < buttonLength){
    $button[handleIndex].addEventListener('click', function(e){
        clickHandler(e);
    });
    handleIndex++;
}