<template>
  <q-page class="q-pa-md"> 
        <q-list 
        separator
        bordered >
      

      <q-item 
        v-for="task in tasks"
        :key="task.id"
        @click="task.completed=!task.completed"
        clickable
        :class="!task.completed ? 'bg-orange-1' : 'bg-teal-1' "
        v-ripple>
        <q-item-section side top>
          
          <q-checkbox v-model="task.completed" />
        </q-item-section>

        <q-item-section>
          <q-item-label
            :class="{'text-strike' : task.completed}"
           >{{ task.name }}</q-item-label>
       </q-item-section>
       <q-item-section side>
         <div class='row'>
           <div class="column justify-center">
         <q-icon name="event" size="18px" class="q-mr-xs"/>
            </div>
         <div class='column'>
         <q-item-label caption class="row justify-end"> {{task.dueDate}}</q-item-label>
         <q-item-label caption class="row justify-end"> <small>{{task.dueTime}}</small></q-item-label> 
         </div>
        </div>
         </q-item-section>
      </q-item>
    </q-list>


  </q-page>
</template>

<script>
import {  mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters('tasks', ['tasks'])
  } 
 
};
</script>

<style scoped>

</style>
