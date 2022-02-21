const users = [
    ["Lola", "La vida es como la vida misma"],
    ["Manolo", "Fabada pasada no mueve molino"],
    ["Sandrita", "No por mucho madrugar los clavos te caen del cielo"]
]

class UserData extends HTMLElement {
    constructor() {
      super();
      let template = document.querySelector('#user');
      let templateContent = template.content;
      const shadowRoot = this.attachShadow({mode: 'open'})
        .appendChild(templateContent.cloneNode(true));
  }
}

customElements.define('user-data', UserData)

const container = document.querySelector("#mainContainer")

for (let item of users) {
    const user = document.createElement('user-data');
    const userName = document.createElement('span');
    const status = document.createElement('span');
    userName.innerText = item[0];
    userName.setAttribute("slot","userName");
    status.innerText = item[1];
    status.setAttribute("slot","status");
    user.appendChild(userName)
    user.appendChild(status)
    container.appendChild(user)
}