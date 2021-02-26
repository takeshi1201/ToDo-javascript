import "./styles.css";
//TODO追加
const addBtn = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  creatInComplete(inputText);
};

//未完了TODO削除
const deleteFromComplete = (target) => {
  document.getElementById("no-list").removeChild(target);
};

const creatInComplete = (text) => {
  //未完了リストへdiv作成
  const div = document.createElement("div");
  div.className = "no-item";

  //未完了リストへli
  const li = document.createElement("li");
  li.innerText = text;

  //完了リストへbtn
  const completeBtn = document.createElement("button");

  completeBtn.innerText = "完了";
  completeBtn.addEventListener("click", () => {
    deleteFromComplete(completeBtn.parentNode);

    const addTarget = completeBtn.parentNode;
    const add = addTarget.firstElementChild.innerText;

    addTarget.textContent = null;
    addTarget.className = "yes-item";

    const li = document.createElement("li");
    li.innerText = add;

    const Backbtn = document.createElement("button");
    Backbtn.innerText = "戻す";
    Backbtn.addEventListener("click", () => {
      const deleteTarget = Backbtn.parentNode;
      document.getElementById("yes-list").removeChild(deleteTarget);

      const text = Backbtn.parentNode.firstElementChild.innerText;
      creatInComplete(text);
    });

    addTarget.appendChild(li);
    addTarget.appendChild(Backbtn);

    document.getElementById("yes-list").appendChild(addTarget);
  });

  const NoBtn = document.createElement("button");
  NoBtn.innerText = "削除";
  NoBtn.addEventListener("click", () => {
    deleteFromComplete(NoBtn.parentNode);
  });
  //divの配下にli
  div.appendChild(li);
  div.appendChild(completeBtn);
  div.appendChild(NoBtn);

  document.getElementById("no-list").appendChild(div);
};

const btn = document.getElementById("add-btn");

btn.addEventListener("click", () => addBtn());
