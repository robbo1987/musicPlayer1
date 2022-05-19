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
export default {
  data() {
    return {
      tasks: [
        {
          id:1,
          name:"walk the dog",
          completed:false,
          dueDate:"5/22/2022",
          dueTime:"8:30 AM"
          },
         {
          id:2,
          name:"coding homework",
          completed:false,
          dueDate:"5/25/2022",
          dueTime:"9:30 PM"
        },
         {
          id:3,
          name:"go grocery shopping",
          completed:false,
          dueDate:"5/24/2022",
          dueTime:"12:30 AM"
        },
      ]
    }
  }
 
};
</script>

<style scoped>

</style>
