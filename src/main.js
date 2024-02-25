class MyHeader extends HTMLElement{
    connectedCallback() {
        this.innerHTML = `
        <link rel="stylesheet" href="styles/overlay.css">
            <header>
                <nav class="boxes" style="--clr:black">
                    <a href="html/about.html" class="box">About Me</a>
                    <a href="html/experience.html" class="box">Experience</a>
                    <a href="html/projects.html" class="box">Projects</a>
                    <a href="index.html" class="name">Kieran Chafin</a>
                </nav>
                <line>
                </line>
            </header>
        `
    }
}

customElements.define('my-header', MyHeader)