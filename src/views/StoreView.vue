<template>
  <div class="store-view">
    <h1 class="subheading">Welcome to our online store!</h1>
    <div class="content">
      <p>Please choose an item from the list below to view more details:</p>
      <select class="merchandise-selector" v-model="selectedMerchandiseIndex">
        <option value="-1">Select an item</option>
        <option v-for="(item, index) in merchandiseList" :key="index" :value="index">
          {{ item.name }}
        </option>
      </select>
      <Merchandise :merchandise="selectedMerchandise" v-if="selectedMerchandise" />
    </div>
  </div>
</template>

<script>
import Merchandise from "@/components/Merchandise.vue"; // Adjust the path as needed

export default {
  name: "StoreView",
  components: {
    Merchandise,
  },
  data() {
    return {
      merchandiseList: [
        {
          name: "Jacket",
          price: "$75.00",
          image: "/src/assets/placeholder.jpg",
          sizes: "XS S M L XL"
        },
        {
          name: "Polo Shirt",
          price: "$50.00",
          image: "/src/assets/placeholder.jpg",
          sizes: "XXS XS S M L XL XXL XXXL"
        },
        {
          name: "Tracksuit Pants",
          price: "$40.00",
          image: "/src/assets/placeholder.jpg",
          sizes: "XS S M L XL"
        },
        {
          name: "Shorts",
          price: "$30.00",
          image: "/src/assets/placeholder.jpg",
          sizes: "XS S M L XL"
        },
        {
          name: "Swim Cap",
          price: "15.00",
          image: "/src/assets/placeholder.jpg",
          sizes: "NOT APPLICABLE"
        }

        
      ],
      selectedMerchandiseIndex: -1,
    };
  },
  computed: {
    selectedMerchandise() {
      if (this.selectedMerchandiseIndex === -1) {
        return null;
      }
      return this.merchandiseList[this.selectedMerchandiseIndex];
    },
  },
};
</script>


<style scoped>
.store-view {
  max-width: 100vw;
  margin: 0 auto;
  padding: 2rem;
}

.subheading {
  text-align: center;
  margin-top: 1rem;
  font-size: calc(12px + 0.5vw);
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
}

.merchandise-selector {
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding: 0.5rem;
  font-size: 1rem;
}
</style>
