const templateToBuildinElement = (templateSelector, elementName, elementDOMInterface) => {
    try {
        customElements.define(
            elementName,
            class extends elementDOMInterface {
                constructor() {
                    super();
                    this.attachShadow({mode: 'open'})
                    .appendChild(
                        document.querySelector(templateSelector)
                        .content.cloneNode(true)
                    );
                }
            },
            { extends: elementLabel}
        );
    } catch (err) {
        if ( err instanceof DOMException) {
            console.warn("Custom HTML elements must have a '-' in the name.")
            console.error(err)
        }
    }

}

const templateToAutonomousElement = (templateSelector, elementName) => {
    try {
        customElements.define(
            elementName,
            class extends HTMLElement {
                constructor() {
                    super();
                    this.attachShadow({mode: 'open'})
                    .appendChild(
                        document.querySelector(templateSelector)
                        .content.cloneNode(true)
                    );
                }
            },
        );
    } catch (err) {
        if ( err instanceof DOMException) {
            console.warn("Custom HTML elements must have a '-' in the name.")
            console.error(err)
        }
    }

}