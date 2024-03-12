<template>
    <div class="steps-container">
      <div v-for="(step, index) in steps" :key="index" class="step" :class="{'active': index <= currentStep}">
        <div class="col">
            <div class="step-icon-container">
                <div class="step-icon">
                  <img :src="index <= currentStep ? step.activeIcon : step.icon" alt="">
                </div>
                <!-- La línea se muestra para todos los pasos excepto el último -->
                <div v-if="index < steps.length - 1" class="step-line"></div>
            </div>
        </div>
        <div class="step-title">{{ step.title }}</div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'StepsComponent',
    props: {
      currentStep: {
        type: Number,
        default: 0,
      },
    },
    data() {
      return {
        steps: [
          { title: 'Detalles de reservación', icon: 'path/to/default/icon.svg', activeIcon: 'path/to/active/icon.svg' },
          { title: 'Habitaciones', icon: 'path/to/default/icon.svg', activeIcon: 'path/to/active/icon.svg' },
          { title: 'Acompañantes', icon: 'path/to/default/icon.svg', activeIcon: 'path/to/active/icon.svg' },
          { title: 'Pago', icon: 'path/to/default/icon.svg', activeIcon: 'path/to/active/icon.svg' }
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .steps-container {
    display: flex;
    justify-content: space-between;
  }
  
  .step {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .step-icon-container {
    position: relative;
    display: flex;
  }
  
  .step-icon {
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: #ccc;
  }
  
  .step.active .step-icon {
    background-color: #007bff;
  }
  
  .step-title {
    margin-top: 8px;
  }
  
  .step-line {
    position: absolute;
    height: 4px;
    width: 100%; /* Ajuste para que la línea se extienda hasta el centro del siguiente círculo */
    background-color: #ccc;
    left: 50%; /* Inicia desde el centro del círculo */
  }
  
  /* Ajusta la longitud de la línea solo hasta el paso actual */
  .step:not(.active) .step-line {
    background-color: transparent;
  }
  
  .active ~ .step .step-line {
    background-color: transparent;
  }
  </style>
  