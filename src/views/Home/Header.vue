<template>
  <div>
    <base-nav
      container-classes="container-fluid"
      v-model="showMenu"
      :transparent="true"
      menu-classes="justify-content-end"
      class="navbar-horizontal navbar-main"
      style="background-color:#ffe411 !important"
      expand="lg"
    >
      <div slot="brand" class="navbar-wrapper">
        <b-navbar-brand to="/">
          <img src="img/brand/green.png">
        </b-navbar-brand>
      </div>

     <template>
       <div class="navbar-collapse-header">
         <b-row>
           <b-col cols="6" class="collapse-brand">
             <router-link to="/">
               <img src="img/brand/green.png">
             </router-link>
           </b-col>
           <b-col cols="6" class="collapse-close">
             <button type="button" class="navbar-toggler" @click="showMenu = false">
               <span></span>
               <span></span>
             </button>
           </b-col>
         </b-row>
       </div>

       <b-navbar-nav class="mr-auto">
         <b-nav-item to="/dashboard">
             <span class="nav-link-inner--text">Home</span>
         </b-nav-item>
         <b-nav-item to="/products" >
             <span class="nav-link-inner--text">Products</span>
         </b-nav-item>
         <b-nav-item to="/training">
             <span class="nav-link-inner--text">Training</span>
         </b-nav-item>
         <b-nav-item to="/about">
             <span class="nav-link-inner--text">About</span>
         </b-nav-item>
       </b-navbar-nav>
       <hr class="d-lg-none">
       <b-navbar-nav  class="align-items-lg-center ml-lg-auto">
         <b-nav-item link-classes="nav-link-icon" href="/cart"
              data-toggle="tooltip" data-original-title="Cart" >
            
             <span style="font-size: 24px; color: Grey;">
             <i class="fas fa-shopping-cart mr-2"></i>
            </span>

             <span class="nav-link-inner--text d-lg-none">Cart</span>
         </b-nav-item>
         
         <!-- This item dont have <b-nav-item> because they add class 'nav-link' which is not needed here -->
         <li class="nav-item d-none d-lg-block ml-lg-4" v-if="!isLoggedIn">
           <a href="/login" 
              class="btn btn-neutral btn-icon">
             <span class="nav-link-inner--text">Sign In</span>
           </a>
         </li>
         <li class="nav-item d-none d-lg-block ml-lg-4" v-if="!isLoggedIn">
           <a href="/register"
              class="btn btn-outline btn-icon">

             <span class="nav-link-inner--text">Sign Up</span>
           </a>
         </li>

          <b-media no-body class="align-items-center" v-if="isLoggedIn">
                  <span class="avatar avatar-sm rounded-circle">
                    <img alt="Image placeholder" src="img/theme/team-4.jpg">
                  </span>
            <b-media-body class="ml-2 d-none d-lg-block">
              <span class="mb-0 text-sm  font-weight-bold">{{name}}</span>
            </b-media-body>
          </b-media>
       </b-navbar-nav>
     </template>
    </base-nav>

    <div class="main-content">
      <zoom-center-transition
        :duration="pageTransitionDuration"
        mode="out-in"
      >
        <router-view></router-view>
      </zoom-center-transition>
    </div>

    <content-footer/>
  </div>
</template>
<script>
  import { BaseNav } from '@/components';
  import { ZoomCenterTransition } from 'vue2-transitions';
  import ContentFooter from './Footer.vue';

  export default {
    components: {
      BaseNav,
      ZoomCenterTransition,
      ContentFooter
    },
    props: {
      backgroundColor: {
        type: String,
        default: 'black'
      }
    },
    data() {
      return {
        showMenu: false,
        menuTransitionDuration: 250,
        pageTransitionDuration: 200,
        year: new Date().getFullYear(),
        name: null,
        isLoggedIn: false//localStorage.getItem('youngman.jwt') != null,
      };
    },
    computed: {
      title() {
        return `${this.$route.name} Page`;
      }
    },
    methods: {
        setDefaults() {
            if (this.isLoggedIn) {
                let user = JSON.parse(localStorage.getItem('youngman.user'))
                this.name = user.name
                this.user_type = user.is_admin
            }
        },
        change() {
            this.isLoggedIn = localStorage.getItem('youngman.jwt') != null
            this.setDefaults()
        },
        logout(){
            localStorage.removeItem('youngman.jwt')
            localStorage.removeItem('youngman.user')
            this.change()
            this.$router.push('/')
        },
      toggleNavbar() {
        document.body.classList.toggle('nav-open');
        this.showMenu = !this.showMenu;
      },
      closeMenu() {
        document.body.classList.remove('nav-open');
        this.showMenu = false;
      },
      setBackgroundColor() {
        document.body.classList.add('bg-default');
      },
      removeBackgroundColor() {
        document.body.classList.remove('bg-default');
      },
      updateBackground() {
        //if (!this.$route.meta.noBodyBackground) {
        //  this.setBackgroundColor();
        //} else {
          this.removeBackgroundColor()
        //}
      }
    },
    beforeDestroy() {
      this.removeBackgroundColor();
    },
    beforeRouteUpdate(to, from, next) {
      // Close the mobile menu first then transition to next page
      if (this.showMenu) {
        this.closeMenu();
        setTimeout(() => {
          next();
        }, this.menuTransitionDuration);
      } else {
        next();
      }
    },
    watch: {
      $route: {
        immediate: true,
        handler: function () {
          this.updateBackground()
        }
      }
    }
  };
</script>
<style lang="scss">
  $scaleSize: 0.8;
  @keyframes zoomIn8 {
    from {
      opacity: 0;
      transform: scale3d($scaleSize, $scaleSize, $scaleSize);
    }
    100% {
      opacity: 1;
    }
  }

  .main-content .zoomIn {
    animation-name: zoomIn8;
  }

  @keyframes zoomOut8 {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
      transform: scale3d($scaleSize, $scaleSize, $scaleSize);
    }
  }

  .main-content .zoomOut {
    animation-name: zoomOut8;
  }

  body {
  padding-top: 60px;
}
@media (max-width: 979px) {
  body {
    padding-top: 0px;
  }
}

  .navbar-horizontal .navbar-nav .nav-link .nav-link-inner--text {
    color: rgba(0,0,0, 1);
}
</style>
