<template>
  <div class="main">
    <div class="mw_1200">
      <div class="section__logo section__logo__back">
        <router-link to="/">
          <img class="back" src="../assets/WEB_MATERIAL-05.svg" />
        </router-link>
        <router-link to="/">
          <img class="logo" src="../assets/logo_grocasa.svg" />
        </router-link>
      </div>
    </div>

    <div class="mw_100pc">
      <!-- <img src="../assets/propuestaSilder.jpg"> -->
      <div class="slider__controls">
        <a @click="moveSlider(n)" href="#" v-for="n in slides.length" :key="n">{{n}}</a>
      </div>
      <div class="slider" ref="slider">
        <div
          v-for="(image,index) in slides"
          :key="index"
          :style="`bakground-image:url(${image})`"
          class="slider__content"
        ></div>
      </div>
      <div class="ocultaScroll"></div>
    </div>

    <div class="mw_1200">
      <div class="section__heading orange">
        <h1>Ático duplex de obra nueva</h1>
        <h6 class="section__heading grey">Marianao, Sant Boi de Llobregat</h6>
      </div>

      <div class="section__detalle">
        <p>
          Duplex de obra seminueva en Marianao. Finca del 2019. El piso consta de una planta con entrada al salón y
          final
          en terraza. El salón da entrada a la cocina y al pasillo que distribuye una de las habitaciones dobles y uno
          de
          los cuartos de baño de tres piezas.
        </p>
        <p>
          Duplex de obra seminueva en Marianao. Finca del 2019. El piso consta de una planta con entrada al salón y
          final
          en terraza. El salón da entrada a la cocina y al pasillo que distribuye una de las habitaciones dobles y uno
          de
          los cuartos de baño de tres piezas.
        </p>
        <p>
          Duplex de obra seminueva en Marianao. Finca del 2019. El piso consta de una planta con entrada al salón y
          final
          en terraza. El salón da entrada a la cocina y al pasillo que distribuye una de las habitaciones dobles y uno
          de
          los cuartos de baño de tres piezas.
        </p>

        <div class="car__info">
          <div class="icons">
            <div>
              <div>
                <img src="../assets/WEB_MATERIAL-11.svg" />
                <span>102m</span>
              </div>
              <div>
                <img src="../assets/WEB_MATERIAL-10.svg" />
                <span>3</span>
              </div>
              <div>
                <img src="../assets/WEB_MATERIAL-09.svg" />
                <span>2</span>
              </div>
            </div>
          </div>
          <div>
            <p>
              330.000
              <span>€</span>
            </p>
            <img src="../assets/WEB_MATERIAL-08.svg" />
          </div>
        </div>

        <div class="car">
          <div>
            <strong>Características</strong>
            <ul>
              <li>
                Ático 102 m
                <sup>2</sup> (construidos)
              </li>
              <li>3 Habitaciones</li>
              <li>
                Segunda mano 100 m
                <sup>2</sup> (útiles)
              </li>
              <li>Reformado</li>
              <li>2 baños</li>
            </ul>
          </div>
          <div>
            <strong>Extras</strong>
            <ul>
              <li>Terraza</li>
              <li>Balcón</li>
              <li>Ascensor</li>
              <li>Calefacción</li>
              <li>Aire acondicionado</li>
            </ul>
          </div>
        </div>

        <div class="iframe__cont">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11979.905842276577!2d2.012257943881962!3d41.3528653682763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a49b7a6d7df423%3A0x17e75c863b903c7d!2sMarianao%2C%2008830%20San%20Baudilio%20de%20Llobregat%2C%20Barcelona!5e0!3m2!1ses!2ses!4v1595630310651!5m2!1ses!2ses"
            width="600"
            height="450"
            frameborder="0"
            style="border:0;"
            allowfullscreen
            aria-hidden="false"
            tabindex="0"
          ></iframe>
        </div>
        <div class="section__detalle__footer">
          <div class="button__togle">
            <input type="checkbox" id="switch" />
            <label for="switch">
              <span>Avisarme si baja</span>
            </label>
          </div>
          <div>
            <a
              href="https://www.grocasa.es/"
              class="button"
              target="_blank"
              rel="noopener"
            >Contactar</a>
          </div>
        </div>
      </div>

      <div class="section__heading grey--dark">
        <h2>También pueden interesarte</h2>
      </div>

         <div class="section__index">
        <div>
          <img
            srcset="../assets/Rectangle-1@2x.png, ../assets/Rectangle-2@2x.png 1.5x, ../assets/Rectangle-3@2x.png 2x"
            src="../assets/Rectangle-1@2x.png"
            alt="Marianao, Sant Boi de Llobregat"
          />
          <div>
            <h3>Ático duplex de Obra Nueva</h3>
            <h6>Marianao, Sant Boi de Llobregat</h6>
          </div>

          <div>
            <div>
              <div>
                <img src="../assets/WEB_MATERIAL-11.svg" />
                <span>102m</span>
              </div>
              <div>
                <img src="../assets/WEB_MATERIAL-10.svg" />
                <span>3</span>
              </div>
              <div>
                <img src="../assets/WEB_MATERIAL-09.svg" />
                <span>2</span>
              </div>
            </div>
            <div>
              330.000
              <span>€</span>
            </div>
            <div>
              <router-link to="/detalle">
                <svg
                  class="button__1"
                  id="Layer_1"
                  data-name="Layer 1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 92.56 26"
                >
                  <defs />
                  <g id="Group_6" data-name="Group 6">
                    <g id="Rectangle_8" data-name="Rectangle 8">
                      <path
                        class="cls-1"
                        d="M13.39,0h66a13,13,0,0,1,13,13h0a13,13,0,0,1-13,13h-66a13,13,0,0,1-13-13h0A13,13,0,0,1,13.39,0Z"
                      />
                      <path
                        class="cls-2"
                        d="M13.39.5h66A12.5,12.5,0,0,1,91.89,13h0a12.5,12.5,0,0,1-12.5,12.5h-66A12.5,12.5,0,0,1,.89,13h0A12.5,12.5,0,0,1,13.39.5Z"
                      />
                    </g>
                    <g id="Más_info" data-name="Más info" class="cls-3">
                      <text class="cls-4" transform="translate(22.12 17)">
                        Más in
                        <tspan class="cls-5" x="37.16" y="0">f</tspan>
                        <tspan class="cls-6" x="41.34" y="0">o</tspan>
                      </text>
                    </g>
                  </g>
                </svg>
              </router-link>
            </div>
          </div>
        </div>

        <div>
          <img
            srcset="../assets/Rectangle-1@2x.png, ../assets/Rectangle-2@2x.png 1.5x, ../assets/Rectangle-3@2x.png 2x"
            src="../assets/Rectangle-1@2x.png"
            alt="Marianao, Sant Boi de Llobregat"
          />
          <div>
            <h3>Ático duplex de Obra Nueva</h3>
            <h6>Marianao, Sant Boi de Llobregat</h6>
          </div>

          <div>
            <div>
              <div>
                <img src="../assets/WEB_MATERIAL-11.svg" />
                <span>102m</span>
              </div>
              <div>
                <img src="../assets/WEB_MATERIAL-10.svg" />
                <span>3</span>
              </div>
              <div>
                <img src="../assets/WEB_MATERIAL-09.svg" />
                <span>2</span>
              </div>
            </div>
            <div>
              330.000
              <span>€</span>
            </div>
            <div>
              <router-link to="/detalle">
                <svg
                  class="button__1"
                  id="Layer_1"
                  data-name="Layer 1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 92.56 26"
                >
                  <defs />
                  <g id="Group_6" data-name="Group 6">
                    <g id="Rectangle_8" data-name="Rectangle 8">
                      <path
                        class="cls-1"
                        d="M13.39,0h66a13,13,0,0,1,13,13h0a13,13,0,0,1-13,13h-66a13,13,0,0,1-13-13h0A13,13,0,0,1,13.39,0Z"
                      />
                      <path
                        class="cls-2"
                        d="M13.39.5h66A12.5,12.5,0,0,1,91.89,13h0a12.5,12.5,0,0,1-12.5,12.5h-66A12.5,12.5,0,0,1,.89,13h0A12.5,12.5,0,0,1,13.39.5Z"
                      />
                    </g>
                    <g id="Más_info" data-name="Más info" class="cls-3">
                      <text class="cls-4" transform="translate(22.12 17)">
                        Más in
                        <tspan class="cls-5" x="37.16" y="0">f</tspan>
                        <tspan class="cls-6" x="41.34" y="0">o</tspan>
                      </text>
                    </g>
                  </g>
                </svg>
              </router-link>
            </div>
          </div>
        </div>

        <div>
          <img
            srcset="../assets/Rectangle-1@2x.png, ../assets/Rectangle-2@2x.png 1.5x, ../assets/Rectangle-3@2x.png 2x"
            src="../assets/Rectangle-1@2x.png"
            alt="Marianao, Sant Boi de Llobregat"
          />
          <div>
            <h3>Ático duplex de Obra Nueva</h3>
            <h6>Marianao, Sant Boi de Llobregat</h6>
          </div>

          <div>
            <div>
              <div>
                <img src="../assets/WEB_MATERIAL-11.svg" />
                <span>102m</span>
              </div>
              <div>
                <img src="../assets/WEB_MATERIAL-10.svg" />
                <span>3</span>
              </div>
              <div>
                <img src="../assets/WEB_MATERIAL-09.svg" />
                <span>2</span>
              </div>
            </div>
            <div>
              330.000
              <span>€</span>
            </div>
            <div>
              <router-link to="/detalle">
                <svg
                  class="button__1"
                  id="Layer_1"
                  data-name="Layer 1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 92.56 26"
                >
                  <defs />
                  <g id="Group_6" data-name="Group 6">
                    <g id="Rectangle_8" data-name="Rectangle 8">
                      <path
                        class="cls-1"
                        d="M13.39,0h66a13,13,0,0,1,13,13h0a13,13,0,0,1-13,13h-66a13,13,0,0,1-13-13h0A13,13,0,0,1,13.39,0Z"
                      />
                      <path
                        class="cls-2"
                        d="M13.39.5h66A12.5,12.5,0,0,1,91.89,13h0a12.5,12.5,0,0,1-12.5,12.5h-66A12.5,12.5,0,0,1,.89,13h0A12.5,12.5,0,0,1,13.39.5Z"
                      />
                    </g>
                    <g id="Más_info" data-name="Más info" class="cls-3">
                      <text class="cls-4" transform="translate(22.12 17)">
                        Más in
                        <tspan class="cls-5" x="37.16" y="0">f</tspan>
                        <tspan class="cls-6" x="41.34" y="0">o</tspan>
                      </text>
                    </g>
                  </g>
                </svg>
              </router-link>
            </div>
          </div>
        </div>

        <div>
          <img
            srcset="../assets/Rectangle-1@2x.png, ../assets/Rectangle-2@2x.png 1.5x, ../assets/Rectangle-3@2x.png 2x"
            src="../assets/Rectangle-1@2x.png"
            alt="Marianao, Sant Boi de Llobregat"
          />
          <div>
            <h3>Ático duplex de Obra Nueva</h3>
            <h6>Marianao, Sant Boi de Llobregat</h6>
          </div>

          <div>
            <div>
              <div>
                <img src="../assets/WEB_MATERIAL-11.svg" />
                <span>102m</span>
              </div>
              <div>
                <img src="../assets/WEB_MATERIAL-10.svg" />
                <span>3</span>
              </div>
              <div>
                <img src="../assets/WEB_MATERIAL-09.svg" />
                <span>2</span>
              </div>
            </div>
            <div>
              330.000
              <span>€</span>
            </div>
            <div>
              <router-link to="/detalle">
                <svg
                  class="button__1"
                  id="Layer_1"
                  data-name="Layer 1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 92.56 26"
                >
                  <defs />
                  <g id="Group_6" data-name="Group 6">
                    <g id="Rectangle_8" data-name="Rectangle 8">
                      <path
                        class="cls-1"
                        d="M13.39,0h66a13,13,0,0,1,13,13h0a13,13,0,0,1-13,13h-66a13,13,0,0,1-13-13h0A13,13,0,0,1,13.39,0Z"
                      />
                      <path
                        class="cls-2"
                        d="M13.39.5h66A12.5,12.5,0,0,1,91.89,13h0a12.5,12.5,0,0,1-12.5,12.5h-66A12.5,12.5,0,0,1,.89,13h0A12.5,12.5,0,0,1,13.39.5Z"
                      />
                    </g>
                    <g id="Más_info" data-name="Más info" class="cls-3">
                      <text class="cls-4" transform="translate(22.12 17)">
                        Más in
                        <tspan class="cls-5" x="37.16" y="0">f</tspan>
                        <tspan class="cls-6" x="41.34" y="0">o</tspan>
                      </text>
                    </g>
                  </g>
                </svg>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>



export default {
  name: "detalle",

  mounted() {
    this.slider = this.$refs.slider;
    this.width = this.slider.offsetWidth;
  },
  data() {
    return {
      slider: null,
      width: null,
      slides: [
        "https://vuejsdevelopers.com/images/logo_graphic_no_base_94x94.png",
        "https://vuejsdevelopers.com/images/logo_graphic_no_base_94x94.png",
        "https://vuejsdevelopers.com/images/logo_graphic_no_base_94x94.png"
      ]
    };
  },
  methods:{
    moveSlider(n){
      n = n-1;
      this.slider.scrollTo({
        left: this.width * n,
        behavior:'smooth'
      })
    }
  }
};
</script>

