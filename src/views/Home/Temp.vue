<template>
  <base-nav
    container-classes="container-fluid"
    class="navbar-top border-bottom navbar-expand"
    style="background-color:#ffe411 !important"
    type=""
  >
    <!-- Search form -->
    <b-form class="navbar-search form-inline mr-sm-3"
          :class="$route.meta.searchClasses ? $route.meta.searchClasses : 'navbar-search-light'"
          id="navbar-search-main">
      <b-form-group class="mb-0">
        <b-input-group class="input-group-alternative input-group-merge">
          <div class="input-group-prepend">
            <span class="input-group-text"><i class="fas fa-search"></i></span>
          </div>
          <b-form-input placeholder="Search" type="text"></b-form-input>
        </b-input-group>
      </b-form-group>
      <button type="button" class="close" data-action="search-close" data-target="#navbar-search-main" aria-label="Close">
        <span aria-hidden="true">×</span>
      </button>
    </b-form>

      <b-navbar-nav class="align-items-center ml-md-auto">
  
           <ul class="navbar-nav bd-navbar-nav flex-row">
            <li class="nav-item">
                <a class="nav-link nav-link-icon" href="/">
                    <span class="nav-link nav-link-inner--text">Home</span>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link nav-link-icon" href="/products">
                    <span class="nav-link nav-link-inner--text">Products</span>
                </a>
            </li>
           <li class="nav-item">
                <a class="nav-link nav-link-icon" href="#">
                    <span class="nav-link nav-link-inner--text">About</span>
                </a>
            </li>
            </ul>

      </b-navbar-nav>

      

<b-navbar-nav class="ml-auto">

      <ul class="nav navbar-nav flex-row float-right">
        <li class="nav-item">
          <a class="nav-link nav-link-icon" href="#">
              <i class="nav-link ni ni-cart"></i>
          </a>
        </li>
      </ul>

      <base-dropdown class="nav-item"
                     tag="li"
                     title-classes="nav-link"
                     title-tag="a"
                     icon="ni ni-bell-55"
                     menu-classes="dropdown-menu-xl dropdown-menu-right py-0 overflow-hidden">
        <template>
          <!-- Dropdown header -->
          <div class="px-3 py-3">
            <h6 class="text-sm text-muted m-0">You have <strong class="text-primary">13</strong> notifications.</h6>
          </div>
          <!-- List group -->
          <b-list-group flush>
            <b-list-group-item action href="#!">
              <b-row align-v="center" >
                <b-col md="auto">
                  <!-- Avatar -->
                  <b-img alt="Image placeholder" src="img/theme/team-1.jpg" class="avatar" rounded="circle" />
                </b-col>
                <b-col class="ml--2">
                  <div class="d-flex justify-content-between align-items-center">
                    <div>
                      <h4 class="mb-0 text-sm">John Snow</h4>
                    </div>
                    <div class="text-right text-muted">
                      <small>2 hrs ago</small>
                    </div>
                  </div>
                  <p class="text-sm mb-0">Let's meet at Starbucks at 11:30. Wdyt?</p>
                </b-col>
              </b-row>
            </b-list-group-item>
            <a href="#!" class="list-group-item list-group-item-action">
              <b-row align-v="center">
                <b-col md="auto">
                  <!-- Avatar -->
                  <b-img alt="Image placeholder" src="img/theme/team-2.jpg" class="avatar" rounded="circle" />
                </b-col>
                <b-col class="ml--2">
                  <div class="d-flex justify-content-between align-items-center">
                    <div>
                      <h4 class="mb-0 text-sm">John Snow</h4>
                    </div>
                    <div class="text-right text-muted">
                      <small>3 hrs ago</small>
                    </div>
                  </div>
                  <p class="text-sm mb-0">A new issue has been reported for Argon.</p>
                </b-col>
              </b-row>
            </a>
            <b-list-group-item action href="#!" >
              <b-row align-v="center">
                <b-col md="auto">
                  <!-- Avatar -->
                  <b-img alt="Image placeholder" src="img/theme/team-3.jpg" class="avatar" rounded="circle" />
                </b-col>
                <b-col class="ml--2">
                  <div class="d-flex justify-content-between align-items-center">
                    <div>
                      <h4 class="mb-0 text-sm">John Snow</h4>
                    </div>
                    <div class="text-right text-muted">
                      <small>5 hrs ago</small>
                    </div>
                  </div>
                  <p class="text-sm mb-0">Your posts have been liked a lot.</p>
                </b-col>
              </b-row>
            </b-list-group-item>
            <b-list-group-item action href="#!" >
              <b-row align-v="center">
                <b-col md="auto">
                  <!-- Avatar -->
                  <b-img alt="Image placeholder" src="img/theme/team-4.jpg" class="avatar" rounded="circle" />
                </b-col>
                <b-col class="ml--2">
                  <div class="d-flex justify-content-between align-items-center">
                    <div>
                      <h4 class="mb-0 text-sm">John Snow</h4>
                    </div>
                    <div class="text-right text-muted">
                      <small>2 hrs ago</small>
                    </div>
                  </div>
                  <p class="text-sm mb-0">Let's meet at Starbucks at 11:30. Wdyt?</p>
                </b-col>
              </b-row>
            </b-list-group-item>
            <b-list-group-item action href="#!" >
              <b-row align-v="center">
                <b-col md="auto">
                  <!-- Avatar -->
                  <b-img alt="Image placeholder" src="img/theme/team-5.jpg" class="avatar" rounded="circle" />
                </b-col>
                <b-col class="ml--2">
                  <div class="d-flex justify-content-between align-items-center">
                    <div>
                      <h4 class="mb-0 text-sm">John Snow</h4>
                    </div>
                    <div class="text-right text-muted">
                      <small>3 hrs ago</small>
                    </div>
                  </div>
                  <p class="text-sm mb-0">A new issue has been reported for Argon.</p>
                </b-col>
              </b-row>
            </b-list-group-item>
          </b-list-group>
          <!-- View all -->
          <!-- This item dont have <b-dropdown-item> because item have styles " text-center text-primary font-weight-bold py-3" on tag <a> wich we cant add -->
          <a href="#!"  class="dropdown-item text-center text-primary font-weight-bold py-3">View all</a>
        </template>
      </base-dropdown>
      <base-dropdown menu-classes="dropdown-menu-lg dropdown-menu-dark bg-default dropdown-menu-right"
                     class="nav-item"
                     tag="li"
                     title-tag="a"
                     title-classes="nav-link"
                     icon="ni ni-ungroup">
        <template>
          <b-row class="shortcuts px-4">
            <a href="#!" class="col-4 shortcut-item">
                    <span class="shortcut-media avatar rounded-circle bg-gradient-red">
                      <i class="ni ni-calendar-grid-58"></i>
                    </span>
              <small>Calendar</small>
            </a>
            <a href="#!" class="col-4 shortcut-item">
                    <span class="shortcut-media avatar rounded-circle bg-gradient-orange">
                      <i class="ni ni-email-83"></i>
                    </span>
              <small>Email</small>
            </a>
            <a href="#!" class="col-4 shortcut-item">
                    <span class="shortcut-media avatar rounded-circle bg-gradient-info">
                      <i class="ni ni-credit-card"></i>
                    </span>
              <small>Payments</small>
            </a>
            <a href="#!" class="col-4 shortcut-item">
                    <span class="shortcut-media avatar rounded-circle bg-gradient-green">
                      <i class="ni ni-books"></i>
                    </span>
              <small>Reports</small>
            </a>
            <a href="#!" class="col-4 shortcut-item">
                    <span class="shortcut-media avatar rounded-circle bg-gradient-purple">
                      <i class="ni ni-pin-3"></i>
                    </span>
              <small>Maps</small>
            </a>
            <a href="#!" class="col-4 shortcut-item">
                    <span class="shortcut-media avatar rounded-circle bg-gradient-yellow">
                      <i class="ni ni-basket"></i>
                    </span>
              <small>Shop</small>
            </a>
          </b-row>
        </template>
      </base-dropdown>

<ul class="nav navbar-nav flex-row float-right">
        <li class="nav-item">
          <a class="nav-link nav-link-icon" href="/login">
              Sign in
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link nav-link-icon" href="/register">
              Sign up
          </a>
        </li>
      </ul>

    <base-dropdown menu-on-right
                     class="nav-item"
                     tag="li"
                     title-tag="a"
                     v-if="isLoggedIn"
                     title-classes="nav-link pr-0">
        <a href="#" class="nav-link pr-0" @click.prevent slot="title-container">
          <b-media no-body class="align-items-center">
                  <span class="avatar avatar-sm rounded-circle">
                    <img alt="Image placeholder" src="img/theme/team-4.jpg">
                  </span>
            <b-media-body class="ml-2 d-none d-lg-block">
              <span class="mb-0 text-sm  font-weight-bold">{{name}}</span>
            </b-media-body>
          </b-media>
        </a>

        <template>

          <b-dropdown-header class="noti-title">
            <h6 class="text-overflow m-0">Welcome!</h6>
          </b-dropdown-header>
          <b-dropdown-item href="/profile">
            <i class="ni ni-single-02"></i>
            <span>My profile</span>
          </b-dropdown-item>
          <b-dropdown-item href="#!">
            <i class="ni ni-settings-gear-65"></i>
            <span>Settings</span>
          </b-dropdown-item>
          <b-dropdown-item href="#!">
            <i class="ni ni-calendar-grid-58"></i>
            <span>Orders</span>
          </b-dropdown-item>
          <b-dropdown-item href="#!">
            <i class="ni ni-support-16"></i>
            <span>Support</span>
          </b-dropdown-item>
          <div class="dropdown-divider"></div>
          <b-dropdown-item href="#!" @click="logout">
            <i class="ni ni-user-run"></i>
            <span>Logout</span>
          </b-dropdown-item>

        </template>
      </base-dropdown>

 </b-navbar-nav>

  </base-nav>
</template>
<script>
  import { CollapseTransition } from 'vue2-transitions';
  import { BaseNav, Modal } from '@/components';

  export default {
    components: {
      CollapseTransition,
      BaseNav,
      Modal
    },
    computed: {
      routeName() {
        const { name } = this.$route;
        return this.capitalizeFirstLetter(name);
      },
      isRTL() {
        return this.$rtl.isRTL;
      }
    },
    data() {
      return {
        activeNotifications: false,
        showMenu: false,
        searchModalVisible: false,
        searchQuery: '',
        name: null,
        user_type: 0,
        isLoggedIn: localStorage.getItem('youngman.jwt') != null,
      };
    },
    mounted() {
      this.setDefaults()
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
        capitalizeFirstLetter(string) {
          if(string != null || string.length != "")
            return string.charAt(0).toUpperCase() + string.slice(1);
          else
            return "";
        },
        toggleNotificationDropDown() {
          this.activeNotifications = !this.activeNotifications;
        },
        closeDropDown() {
          this.activeNotifications = false;
        },
        toggleSidebar() {
          this.$sidebar.displaySidebar(!this.$sidebar.showSidebar);
        },
        hideSidebar() {
          this.$sidebar.displaySidebar(false);
        }
    }
  };
</script>
<style scoped>
  .top-navbar {
    top: 0px;
  }
</style>
