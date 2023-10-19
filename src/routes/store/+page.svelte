<script>
    let coins = 1;
    let current = 0;
    import money from "../../assets/money.png";
    import coin from "../../assets/coin.png"
</script>
<style>
    @import url('https://fonts.googleapis.com/css2?family=Merriweather&display=swap');
</style>
<main class="grow bg-slate-500 flex flex-row">
    <div class="bg-blue-500 grow flex flex-col justify-center items-center gap-y-[1vh]">
        <div class="font-['MerriWeather'] font-bold text-center text-white">
            V A U L T
        </div>
        <div class="flex flex-row items-center bg-zinc-700">
            <img src={coin} class="h-auto w-[5vw]" alt=""/>
            <p class="text-[3.333vw] font-['MerriWeather']">{current}/{coins}</p>
        </div>
        <div>
            <img src={money} alt=""/>
        </div>
    </div>
    <div class="bg-green-400 grow">
        ba
    </div>
</main>