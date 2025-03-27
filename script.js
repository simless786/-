
const scenes = {
  scene1: {
    text: `깊은 밤, 깊이 잠든 지우. 그런데 어깨에 이 무게감은 뭐지?
살며시 눈을 떠보니 작은 요정이 말을 건다.

"안녕? 오늘은... 특별한 날이야. 나랑 여행을 떠나볼래?"`,
    image: "assets/fairy.png",
    choices: [
      { text: "그래! 좋아!", next: "scene2" },
      { text: "음... 조금 부담스러워...", next: "ending_sleep" }
    ]
  },
  scene2: {
    text: `꿈 같은 분위기야. 아직 꿈을 꾸는 걸까?
너를 많이 좋아하는 친구가 이걸 준비했대. 누구게?`,
    choices: [
      { text: "서윤이..?", next: "scene3" },
      { text: "난 인기가 너무 많아서 잘 모르겠어..", next: "ending_sleep" }
    ]
  },
  scene3: {
    text: `요정이 웃으며 말한다.
"정답이야! 바로 서윤이가 널 위해 이 여행을 준비했지!"

갑자기 눈앞에 꽃들이 피어나고, 밝은 빛이 퍼진다.`,
    choices: [
      { text: "고마워... 감동이야...", next: "ending_happy" }
    ]
  },
  ending_sleep: {
    text: `요정이 슬프게 웃으며 사라진다...
"그럼 다음 생일에 다시 올게... 잘 자~"

그리고 너는 다시 깊은 잠에 빠진다...`,
    choices: []
  },
  ending_happy: {
    text: `밝은 빛 속에서 네 앞에 커다란 케이크가 나타난다.

🎂 생일 축하해, 지우! 🎉

너의 오늘을 누구보다 특별하게 만들어주고 싶었어!`,
    image: "assets/cake.jpg",
    choices: []
  }
};

const textEl = document.getElementById('text');
const choicesEl = document.getElementById('choices');

function renderScene(sceneId) {
  const scene = scenes[sceneId];
  textEl.innerHTML = scene.text;
  choicesEl.innerHTML = '';

  if (scene.image) {
    const img = document.createElement('img');
    img.src = scene.image;
    img.alt = '씬 이미지';
    img.style.maxWidth = '200px';
    img.style.marginTop = '1rem';
    textEl.appendChild(img);
  }

  scene.choices.forEach(choice => {
    const btn = document.createElement('button');
    btn.textContent = choice.text;
    btn.classList.add('choice-btn');
    btn.onclick = () => renderScene(choice.next);
    choicesEl.appendChild(btn);
  });
}

renderScene('scene1');
