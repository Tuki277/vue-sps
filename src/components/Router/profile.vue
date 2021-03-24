<template>
  <div>
    <h1>profile</h1>
    <div class="box">
      <listProfile :key="acc.id" v-for="acc in account" :acc="acc" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import listProfile from "./listprofile";
import io from "socket.io-client";

export default {
  name: "profile",
  components: {
    listProfile,
  },
  data() {
    return {
      account: [],
      socket: io("http://localhost:3003"),
    };
  },
  created() {
    axios.get("http://localhost:3000/getall").then((res) => {
      this.account = res.data.data;
    }),
    this.socket.on("data", (data) => {
        if ( data.message === "success") {
                axios.get("http://localhost:3000/getall").then((res) => {
                this.account = res.data.data;
            })
        }
    });
  }
}

</script>

<style>
h1 {
  padding-bottom: 30px;
}

p span {
  margin-right: 5%;
}

button {
  color: red;
  border: 2px solid black;
  padding: 2px 10px 2px 10px;
}
</style>