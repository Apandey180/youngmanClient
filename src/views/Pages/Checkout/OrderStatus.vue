<template>
  <div>
   
  </div>
</template>
<script>
import swal from 'sweetalert2';
  import 'sweetalert2/dist/sweetalert2.css';
  import { Modal, BaseAlert } from '@/components';
export default {
  data() {
    return {
        success: true
    };
  },
  components: {
      Modal,
      BaseAlert
  },
  mounted() {
      //this.showSwal();
  },
  methods: {
    showSwal() {
      if (this.success) {
        swal.fire({
          title: `Success`,
          text: "A few words about this sweet alert ...",
          buttonsStyling: false,
          confirmButtonClass: "btn btn-success",
          icon: "success"
        });
      } else {
        swal.fire({
          title: `Warning`,
          text: "A few words about this sweet alert ...",
          buttonsStyling: false,
          confirmButtonClass: "btn btn-warning",
          icon: "warning"
        });
      }
    }
  }
};
</script>
