<template>
  <div>
    <base-header class="pb-6" style="background-color:#ffe411 !important">
      <b-row align-v="right" class="py-4"> </b-row>
    </base-header>
    <b-container fluid class="mt--6">
      <b-row>
        <b-col lg="8">
          <card header-classes="bg-transparent"> 
            <h3 slot="header" class="mb-0">Order Details</h3>
          </card>
        </b-col>
        <b-col lg="4">
          <card header-classes="bg-transparent">
            <h3 slot="header" class="mb-0">Order Timeline</h3>

            <time-line type="one-side">


              <time-line-item v-for="timeline_item in timeline_items"
                    :key="timeline_item.id" :badge-type="timeline_item.icon_type"
                              :badge-icon="timeline_item.icon">

                <small class="text-muted font-weight-bold">{{timeline_item.created_at}}</small>
                <h5 class=" mt-3 mb-0">{{timeline_item.title}}</h5>
                <p class=" text-sm mt-1 mb-0">{{timeline_item.description}}</p>
             
              </time-line-item>


            </time-line>
          </card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { TimeLine, TimeLineItem } from '@/components';

export default {
  data() {
    return {
      timeline_items : [
        {
          id:1,
          created_at: "10:30 AM",
          title: "New message",
          description: "Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus",
          icon: "ni ni-bell-55",
          icon_type: "danger"
        },
        {
          id:2,
          created_at: "10:30 AM",
          title: "Product issue",
          description: "Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus",
          icon: "ni ni-html5",
          icon_type: "danger"
        },
        {
          id:3,
          created_at: "10:30 AM",
          title: "Product issue",
          description: "Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus",
          icon: "ni ni-like-2",
          icon_type: "success"
        },
        {
          id:4,
          created_at: "10:30 AM",
          title: "Product issue",
          description: "Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus",
          icon: "ni ni-html5",
          icon_type: "success"
        },
        {
          id:5,
          created_at: "10:30 AM",
          title: "Product issue",
          description: "Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus",
          icon: "ni ni-like-2",
          icon_type: "danger"
        },
        {
          id:6,
          created_at: "10:30 AM",
          title: "Product issue",
          description: "Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus",
          icon: "ni ni-html5",
          icon_type: "danger"
        }
      ],

      order_details : {
        documents: [],
        challans: [],
        invoices: []
      },
    };
  },
  components: {
  TimeLine,
      TimeLineItem,
  },
  computed: {
  
  },
  methods: {
    
  }
};
</script>
<style></style>
