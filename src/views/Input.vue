<template>
    <div id="input">
        <div class="data">{{ value + '%' }}</div>
        <input type="range" min="0" max="100" step="0.1" v-model="value" >
        <div class="buttonBlock">
            <button class="buttonBlock_btn" @click="changeValue(25)">25%</button>
            <button class="buttonBlock_btn" @click="changeValue(50)">50%</button>
            <button class="buttonBlock_btn" @click="changeValue(75)">75%</button>
            <button class="buttonBlock_btn" @click="changeValue(100)">100%</button>
        </div>
    </div>
</template>

<script>
export default {

    data () {
        return {
            value: 20,
        }
    },
    methods: {
        changeValue(val) {
            this.value = val;
        }
    }
  
}
</script>

<style lang="css">


#input {
  font-family: 'Roboto', sans-serif;
  background-color: rgba(126, 116, 116, 0.068);
  box-shadow: 0 0 10px rgba(0,0,0,0.5);
  color: #ADD8E6;
  position: absolute;
  border-radius: 10px;
  top: 50%;
  left: 50%;
  width: 50%;
  transform: translate(-50%,-50%);
}
.data {
  margin-top: 24px;
  margin-left: 10px;
}

.buttonBlock {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
}

.buttonBlock .buttonBlock_btn {
  height: 30px;
  width:  50px;
  border-radius: 30px;
  border: none;
  margin-left: 10px;
  color: #ADD8E6;
  background: #313347;
}
.buttonBlock:first-child {
  margin-left: 0;
}

.buttonBlock .buttonBlock_btn:focus {
  outline: none;
}

/* Slider CSS */
input[type=range] {
    -webkit-appearance: none;
    display: block;
    width: 80%;
    margin: 16px auto;
    padding: 0 5px; 
    background: rgba(246, 100, 100, 0.507);
    height: 25px;
/*     border: 1px solid black; */
    border-radius: 20px;
    background-repeat: no-repeat;
}
input[type=range]:focus {
  outline: none;
}
input[type=range]::-webkit-slider-thumb {
  box-shadow: none;
/*   border: 4px so8lid #ADD8E6; */
  height: 16px;
  width: 16px;
  border-radius: 8px;
  background: #fff;
  cursor: pointer;
  -webkit-appearance: none;
  margin-bottom: 2px;
}
input[type=range]:focus::-webkit-slider-runnable-track {
  background: transparent;
}
</style>