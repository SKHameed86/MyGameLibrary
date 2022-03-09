<template>
  <div class='list row'>
    <div>
      <div v-if='currentGame'>
        <h4>Games</h4>
        <div>
          <label><strong>Title:</strong></label> {{ currentGame.title }}
        </div>
        <div>
          <label><strong>Platform:</strong></label> {{ currentGame.platform }}
        </div>
        <div>
          <label><strong>Genre:</strong></label> {{ currentGame.genre }}
        </div>
        <div>
          <label><strong>Release Date:</strong></label> {{ currentGame.release_date }}
        </div>
        <div>
          <label><strong>No. of Players:</strong></label> {{ currentGame.number_of_players }}
        </div>
        <div>
          <label><strong>Publisher:</strong></label> {{ currentGame.publisher }}
        </div>
        <div>
          <label><strong>Box Art:</strong></label> {{ currentGame.box_art }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>

import GamesLibraryDataService from '../services/GamesLibraryDataService';

export default {
  name: 'games-library-list',
  data() {
    return {
      games: [],
      currentGame: null,
      currentIndex: -1,
      title: '',
    };
  },
  methods: {
    retrieveGames() {
      GamesLibraryDataService.getAll()
        .then((response) => {
          this.gameEntries = response.data;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },

  mounted() {
    this.retrieveTutorials();
  },
};
</script>
<style>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}
</style>
