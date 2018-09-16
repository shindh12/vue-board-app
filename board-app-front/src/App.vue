<template>
  <div id="app">
    <div class="page-header">
      <h1 class="text-center">게시판</h1>
      <p> vue.js 를 이용한 게시판</p>
    </div>
    <postingList></postingList>
  </div>
</template>

<script>
import InputForm from "./components/InputForm";
import PostingForm from "./components/PostingForm";
import PostingList from "./components/PostingList";
import "bootstrap/dist/css/bootstrap.css";
export default {
  name: 'App',
  components : { InputForm, PostingForm, PostingList }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
