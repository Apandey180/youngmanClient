<template>
    <b-card no-body>
      <!-- Card header -->
      <b-card-header>
        <h2 class="mb-0">Document Upload</h2>
      </b-card-header>
      <!-- Card body -->
      <b-card-body>
        <form>
          <b-row>
            <b-col lg="6" sm="12">   
              <b-card no-body>
                <!-- Card header -->
                <b-card-header class="card-header">
                  <h3 class="mb-0">Photo ID Proof(Purchase):</h3>
                </b-card-header>
                <!-- Card body -->
                <b-card-body class="card-body">
                  <b-form>
                    <h3>Drag and drop files here to</h3>
                    or 
                    <b-form-file
                      placeholder="Select file"
                      drop-placeholder="Drop file here..."
                      v-model="customer_documents.customer_id_proof"
                      :state="Boolean(customer_documents.customer_id_proof)"
                    ></b-form-file>
                  </b-form>
                </b-card-body>
              </b-card>
            </b-col>
                    
					  <b-col lg="6" sm="12">
              <b-card no-body>
                <!-- Card header -->
                <b-card-header class="card-header">
                  <h3 class="mb-0">GST Certificate</h3>
                </b-card-header>
                <!-- Card body -->
                <b-card-body class="card-body">
                  <b-form>
                    <h3>Drag and drop files here to</h3>
                    or 
                    <b-form-file
                      placeholder="Select file"
                      drop-placeholder="Drop file here..."
                      v-model="customer_documents.gst_certificate"
                      :state="Boolean(customer_documents.gst_certificate)"
                    ></b-form-file>
                  </b-form>
                </b-card-body>
              </b-card>
            </b-col>
          </b-row>

          <b-row>
            <b-col lg="6" sm="12">
              <b-card no-body>
                <!-- Card header -->
                <b-card-header class="card-header">
                  <h3 class="mb-0">Security Cheque</h3>
                </b-card-header>
                <!-- Card body -->
                <b-card-body class="card-body">
                  <b-form>
                    <h3>Drag and drop files here to</h3>
                    or 
                    <b-form-file
                      placeholder="Select file"
                      drop-placeholder="Drop file here..."
                      v-model="customer_documents.security_cheque"
                      :state="Boolean(customer_documents.security_cheque)"
                    ></b-form-file>
                  </b-form>
                </b-card-body>
              </b-card>
            </b-col>
                    
					  <b-col lg="6" sm="12">
                        
<b-card no-body>
              <!-- Card header -->
              <b-card-header class="card-header">
                <h3 class="mb-0">Photograph</h3>
              </b-card-header>
              <!-- Card body -->
              <b-card-body class="card-body">
                <b-form>
                  
                  <h3>Drag and drop files here to</h3>
                   or 
                  <b-form-file
                    placeholder="Select file"
                    drop-placeholder="Drop file here..."
                    v-model="customer_documents.customer_image"
                    :state="Boolean(customer_documents.customer_image)"
                  ></b-form-file>
                </b-form>
              </b-card-body>
            </b-card>
            

                    </b-col>


                   
                    </b-row>
<center>
  <div>
  <b-form-checkbox 
                       id="checkbox-1"
                       v-model="status"
                      name="checkbox-1"
                      value="accepted"
                      unchecked-value="not_accepted"
    >
      I accept following Terms& Conditions in Security Acceptance letter
    </b-form-checkbox></div>
</center>

                </form>
              </b-card-body>
            </b-card>
</template>
<script>
export default {
    data() {
        return {
          status: 'not_accepted',
          customer_documents: {
            customer_id: '1',
            customer_id_proof:null,
            customer_image:null,
            security_cheque:null,
            gst_certificate:null
          }
        };
    },
    methods: {
      filesChange() {}
    },
    mounted() {
      this.$events.$on('submitCustomerDocuments', () => {
        this.$store.dispatch("checkout/submitCustomerDocuments", this.customer_documents);
      });
    },
}
</script>