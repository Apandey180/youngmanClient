<template>
<div>

<b-card no-body>
    <!-- Card header -->
    <b-card-header >
      <!-- Title -->
      <h5 class="h3 mb-0">Filter</h5>
    </b-card-header>
    <!-- Card body -->
    <b-card-body >
     <b-row>
            <b-col sm="12" md="12" lg="12">
            <b-form-group label="Additional">
            <b-form-checkbox-group
                v-model="categories_selected"
                :options="categories_options"
                plain
                stacked
            ></b-form-checkbox-group>
            </b-form-group>
            </b-col>
        </b-row>

        <b-row>
            <b-col sm="12" md="12" lg="12">
            <label for="range-1">No. of Person Working</label>
            <b-form-input id="range-1" type="range"></b-form-input>
            </b-col>
        </b-row>

<b-row>
            <b-col sm="12" md="12" lg="12">
            <b-form-group label="Material">
            <b-form-checkbox-group
                v-model="materials_selected"
                :options="materials_options"
                plain
                stacked
            ></b-form-checkbox-group>
            </b-form-group>
            </b-col>
        </b-row>

        <b-row>
            <b-col sm="12" md="12" lg="12">
            <b-form-group label="Additional">
            <b-form-checkbox-group
                v-model="additional_selected"
                :options="additional_options"
                plain
                stacked
            ></b-form-checkbox-group>
            </b-form-group>
            </b-col>
        </b-row>

        <b-row>
            <b-col sm="12" md="12" lg="12">
            <b-form-group label="Width">
            <b-form-checkbox-group
                v-model="width_selected"
                :options="width_options"
                plain
                stacked
            ></b-form-checkbox-group>
            </b-form-group>
            </b-col>
        </b-row>

    </b-card-body>
  </b-card>

    </div>
</template>

<script>
export default {
    data(){
        return{
            categories_options : [
                {
                    value:1,
                    text:"All",
                },
                {
                    value:2,
                    text:"Scaffold",
                },
                {
                    value:3,
                    text:"Ladder",
                },
                {
                    value:4,
                    text:"Work Platforms",
                }
            ],

            categories_selected : [
                {value:1}
            ],

            materials_options : [
                {value:1,text:"FRP"},
                {value:2,text:"Aluminium"}
            ],
            materials_selected: [1,2],
            additional_selected: [2,3,4],           
            additional_options: [
              { text: 'Tool Tray', value: 1 },
              { text: 'Wheels', value: 2 },
              { text: 'Side Support', value: 3 },
              { text: 'Guardrail', value: 4 }
            ],
            width_selected: [1,2],            
            width_options: [
              { text: 'Single Width(700MM)', value: 1},
              { text: 'Double Width(1450MM)', value: 2},
            ],
        };
    },
};
</script>

<style>
    .list-style{
        list-style-type:none;
    }
    .border {
        border-style: solid;
        border-width: 5px !important;
        padding: 5% !important;
    }
</style>