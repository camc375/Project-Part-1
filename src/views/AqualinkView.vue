<template>
  <div class="aqualink-content">
    <div class="content-container">
      <div class="left-side">
        <h2 class="subheading">Address: 31 Surrey Drive</h2>
        <img class="image" src="@/assets/aqualinkmap.jpg" alt="Aqualink Map" />
      </div>
      <div class="middle-side">
        <p class="fun-fact">
          Fun Fact: Our lessons began over 100 years ago in the lake that used to be available for swimming in just across the park from this center!
        </p>
        <p class="centered-text">
          Our Aqualink Box Hill lessons run in the center's Indoor pools. Students are also welcome to make use of the center's public 
          swimming and play lanes before and after their lessons. To view more information for a specific program at this location, please 
          select it from the menu below:
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
        <img class="image" src="@/assets/aqaulinkpic.jpg" alt="Aqualink Pool" />
      </div>
    </div>
  </div>
</template>

<script>
import Programs from "@/components/Programs.vue"; // Adjust the path as needed

export default {
  name: "AqualinkView",
  components: {
    Programs,
  },
  data() {
    return {
      programList: [
      {
           name: "Toddler Lessons",
           description: "At Aqualink, we run our toddler lessons in both the Warm Water hydrotherapy pool and the standard learn to swim pool. "+
           "A parent or guardian is required in the water with the child at all times. The program is divided into 3 levels; Tiny Tots " +
           "(6 months to 1 year), Tots (1 year to 2 years) and Talented Tots (2 years to 3 years). The lessons run on weekdays and Saturdays, in the morning.",
           cost: "$20.00 per lesson"
         },
         {
           name: "Child Lessons",
           description: "Our standard children's classes run in the 12.5 meter learn to swim pool and the 25 meter lap swimming pool, depending upon level. " +
           "The program has 7 levels, labelled by number, with each level building upon the skills of the previous level until students are competent "+
           "in all four strokes. For children aged under 10, a parent must always be sitting nearby to supervise. The lessons run on weekdays in the " +
           "afternoon, Saturdays all day, and Sundays in the morning. ",
           cost: "$25.00 per lesson"
         },
         {
           name: "Teen Lessons",
           description: "Our Teen Lessons are for students from 12 to 18 years, who would prefer to learn with other students closer to their own age. " +
           " These lessons run in both the 12.5 meter learn to swim pool and the 25 meter lap pool depending upon level. Teen lessons are divided into " +
           "three levels: Beginner(12.5 meter pool), Intermediate(12.5 meter pool), and Advanced(25 meter pool). We run a limited number of teen classes "+
           " on weekday evenings, as well as Saturday afternoon.",
           cost: "$25.00 per lesson"
         },
         {
           name: "Adult Lessons",
           description: "Our Adult Lessons are for anyone 18+. These lessons are divided into Beginner, Intermediate and Advanced levels, so as to " +
           "accomodate adults of all different skill levels. The Beginner and Intermediate classes run in the 12.5 meter Learn to swim pool, while " + 
           "Advanced runs in the 25 meter lap pool. The adult lessons are offered on weekday mornings and evenings, as well as Saturday afternoons.",
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
.aqualink-content {
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
  font-size: 1.2rem;
}

.image{
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
