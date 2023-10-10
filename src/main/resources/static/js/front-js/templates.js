
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
        <a href="/atmosphere-page?tables=organ">Organs/Systems</a>
        <a href="/atmosphere-page?tables=pollutant-impact">Pollutant Impact</a>
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


customElements.define('my-header', MyHeader)

