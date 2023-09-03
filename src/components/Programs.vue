<template>
    <div class="program-details">
      <h2 class="program-name">{{ program.name }}</h2>
      <p class="program-description">{{ program.description }}</p>
      <p class="program-cost">{{ program.cost }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: "Programs",
    props: {
      program: {
        type: Object,
        required: true,
      },
    },
  };
  </script>
  
 
  
    
    <style scoped>
    .program-name {
    font-size: 1.5rem;
    margin-bottom: 10px;
    text-align: center;
    }

    .program-description {
    white-space: pre-wrap;
    margin-bottom: 20px;
    text-align: center;
    }
    
    .program-cost {
    white-space: pre-wrap;
    margin-bottom: 20px;
    text-align: center;
    }

    </style>