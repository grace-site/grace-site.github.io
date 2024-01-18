//header

class Header extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback(){
        this.innerHTML = `
        <div class="nav-wrapper">
            <div class="left-side">
                <div class="menu" onclick="toggleMenu()">
                    <i data-feather="menu" class="menu-icon"></i>
                </div>
                <div class="brand">
                    <a href="/">Hiu Yan Chan</a>
                    <div> Creative media artist & programmer </div>
                </div>
                
            </div>
            <div class="right-side">
                
                <div class="nav-link-wrapper">
                    <div class="dropdown-wrapper">
                        <a onclick="toggleDropdown()" class="dropdown-btn">
                            <div>Projects</div>
                            <i data-feather="chevron-down" class="down-icon"></i>
                        </a>
                    
            
                        <div class="dropdown-items">
                            <div id="nav-all" class="dropdown-item">
                                <a href="/">All</a>
                            </div>
                            <div id="nav-coding" class="dropdown-item">
                                <a href="/coding.html">Coding</a>
                            </div>
                            <div id="nav-installation" class="dropdown-item">
                                <a href="/installation.html">Installation</a>
                            </div>
                            <div id="nav-animation" class="dropdown-item">
                                <a href="/animation.html">Animation</a>
                            </div>
                            <div id="nav-graphic-design" class="dropdown-item">
                                <a href="/graphic-design.html">Graphic design</a>
                            </div>
                            <div id="nav-fine-art" class="dropdown-item">
                                <a href="/fine-art.html">Fine art</a>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div class="nav-link-wrapper">
                    <a href="/about.html">About</a>
                </div>

                <div class="nav-link-wrapper">
                    <a href="/contact.html">Contact</a>
                </div>
                
            </div>
        </div>
        `;
    }
  
  }

customElements.define('header-component', Header);


//footer

class Footer extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback(){
        this.innerHTML = `
        <div class="footer-wrapper">
            <p>
                ..
                <br>
                https://grace-site.github.io/
                <br>
                All content by Hiu Yan Chan and collaborators. 
                <br>
                Website designed and coded by Hiu Yan Chan, open source on Github.
                <br>
                Content and design are distributed under a Creative Commons license, when permitted. 
            </p>
        </div>
        `;
}

}


customElements.define('footer-component', Footer);

//back to projects and other works

class OtherWorks extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback(){
        this.innerHTML = `
        <a class="back-to-projects-wrapper" href = "/">
                <i data-feather="chevron-left" class="back-icon px40"></i>
                <div class="back-to-projects">Back to Projects</div>
        </a>
        <div class="other-works-wrapper">
                <div class="other-works-title">
                    <h2>Other works</h2>
                </div>
                <div class="other-works three-column-wrapper"></div>
        </div>
        `;
}

}

customElements.define('other-works-component', OtherWorks);
