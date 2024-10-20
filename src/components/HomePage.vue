<template>
  <HeaderPage />
  <div class="container">
    <h1 class="welcome-text">Welcome, {{ name }}!</h1>
    <div class="table-container">
      <h2>Restaurant List</h2>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Address</th>
            <th>Contact</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in restaurant" :key="item.id">
            <td>{{ item.id }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.address }}</td>
            <td>{{ item.contact }}</td>
            <td>
              <router-link :to="{ name: 'UpdateRestaurant', params: { id: item.id }}">Edit</router-link>
              <button @click="deleteRestaurant(item.id)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import HeaderPage from './HeaderPage.vue';

export default {
  name: 'HomePage',
  data() {
    return {
      name: '',
      restaurant: [],
    };
  },
  components: {
    HeaderPage
  },
  methods: {
    // Fetch restaurant data
    async loadData() {
      let user = localStorage.getItem('user-info');
      if (!user) {
        this.$router.push({ name: 'SignUp' });
      } else {
        this.name = JSON.parse(user).name;
        try {
          let result = await axios.get("http://localhost:3000/restaurant");
          this.restaurant = result.data;
        } catch (error) {
          console.error("Error fetching restaurant data:", error);
        }
      }
    },
    // Delete restaurant by ID
    async deleteRestaurant(id) {
      try {
        let result = await axios.delete("http://localhost:3000/restaurant/" + id);
        if (result.status === 200) {
          this.loadData(); // Reload data after deletion
        }
      } catch (error) {
        console.error("Error deleting restaurant:", error);
      }
    }
  },
  async mounted() {
    this.loadData(); // Call loadData on component mount
  }
};
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 100px auto 0;
  padding: 0 20px;
  font-family: 'Arial', sans-serif;
}

.welcome-text {
  text-align: center;
  font-size: 2.5rem;
  color: #2C3E50;
  margin-bottom: 30px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
}

.table-container {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.table-container h2 {
  background-color: #E74C3C;
  color: white;
  padding: 15px 20px;
  margin: 0;
  font-size: 1.5rem;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  padding: 12px 15px;
  text-align: left;
  border-bottom: 1px solid #e0e0e0;
}

th {
  background-color: #f5f5f5;
  font-weight: bold;
  color: #2C3E50;
}

tr:nth-child(even) {
  background-color: #f9f9f9;
}

tr:hover {
  background-color: #f0f0f0;
  transition: background-color 0.3s ease;
}

@media (max-width: 768px) {
  .welcome-text {
    font-size: 2rem;
  }

  table, thead, tbody, th, td, tr {
    display: block;
  }

  thead tr {
    position: absolute;
    top: -9999px;
    left: -9999px;
  }

  tr {
    border: 1px solid #ccc;
    margin-bottom: 10px;
  }

  td {
    border: none;
    position: relative;
    padding-left: 50%;
  }

  td:before {
    position: absolute;
    top: 6px;
    left: 6px;
    width: 45%;
    padding-right: 10px;
    white-space: nowrap;
    content: attr(data-label);
    font-weight: bold;
  }
}
</style>
