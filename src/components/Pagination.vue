<template>
  <div class="pagination-container">
    <img class="pagination-button" :src="arrowLeftSVG" @click="returnPage()" />
    <span
      class="pagination-button"
      v-for="(user, index) in pagination.totalPages"
      :key="user.id"
      :class="{ active: pagination.currentPage == index + 1 }"
      @click="changePage(index + 1)"
      >{{ index + 1 }}</span
    >
    <img class="pagination-button" :src="arrowRightSVG" @click="goNextPage()" />
  </div>
</template>

<script>
export default {
  name: "Pagination",

  props: {
    users: {
      type: Array,
      required: true,
    },
  },

  created() {
    this.paginate(1, this.users.length);
  },

  data() {
    return {
      pagination: {
        currentPage: 0,
        totalPages: 0,
      },
      dataTable: [],
      arrowLeftSVG: require("../assets/arrow-left.svg"),
      arrowRightSVG: require("../assets/arrow-right.svg"),
    };
  },

  methods: {
    paginate(currentPage, totalUsers) {
      this.pagination = {
        currentPage,
        totalPages: Math.ceil(totalUsers / 7),
      };
      this.generateDataTable(this.pagination.currentPage);
    },

    generateDataTable(currentPage) {
      this.dataTable = this.users.slice((currentPage - 1) * 7, currentPage * 7);
      this.$emit("changePage", this.dataTable);
    },

    changePage(pageNumber) {
      console.log(pageNumber);
      this.paginate(pageNumber, this.users.length);
    },

    returnPage() {
      if (this.pagination.currentPage > 1)
        this.paginate(this.pagination.currentPage - 1, this.users.length);
    },

    goNextPage() {
      if (this.pagination.currentPage < this.pagination.totalPages)
        this.paginate(this.pagination.currentPage + 1, this.users.length);
    },
  },
};
</script>
<style scoped>
.active {
  color: white;
  border-radius: 4px;
  font-weight: 400 !important;
  background: black !important;
}
.pagination-container {
  display: flex;
  justify-content: center;
  gap: 12px;
  padding: 20px;
  width: 100%;
}

.pagination-button {
  font-size: 18px;
  padding: 10px;
  width: 30px;
  font-weight: 400;
}

.pagination-button:hover {
  background: #e3e4eb;
  border-radius: 4px;
  font-weight: 600;
}

.pagination-container:hover {
  cursor: pointer;
}
</style>
