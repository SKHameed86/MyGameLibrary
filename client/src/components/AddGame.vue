<template>
  <div class='submit-form'>
    <div v-if='!submitted'>
      <div class='form-group'>
        <label htmlFor='title'>Title</label>
        <input
          type='text'
          class='form-control'
          id='title'
          required
          v-model='gameEntries.title'
          name='title'
        />
      </div>
      <div class='form-group'>
        <label htmlFor='platform'>Platform</label>
        <input
          type='text'
          class='form-control'
          id='platform'
          required
          v-model='gameEntries.platform'
          name='platform'
        />
      </div>
      <div class='form-group'>
        <label htmlFor='genre'>Genre</label>
        <input
          type='text'
          class='form-control'
          id='genre'
          required
          v-model='gameEntries.genre'
          name='genre'
        />
      </div>
      <div class='form-group'>
        <label htmlFor='release_date'>Release Date</label>
        <input
          type='text'
          class='form-control'
          id='release_date'
          required
          v-model='gameEntries.release_date'
          name='release_date'
        />
      </div>
      <div class='form-group'>
        <label htmlFor='number_of_players'>No. of Players</label>
        <input
          type='text'
          class='form-control'
          id='number_of_players'
          required
          v-model='gameEntries.number_of_players'
          name='number_of_players'
        />
      </div>
      <div class='form-group'>
        <label htmlFor='publisher'>Publisher</label>
        <input
          type='text'
          class='form-control'
          id='publisher'
          required
          v-model='gameEntries.publisher'
          name='publisher'
        />
      </div>
      <div class='form-group'>
        <label htmlFor='box_art'>Box Art</label>
        <input
          type='text'
          class='form-control'
          id='box_art'
          required
          v-model='gameEntries.box_art'
          name='box_art'
        />
      </div>
      <button @click='saveGame' class='btn btn-success'>Submit</button>
    </div>
    <div v-else>
      <h4>You submitted successfully!</h4>
      <button class='btn btn-success' @click='newGame'>Add</button>
    </div>
  </div>
</template>

<script>
import GamesLibraryDataService from '../services/GamesLibraryDataService';

export default {
  name: 'add-game',
  data() {
    return {
      gameEntry: {
        id: null,
        title: '',
        platform: '',
        genre: '',
        release_date: '',
        number_of_players: '',
        publisher: '',
        box_art: '',
      },
      submitted: false,
    };
  },
  methods: {
    saveGame() {
      const data = {
        title: this.gameEntry.title,
        platform: this.gameEntry.platform,
        genre: this.gameEntry.genre,
        release_date: this.gameEntry.release_date,
        number_of_players: this.gameEntry.number_of_players,
        publisher: this.gameEntry.publisher,
        box_art: this.gameEntry.box_art,
      };
      GamesLibraryDataService.create(data)
        .then((response) => {
          this.gameEntry.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    newGame() {
      this.submitted = false;
      this.gameEntry = {};
    },
  },
};
</script>
<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>
