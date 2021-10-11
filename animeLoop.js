var emojis = [
    "➜➜➜➜➜",
    "▼▲▼▲▼",
    "◆◇◆◇◆",
    "◯＠◯◯◯",
    "◯●◉●◯",
    "◯➜●➜＠",
    "A+B+C",
    "1+1=2",
    "▲+▼=◆",
    "◠+◡=◯",
    "˄+⌵=✖",
    "for{}",
    ".name",
    "if(){",
    "✩★★★★",
    "★★✩★★",
    "★★★★✩",
    "✭✮✭✮✭",
    "❋❊❋❊❋",
    "✦✧✦✧✦",
    "(^ο^)",
    "(≧▽≦)",
    "(ˊ▽ˋ)",
    "4+4=8",
    "ο+ο=８",
    "♩+♩=♪",
    "====>",
    "⋯‒=≡✩",
    "▼▲‒△▽",
    "(‾▽‾)",
    "(╵◡╵)",
    "(^▿^)",
    "凸凹凸凹凸",
    "♪^ワ^♪",
    "#—▁—)",
    "3/3=♀",
    "(◎д◎)",
    "(°ρ°)",
    "S➜⚀➜⚁",
    "⚂➜$➜⚃",
    "⚄➜⚅➜G",
    "σ\"✩><",
    "ム月ヒヒ灬",
    "舟夕止口刀"
]

function Loop() {
    // 获取ul，然后再获取li
    var ul = document.getElementsByClassName('flip_container')
    var lis = ul[0].getElementsByTagName("li")
    // 随机获取一组emoji
    var emoji = emojis[Math.round(Math.random()*emojis.length)]
    // 遍历li 然后修改文本内容 以及设置延时修改transform
    for (let i = 0; i < lis.length; i++) {
        const element = lis[i];
        var b = element.getElementsByTagName('b')
        b[0].innerHTML = emoji[i]
        setTimeout(function(){
            element.style.transform = 'rotateY(-180deg)'
        },1000*(i+1))
    }
    // 翻回去
    for (let i = 0; i < lis.length; i++) {
        const element = lis[i];
        element.style.transform = 'rotateY(0deg)';
    }
}

window.onload = function(){
    Loop();
    setInterval(Loop, 7000);
}
