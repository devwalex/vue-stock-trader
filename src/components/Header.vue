<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <div class="container">
        <router-link to="/" class="navbar-brand">Stock Trader</router-link>

        <div class="collapse navbar-collapse">
          <ul class="navbar-nav mr-auto">
            <router-link
              :to="{ name: 'Portfolio' }"
              class="nav-item"
              active-class="active"
              tag="li"
              ><a class="nav-link">Portfolio</a>
            </router-link>
            <router-link
              :to="{ name: 'Stocks' }"
              class="nav-item"
              active-class="active"
              tag="li"
              ><a class="nav-link">Stocks</a>
            </router-link>
          </ul>
          <ul class="navbar-nav navbar-right">
            <li><a class="nav-link" href="#">End Day</a></li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Save & Load
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">Save Data</a>
                <a class="dropdown-item" href="#">Load Data</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {}
</script>

<style scoped></style>
