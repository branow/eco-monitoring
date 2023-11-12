
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
            <a class="taxes-btn" href="/taxes-page">Taxes</a>
            <a class="damages-btn" href="/damages-calculations-page">Damages calculations</a>
            <a class="health-btn" href="/health-risk-page">Health risk</a>
        </div>
        
        <div class="dropdown">
         <button class="dropbtn">Atmospheric air</button>
            <div class="dropdown-content">
                <a href="/atmosphere-page?tables=company">Companies</a>
                <a href="/atmosphere-page?tables=pollutant">Pollutants</a>
                <a href="/atmosphere-page?tables=pollution" >Pollutions</a>
                <a href="/atmosphere-page?tables=organ">Organs</a>
                <a href="/atmosphere-page?tables=pollutant-impact" >Pollutants impact</a>
                <a href="/atmosphere-page?tables=settlement">Settlement</a>
                <a href="/atmosphere-page?tables=settlement-factors" >Settlement Factors</a>
                <a href="/atmosphere-page?tables=settlement-type-factor">Settlement Type Factor</a>
                <a href="/atmosphere-page?tables=population-size-factor" >Population Type Factor</a>
                <a href="/atmosphere-page?tables=pollutant-tax-rate" >Pollutant Tax Rate</a>
                <a href="/atmosphere-page?tables=pollutant-class-tax-rate" >Pollutant Class Tax Rate</a>
                <a href="/atmosphere-page?tables=pollutant-gdk-tax-rate" >Pollutant Gdk Tax Rate</a>
            </div>
        </div>
   
        </div>
      </div>
    </header>
        `
    }
}

customElements.define('my-header', MyHeader)

