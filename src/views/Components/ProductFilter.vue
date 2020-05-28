<template>
    <b-container align-v="left" class="border">
        <b-row>
            <b-col sm="12" md="12" lg="12">Filter</b-col>
        </b-row>

        <b-row>
            <b-col sm="12" md="12" lg="12">
                <h4>Categories</h4>
            </b-col>
            <ul class="list-style">
                <li v-for="category in categories"
                    :key="category.id">
                    {{category.name}}
                </li>
            </ul>
        </b-row>

        <b-row>
            <b-col sm="12" md="12" lg="12">
            <label for="range-1">No. of Person Working</label>
            <b-form-input id="range-1" type="range"></b-form-input>
            </b-col>
        </b-row>

        <b-row>
            <b-col align-v="left" sm="6" md="6" lg="6">
                <b-dropdown size="sm" text="Min" variant="outline-dark" class="m-2">
                  <b-dropdown-item-button>Action</b-dropdown-item-button>
                  <b-dropdown-item-button>Another action</b-dropdown-item-button>
                  <b-dropdown-item-button>Something else here...</b-dropdown-item-button>
                </b-dropdown>
            </b-col>
            <b-col align-v="right" sm="6" md="6" lg="6">
                <b-dropdown size="sm" text="Max" variant="outline-dark" class="m-2">
                  <b-dropdown-item-button>Action</b-dropdown-item-button>
                  <b-dropdown-item-button>Another action</b-dropdown-item-button>
                  <b-dropdown-item-button>Something else here...</b-dropdown-item-button>
                </b-dropdown>
            </b-col>
        </b-row>

        <b-row>
            <b-col sm="12" md="12" lg="12">
                <h4>Material</h4>
            </b-col>
            <ul class="list-style">
                <li v-for="material in materials"
                    :key="material.id">
                    {{material.name}}
                </li>
            </ul>
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
    </b-container>
</template>

<script>
export default {
    data(){
        return{
            categories : [
                {
                    id:1,
                    name:"All>",
                },
                {
                    id:2,
                    name:"Scaffold>",
                },
                {
                    id:3,
                    name:"Ladder>",
                },
                {
                    id:4,
                    name:"Work Platforms>",
                }
            ],

            materials : [
                {id:1,name:"FRP>"},
                {id:2,name:"Aluminium>"}
            ],
            additional_selected: ['Wheels', 'Side Support', 'Guardrail'],            additional_options: [
              { text: 'Tool Tray', value: 'Tool Tray' },
              { text: 'Wheels', value: 'Wheels' },
              { text: 'Side Support', value: 'Side Support' },
              { text: 'Guardrail', value: 'Guardrail' }
            ],
            width_selected: ['Single Width(700MM)', 'Double Width(1450MM)'],            
            width_options: [
              { text: 'Single Width(700MM)', value: 'Single Width(700MM)' },
              { text: 'Double Width(1450MM)', value: 'Double Width(1450MM)' },
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