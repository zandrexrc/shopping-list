import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    lists: [
      {
        id: 'l1',
        name: 'sandwich',
      },
      {
        id: 'l2',
        name: 'todo',
      },
    ],
    items: [
      {
        id: 'i1',
        name: 'bread',
        price: 19.99,
        completed: false,
        listId: 'l1',
      },
      {
        id: 'i2',
        name: 'bacon',
        price: 49.99,
        completed: false,
        listId: 'l1',
      },
      {
        id: 'i3',
        name: 'lettuce',
        price: 19.99,
        completed: false,
        listId: 'l1',
      },
      {
        id: 'i4',
        name: 'tomato',
        price: 14.99,
        completed: false,
        listId: 'l1',
      },
      {
        id: 'i5',
        name: 'mayonnaise',
        price: 19.99,
        completed: false,
        listId: 'l1',
      },
      {
        id: 'i6',
        name: 'never gonna give you up',
        price: 19.99,
        completed: false,
        listId: 'l2',
      },
      {
        id: 'i7',
        name: 'never gonna let you down',
        price: 49.99,
        completed: false,
        listId: 'l2',
      },
      {
        id: 'i8',
        name: 'never gonna run around and desert you',
        price: 19.99,
        completed: false,
        listId: 'l2',
      },
    ],
    // UI states
    activeListId: 'l1',
    currency: 'NOK',
    drawer: false,
    itemForm: false,
    listForm: false,
  },

  getters: {
    getActiveListName(state) {
      const activeList = state.lists.find(list => list.id === state.activeListId);
      return activeList?.name;
    },

    getActiveListItems(state) {
      return state.items.filter(item => item.listId === state.activeListId);
    },

    calcTotalPrice(state) {
      const activeItems = state.items.filter(item => item.listId === state.activeListId);
      let price = 0;
      for (let i = 0; i < activeItems.length; i++) {
        price += activeItems[i].price;
      }
      return price.toFixed(2);
    },

    calcUnpaidPrice(state) {
      const unpaidItems = state.items.filter(item => 
        item.listId === state.activeListId && !item.completed
      );
      let price = 0;
      for (let i = 0; i < unpaidItems.length; i++) {
        price += unpaidItems[i].price;
      }
      return price.toFixed(2);
    },
  },

  mutations: {
    setActiveListId(state, listId) {
      state.activeListId = listId;
    },

    toggleDrawer(state) {
      state.drawer = !state.drawer;
    },

    toggleItemForm(state) {
      state.itemForm = !state.itemForm;
    },

    toggleListForm(state) {
      state.listForm = !state.listForm;
    },

    addList(state, newList) {
      state.lists.push(newList);
    },

    deleteList(state, listId) {
      state.lists = state.lists.filter((list) => list.id !== listId);
    },

    addItem(state, newItem) {
      state.items.push(newItem);
    },

    completeItem(state, itemId) {
      const index = state.items.findIndex(item => item.id === itemId);
      const selectedItem = state.items[index];
      selectedItem.completed = !selectedItem.completed;
      state.items[index] = selectedItem;
    },

    deleteItem(state, itemId) {
      state.items = state.items.filter((item) => item.id !== itemId);
    },
  },

  actions: {
    setActiveListId(context, listId) {
      context.commit('setActiveListId', listId);
    },

    toggleDrawer(context) {
      context.commit('toggleDrawer');
    },

    toggleItemForm(context) {
      context.commit('toggleItemForm');
    },

    toggleListForm(context) {
      context.commit('toggleListForm');
    },

    addList(context, newList) {
      context.commit('toggleListForm');
      context.commit('addList', newList);
    },

    deleteList(context, listId) {
      context.commit('deleteList', listId);
    },

    addItem(context, newItem) {
      context.commit('toggleItemForm');
      context.commit('addItem', newItem);
    },

    completeItem(context, itemId) {
      context.commit('completeItem', itemId);
    },

    deleteItem(context, itemId) {
      context.commit('deleteItem', itemId);
    },
  },
})
