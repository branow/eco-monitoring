
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
        
        <div class="health-risk-nav-div">
            <a class="health-btn" href="/health-risk-page">Health risk</a>
        </div>
        
        <div class="dropdown">
         <button class="dropbtn">Atmospheric air</button>
            <div class="dropdown-content">
                <a href="/atmosphere-page?tables=companies">Companies</a>
                <a href="/atmosphere-page?tables=pollutants">Pollutants</a>
                <a href="/atmosphere-page?tables=pollutions" >Pollutions</a>
                <a href="/atmosphere-page?tables=organ">Organs</a>
                <a href="/atmosphere-page?tables=pollutant-impact" >Pollutants impact</a>
            </div>
        </div>
   
        </div>
      </div>
    </header>
        `
    }
}

customElements.define('my-header', MyHeader)

