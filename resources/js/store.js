import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		started: false,
		modalOpen: false,
		modalText: 'Modal Text',
		loginModal: false,
		currentTurn: 0,
		playerHealth: 100,
		aiHealth: 100,
		playerMana: 100,
		gold: 300,
		potionCount: 0,
		manaPotion: 0,
		aiDamage: 0,
		playerDamage: 0,
		totalAiDamage: 0,
		critChance: 15,
		turns: [],
		potionCost: 50,
		currency: 'dollars',
	},
	mutations: {},
	actions: {},
});
