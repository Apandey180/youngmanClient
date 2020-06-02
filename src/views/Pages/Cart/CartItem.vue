<template>


 <div class="card-body"><!----><!---->
 <div class="row align-items-center">
     <div class="col-md-auto"><a href="#" class="avatar avatar-xl rounded-circle">
         </a></div>
         <div class="ml--2 copl"><h2 class="mb-0"><a href="#!">{{item.title}}</a></h2>
         
             <form>
                 <base-input type = "number"  input-classes="form-control-sm small" placeholder="Size"/>
                 <base-input type = "number"  input-classes="form-control-sm small" placeholder="Duration"/>
                 <base-input  type = "number"  input-classes="form-control-sm small" placeholder="Quantity"/>
             </form>
         </div>

        <div class="col-md-auto">
         <button type="button" class="btn base-button btn-primary ">Remove</button>
    </div>
</div>


</div>   
    
</template>

<script>
    export default {
    props:['item'],
        data() {
            return {
           }
        }
    }
</script>

<style >
.small{
    width: 40%;
    font-size: 9px;
}
</style>