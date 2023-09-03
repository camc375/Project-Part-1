<template>
    <div class="merchandise">
        <div class="left-side">
            <h2 class="merchandise-name">{{ merchandise.name }}</h2>
            <p class="merchandise-details">{{ merchandise.price }}</p>
            <p class="merchandise-details">Sizes: {{ merchandise.sizes }}</p>
        </div>
        <div class="right-side">
            <img class="image" :src="merchandise.image" alt="Placeholder Merchandise" />
        </div>
        
    </div>
  </template>
  
  <script>
  export default {
    name: "Merchandise",
    props: {
      merchandise: {
        type: Object,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  
  .merchandise{
    display: flex;
    padding-bottom: 2vw;
  }

  .left-side {
    width: 50%;
  }

  .right-side {
    width: 50%;
  }
  .merchandise-name {
    font-size: 1.5rem;
    margin-bottom: 10px;
    text-align: center;
  }

  .merchandise-details {
    white-space: pre-wrap;
    margin-bottom: 20px;
    text-align: center;
  }

  .image{
    margin-left: 2vw;
    width: 25vw;
    max-width: 250px;
    height: auto;
  }
  </style>
  