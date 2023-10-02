
class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header>
        <div class="header">
        <a href="/main-page" class="logo">
          <div class="logo_container">
            <img class="logo-icon" alt="" src="/img/logo.png" />
            <div class="logo-name">EcoMetricsMonitoring</div>
          </div>
        </a>
        <div class="header-right">
<!--        <a class="nav_button" href="/atmosphere-page">Atmospheric air</a>-->
        <div class="dropdown">
         <button class="dropbtn">Atmospheric air</button>
        <div class="dropdown-content">
        <a href="/atmosphere-page?tables=companies">Companies</a>
        <a href="/atmosphere-page?tables=pollutants">Pollutants</a>
        <a href="/atmosphere-page?tables=pollutions" >Pollutions</a>
        <a href="/atmosphere-page?tables=all" >All tables</a>
</div>
</div>
        </div>
      </div>
    </header>
        `
    }
}


class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer>
      <section class="footer_section">
        <div class="logo_footer">
          <img class="logo-icon" alt="" src="/img/logo.png" />
          <div class="logo-name">EcoMetricsMonitoring</div>
        </div>

        <div class="company_footer">
          <span>Company</span>
          <ul class="company_ul">
            <a href="#default">
              <li class="company_il">About us</li>
            </a>
            <a href="#default">
              <li class="company_il">Contact</li>
            </a>
          </ul>
        </div>
      </section>
    </footer>
        `
    }
}

customElements.define('my-header', MyHeader)

