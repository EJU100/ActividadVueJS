new Vue({
	el: '#app',
	data: {
		value: ''
	},
    methods: {
        alert: function() {
            alert
        },
        store: function (event) {
            this.value = event.target.value;
        }
    }
});

<script src="https://unpkg.com/vue@3"></script>

<div id="app">
    <button @click="toggle">value of flag is {{ flag }}</button>
    <h1 v-if="flag">I show this message if flag is TRUE</h1>
    <h1 v-else="flag">I show this message if flag is FALSE</h1>    
</div>

<script>
    Vue.createApp({
        data(){
            return {
                flag: true
            }
        },
        methods: {
            toggle(){
                this.flag = !this.flag;
            }
        }
    }).mount('#app')
	
	<h3>Days of week</h3>
	<ul>
        <li v-for="day in daysOfWeek">{{ day }}</li>
    </ul>
</div>

<script>
    Vue.createApp({
        data() {
            return {
                daysOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']
            }
        }
    }).mount('#app')
</script>

</script>

