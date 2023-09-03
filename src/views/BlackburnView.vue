<template>
  <div class="aqualink-content">
    <div class="content-container">
      <div class="left-side">
        <h2 class="subheading">Address: 313 Middelborough Road</h2>
        <img class="image" src="@/assets/blackburnmap.jpg" alt="Blackburn Map" />
      </div>
      <div class="middle-side">
        
        <p class="fun-fact">
          Our Blackburn pool utilizes mineral chlorination. This means the water is less harsh on the skin than standard chlorination pools,
          and it's eco frinedly!
        </p>
        <p class="centered-text">
          Our Blackburn pool is a private 25 metre swimming pool for our lessons only. This location is ideal for customers who want a less busy and crowded
          environment, where the focus is purely on lessons. This does mean however that there is no space for casual swimming or play after the lessons.
          To view information for a specifc program, please select it from the menu below:
        </p>
        <select class="program-selector" v-model="selectedProgramIndex">
          <option value="-1">Select a program</option>
          <option v-for="(program, index) in programList" :key="index" :value="index">
            {{ program.name }}
          </option>
        </select>
        <Programs :program="selectedProgram" v-if="selectedProgram" />
      </div>
      <div class="right-side">
        <img class="image2" src="@/assets/blackburnpic.jpg" alt="Blackburn Pool" />
      </div>
    </div>
  </div>
</template>

<script>
import Programs from "@/components/Programs.vue"; // Adjust the path as needed

export default {
  name: "BlackburnView",
  components: {
    Programs,
  },
  data() {
    return {
      programList: [
      {
           name: "Toddler Lessons",
           description: "At Blackburn we run our toddler lessons in a shortened quarter lane in the main pool. "+
           "A parent or guardian is required in the water with the child at all times. The program is divided into 3 levels; Tiny Tots " +
           "(6 months to 1 year), Tots (1 year to 2 years) and Talented Tots (2 years to 3 years). The lessons only run on Saturdays, in the morning.",
           cost: "$20.00 per lesson"
         },
         {
           name: "Child Lessons",
           description: "Our standard children's classes run in subdivided lanes in the main pool; lane length is dependant upon which level a child is in. " +
           "The program has 7 levels, labelled by number, with each level building upon the skills of the previous level until students are competent "+
           "in all four strokes. For children aged under 10, a parent must always be sitting nearby to supervise. The lessons run on weekdays in the " +
           "afternoon and Saturdays in the morning. We unfortunately run no sundays at Blackburn currently.",
           cost: "$25.00 per lesson"
         },
         {
           name: "Teen Lessons",
           description: "Our Teen Lessons are for students from 12 to 18 years, who would prefer to learn with other students closer to their own age. " +
           " These lessons run the main pool, with lane length being dependant upon the students level. Teen lessons are divided into " +
           "three levels: Beginner(10 meter lane), Intermediate(12.5 meter lane), and Advanced(25 meter lane). We run a limited number of teen classes "+
           " on weekday evenings.",
           cost: "$25.00 per lesson"
         },
         {
           name: "Adult Lessons",
           description: "Our Adult Lessons are for anyone 18+. These lessons are divided into Beginner, Intermediate and Advanced levels, so as to " +
           "accomodate adults of all different skill levels. The Beginner and Intermediate classes run in shorter 10-12.5 meter lanes in the pool, while " + 
           "Advanced runs in the 25 meter lane. The adult lessons are offered on weekday  evenings, as well as Saturday mornings",
           cost: "$27.00 per lesson"
         }
      ],
      selectedProgramIndex: -1,
    };
  },
  computed: {
    selectedProgram() {
      if (this.selectedProgramIndex === -1) {
        return null;
      }
      return this.programList[this.selectedProgramIndex];
    },
  },
};
</script>


<style scoped>
.blackburn-content {
  max-width: 100vw;
  margin: 0 auto;
  padding: 2rem;
}

.content-container {
  display: flex;
  padding-bottom: 2vw;
}

.left-side {
  width: 20%;
}

.middle-side {
  width: 60%;
  padding: 0 1rem;
}

.right-side {
  width: 20%;
}

.subheading {
  text-align: center;
  margin-top: 1rem;
  font-size: calc(12px + 0.5vw);
}

.image{
  margin-left: 2vw;
  width: 18vw;
  max-width: 250px;
  height: auto;
}
.image2{
  margin-top: 10vw;
  margin-right: 2vw;
  width: 18vw;
  max-width: 250px;
  height: auto;
}

.fun-fact {
  text-align: center;
  font-style: italic;
  margin: 1rem 0;
}

.centered-text {
  text-align: center;
  margin-bottom: 1.5rem;
}

.program-selector {
  display: block;
  margin: 1rem auto;
  padding: 0.5rem;
  font-size: 1rem;
}

</style>
