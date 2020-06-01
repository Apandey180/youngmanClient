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
                    @change="filesChange"
                    placeholder="Select file"
                    drop-placeholder="Drop file here..."
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
                    @change="filesChange"
                    placeholder="Select file"
                    drop-placeholder="Drop file here..."
                  ></b-form-file>
                </b-form>
              </b-card-body>
            </b-card>
            


                    </b-col>
                    </b-row>
<!-- //new row -->

 <b-row>
                    <b-col lg="6" sm="12">
            <b-card no-body>
              <!-- Card header -->
              <b-card-header class="card-header">
                <h3 class="mb-0">Security Check</h3>
              </b-card-header>
              <!-- Card body -->
              <b-card-body class="card-body">
                <b-form>
                  
                  <h3>Drag and drop files here to</h3>
                   or 
                  <b-form-file
                    @change="filesChange"
                    placeholder="Select file"
                    drop-placeholder="Drop file here..."
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
                    @change="filesChange"
                    placeholder="Select file"
                    drop-placeholder="Drop file here..."
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

          checkboxes: {
           status: 'not_accepted'
         }

        };
    }
}
</script>