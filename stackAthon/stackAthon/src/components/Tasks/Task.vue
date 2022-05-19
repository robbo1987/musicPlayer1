<template>

      <q-item 

        @click="updateTask({id:id, updates: { completed: !task.completed}})"
        clickable
        :class="!task.completed ? 'bg-orange-1' : 'bg-teal-1' "
        v-ripple>
        <q-item-section side top>
          
          <q-checkbox 
          :value="task.completed"
          class="no-pointer-events" />
        </q-item-section>

        <q-item-section>
          <q-item-label
            :class="{'text-strike' : task.completed}"
           >{{ task.name }} </q-item-label>
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
          
          <q-item-section side>
            <q-btn flat 
            @click.stop="promptToDelete(id)"
            round 
            dense
            color="red"
            icon ="delete" />

          </q-item-section >
         
      </q-item>
  
</template>

<script>

import { mapActions } from "vuex"

export default {


  props: ['task','id'],

  methods: {
    ...mapActions('tasks', ['updateTask']),
    promptToDelete(id) {
        this.$q.dialog({
        title: 'Confirm',
        message: 'Are you sure you want to Delete this task?',
        cancel: true,
        persistent: true
      }).onOk(() => {
        console.log('deleted')
      })
    }
  }
}

</script>

<style scoped>

</style>