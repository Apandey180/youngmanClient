<template>
<div class="send_fb_blk">
        <b-row>
          <b-col>
            <b-input-group style="margin: 0 auto;box-shadow: 1px 1px 5px 1px #ccc;" class="mt-3">
              <b-form-input placeholder="Enter email for News & Updates"></b-form-input>
              <b-input-group-append>
                <b-button variant="info">Submit</b-button>
              </b-input-group-append>
            </b-input-group>
          </b-col>
        </b-row>
      </div>

</template>

<style scoped>
.send_fb_blk {
  margin-top: 60px;
}
.send_fb_blk .form-control {
  border: none;
  background: transparent;
}
.send_fb_blk .input-group {
  border: 1px solid #ccc;
  border-radius: 20px;
  width: 33%;
}
.send_fb_blk .btn {
  border-radius: 20px !important;
  padding: 5px 25px;
  margin: 2px;
  background: #fee501;
  color: #fff;
  font-size: 12px;
  font-weight: bold;
  border-color: #fee501;
}
</style>