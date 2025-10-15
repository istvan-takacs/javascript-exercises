const container = document.querySelector("#container");
const documentBody = document.querySelector("body");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";
container.appendChild(content);


const redP = document.createElement("p");
redP.textContent = "Hey I'm red";
redP.style.color = "red";
container.appendChild(redP);

const blueH = document.createElement("h3");
blueH.textContent = "Hey I'm a blue h3";
blueH.style.color = "blue";
container.appendChild(blueH);

const anotherDiv = document.createElement("div");
anotherDiv.setAttribute("style", "border: solid black; background: pink;");
documentBody.appendChild(anotherDiv);

const hInDiv = document.createElement("h1");
hInDiv.textContent = "I'm in a div";
anotherDiv.appendChild(hInDiv);

const meToo = document.createElement("p");
meToo. textContent = "ME TOO!";
anotherDiv.appendChild(meToo);

const btn = document.querySelector("#btn");
btn.onclick = () => alert("Hello World!")

const btnThree = document.querySelector("#btn-three");
btnThree.addEventListener("click", (e) => {
    console.log(e.target);
    e.target.style.background = "blue";
    alert("Hello World!");
});

let link = document.querySelector('a');

link.addEventListener('click',function(event) {
    console.log(`${event.target} was clicked!`);
    event.preventDefault();
});
