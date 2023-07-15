class PromptContent extends HTMLElement {
  constructor() {
    super();

    const shadowRoot = this.attachShadow({ mode: 'open' });

    const text = document.createElement('h1');
    text.textContent = 'Open the console to view the output.';

    shadowRoot.appendChild(text);
  }
}

customElements.define('prompt-content', PromptContent);
