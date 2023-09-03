<template>
  <div class="banner">
      <div class="logo-container">
        <img alt="SP logo" class="logo" src="@/assets/SP logo.jpg" />
      </div>
      <div class="text-container">
        <h1>Surrey Park Swimming</h1>
      </div>
    </div>
  
  
  <p class="sub-heading">Welcome to the Surrey Park Swimming web page!</p>
  

  <nav class="nav">
    
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/aqualink">Aqualink Box Hill</RouterLink>
    <RouterLink to="/blackburn">Blackburn</RouterLink>
    <RouterLink to="/store">Store</RouterLink>
  </nav>

  <div class="content">
    <RouterView />
  </div>
</template>

<style scoped>
/* Global styles for different screen sizes */
.banner {
  background-color: rgb(28, 69, 164);
  color: white;
  text-align: center;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
}

.logo-container {
  flex: 0 0 auto;
  margin-right: 1rem;
}

.logo {
  width: 10vw;
  max-width: 125px;
  height: auto;
}

.text-container {
  flex: 1 1 auto;
  text-align: center;
  
}
h1 {
  font-size: 4vw;
  margin: 0.5rem 0;
  
}

.sub-heading {
  text-align: center;
  font-size: 3vw;
  padding: 2vw;
  font-style: italic;
  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  background-color: rgb(60, 132, 184);
}



nav {
  width: 100%;
  font-size: calc(10px + 1vw);
  text-align: center;
  padding: 1vw;
}

nav a.router-link-exact-active {
  color:rgb(203, 112, 15);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

.content {
  display: flex;
  justify-content: center;
  align-items: top;
  margin-top: 0rem;
}

</style>
