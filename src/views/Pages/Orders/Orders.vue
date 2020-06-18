<template>
  <div>
    <base-header class="pb-6" style="background-color:#ffe411 !important">
      <b-row align-v="right" class="py-4"> </b-row>
    </base-header>
    <b-container fluid class="mt--6">
      <b-card no-body>
        <b-card-header>
            <!-- Title -->
            <h5 class="h3 mb-0">Your Orders</h5>
        </b-card-header>
<b-card-body>
            <!-- List group -->
            <b-list-group flush class="list my--3">
                <b-list-group-item v-for="order in orders"
                    :key="order.id"
                    class="list-group-item px-0">
                    <b-row align-v="center" >
                        
                        <b-col class="ml--2">
                            <h4 class="mb-0">
                                <a href="#!">{{order.job_order}}</a>
                            </h4>
                            <span :class="`text-${order.statusType}`">● </span>
                            <small>{{order.status}}</small>
                        </b-col>
                        <b-col md="auto">
                          <router-link to="/vieworder">
                            <b-button type="button" size="sm" variany="primary">View</b-button>
                          </router-link>
                        </b-col>
                    </b-row>
                </b-list-group-item>
            </b-list-group>
        </b-card-body>
      </b-card>
    </b-container>
  </div>
</template>

<script>


export default {
  data() {
    return {
      orders : [{
        id: 1,
        job_order: "2019/234/FSDF",
        created_at: "12-10-2019",
        total: 5000,
        statusType: 'danger',
        status: 'inactive'
      }, 
      {
        id: 2,
        job_order: "2019/234/FSDF",
        created_at: "12-10-2019",
        total: 5000,
        statusType: 'danger',
        status: 'inactive'
      }, 
      {
        id: 3,
        job_order: "2019/234/FSDF",
        created_at: "12-10-2019",
        total: 5000,
        statusType: 'danger',
        status: 'inactive'
      }, 
      {
        id: 4,
        job_order: "2019/234/FSDF",
        created_at: "12-10-2019",
        total: 5000,
        statusType: 'success',
        status: 'active'
      }, 
      {
        id: 5,
        job_order: "2019/234/FSDF",
        created_at: "12-10-2019",
        total: 5000,
        statusType: 'success',
        status: 'active'
      }, 
      {
        id: 6,
        job_order: "2019/234/FSDF",
        created_at: "12-10-2019",
        total: 5000,
        statusType: 'success',
        status: 'active'
      }, 
      {
        id: 7,
        job_order: "2019/234/FSDF",
        created_at: "12-10-2019",
        total: 5000,
        statusType: 'success',
        status: 'active'
      }, 
      {
        id: 8,
        job_order: "2019/234/FSDF",
        created_at: "12-10-2019",
        total: 5000,
        statusType: 'success',
        status: 'active'
      }]
    };
  },
  components: {
      
  },
  computed: {
  
  },
  methods: {
    
  }
};
</script>
<style></style>
