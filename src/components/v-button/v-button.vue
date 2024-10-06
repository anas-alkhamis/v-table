<template>
    <button :class="buttonClass" :type="type" @click="handleClick">
      <slot>{{ label }}</slot>
    </button>
  </template>
  
  <script>
  export default {
    name: 'CustomButton',
    props: {
      label: {
        type: String,
        default: 'Click Me',
      },
      type: {
        type: String,
        default: 'button',
      },
      buttonClass: {
        type: String,
        default: 'btn', // Default class can be customized
      },
      onClick: {
        type: Function,
        default: () => {},
      }
    },
    methods: {
      handleClick() {
        this.onClick(); // Call the provided onClick function
      },
    },
  };
  </script>
  
  <style scoped>
  .btn {
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    background-color: #007bff;
    color: white;
    cursor: pointer;
  }
  
  .btn:hover {
    background-color: #0056b3;
  }
  </style>
  