<template>
  <div>
    <notifications></notifications>
    <base-nav
      container-classes="container-fluid"
      v-model="showMenu"
      :transparent="true"
      menu-classes="justify-content-end"
      class="navbar-horizontal navbar-main"
      style="background-color:#f7dd38 !important"
      expand="lg"
    >
      <div slot="brand" class="navbar-wrapper">
        <b-navbar-brand to="/">
          <img src="img/brand/logo.png" class="shadow-sm logo"> 
        </b-navbar-brand>
      </div>

     <template>
       <div class="navbar-collapse-header">
         <b-row>
           <b-col cols="6" class="collapse-brand">
             <router-link to="/">
               <img src="img/brand/logo.png" class="logo">
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
         <b-nav-item to="/dashboard"  exact exact-active-class="active">
             <dt><span class="nav-link-inner--text">Home</span></dt>
         </b-nav-item>
         <b-nav-item to="/products"  exact exact-active-class="active">
             <dt><span class="nav-link-inner--text">Products</span></dt>
         </b-nav-item>
         <b-nav-item to="/training"  exact exact-active-class="active">
             <dt><span class="nav-link-inner--text">Training</span></dt>
         </b-nav-item>
         <b-nav-item to="/about"  exact exact-active-class="active">
             <dt><span class="nav-link-inner--text">About</span></dt>
         </b-nav-item>
       </b-navbar-nav>
       <hr class="d-lg-none">
       <b-navbar-nav  class="align-items-lg-center ml-lg-auto">

           <form>
            <input type="text" class="form-control" placeholder="Search.."></form>



          <b-nav-item link-classes="nav-link-icon" to="/cart" exact exact-active-class="active"
              data-toggle="tooltip" data-original-title="Cart" >
            
             <span style="font-size: 24px; color: Grey;">
             <i class="fas fa-shopping-cart mr-2"></i>
         <b>    <span class="nav-link-inner--text d-lg-none" style="font-size: 15px; color:#000000;" >Cart</span></b>
             
            </span>
         </b-nav-item>

<b-nav-item link-classes="nav-link-icon" exact-active-class="active"
              data-toggle="tooltip" data-original-title="Location" >
          <span style="font-size: 30px; color: Grey;"><i class="fas fa-map-marker-alt" v-b-modal.modal-1 ></i>
        <b>  <span class="nav-link-inner--text d-lg-none" style="font-size: 15px; color:#000000;"   >Location</span></b></span>
</b-nav-item>
           <b-modal id="modal-1" title="Location">
            <b-form-input  placeholder="Enter Pincode"></b-form-input>
           </b-modal>
          <li class="nav-item d-none d-lg-block ml-lg-4" v-if="!isLoggedIn">
           <a href="/login" 
              class="btn btn-outline btn-icon">
             <span class="nav-link-inner--text">Sign In</span>
           </a>
         </li>

         <b-nav-item to="/profile"  exact exact-active-class="active" v-if="isLoggedIn">
             <span class="nav-link-inner--text">Profile</span>
         </b-nav-item>

         <b-nav-item to="/logout"  exact exact-active-class="active" v-if="isLoggedIn">
             <span class="nav-link-inner--text">Logout</span>
         </b-nav-item>
       </b-navbar-nav>
<br><br>

      
  		 
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

<style>
</style>
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
        isLoggedIn: localStorage.getItem('youngman.jwt') != null,
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

.logo {
  width: 60%;
  height: auto !important;
}
</style>
