<template>
    <section v-if="turns.length > 0">
        <div class="text-center h-64 overflow-y-scroll max-h-1/2 mt-6 border-solid border-2 border-yellow-400 p-4 w-full rounded">
            <p class="text-2xl text-center text-yellow-400 mb-3">Log</p>
            <ul class="mb-4">
                <li v-for="(turn, index) in turns" :key="index" :class="{'bg-blue-500 mt-2 p-2 rounded text-white' :turn.isPlayer,'bg-red-500 mt-2 p-2 rounded text-white' :!turn.isPlayer}">
                    {{ turn.text }}
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
    export default {
        computed:{
            turns() {
                return this.$store.state.turns;
            }
        },
    }
</script>