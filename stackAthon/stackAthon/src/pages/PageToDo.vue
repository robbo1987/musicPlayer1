<template>
  <q-page padding> 
        <q-list bordered >
      

      <q-item 
        v-for="task in tasks"
        :key="task.id"
        v-ripple>
        <q-item-section side top>
          <q-checkbox v-model="task.completed" />
        </q-item-section>

        <q-item-section>
          <q-item-label>{{ task.name }}</q-item-label>
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
          completed:false
        },
         {
          id:2,
          name:"coding homework",
          completed:false
        },
         {
          id:3,
          name:"go grocery shopping",
          completed:false
        },
      ]
    }
  }
 
};
</script>

<style scoped>

</style>
