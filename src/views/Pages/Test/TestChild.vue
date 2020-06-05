<template>
    <b-card no-body>
              <!-- Card header -->
              <b-card-header>
                <h2 class="mb-0">Test Child 1</h2>
              </b-card-header>
              <!-- Card body -->
              <b-card-body>
                <validation-observer v-slot="{handleSubmit}" ref="formValidator">
                <form class="needs-validation" ref="testChild" @submit.prevent="handleSubmit(testChild)">
                  
                  <b-row>
                    <b-col lg="6" sm="12">
                        <base-input label="Company Name" input-classes="form-control-sm" rules="required" v-model="model.companyName" placeholder="Company Name"/>
                    </b-col>
                    </b-row>
                </form>
                </validation-observer>
              </b-card-body>
            </b-card>
</template>
<script>
export default {
    data() {
        return {
        validated: false,
        model: {
          companyName: ''
        }
        };
    },
    methods: {

    },
    mounted() {
        this.$events.$on('submitTest', () => {
           this.$store.dispatch("test/submitChildForm", this.model);
        });
      },
      beforeDestroy() {
       // this.$events.$off('submitCustomerDetails');
      }
}
</script>