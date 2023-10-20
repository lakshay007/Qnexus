<script>
    import leader from "../../assets/leadervord.png";
</script>
<style>
    @import url('https://fonts.googleapis.com/css2?family=Acme&family=DM+Sans:opsz@9..40&family=Exo&family=K2D&family=Kaisei+Tokumin&family=Karma:wght@500&family=KoHo:wght@500&family=Merriweather&family=Offside&family=Overpass+Mono&family=Ruslan+Display&display=swap');
    #challenges {
        background-image: url("../../assets/leaderboard.png");
        background-size: 100% auto;
        background-repeat: no-repeat;
        background-position: center center;
        font-family: "Acme";
    }
</style>
<main class="grow flex flex-col items-center">
    <div id="challenges" class=" flex flex-row h-[12.222vh] my-[4vh] w-[72vw] justify-center items-center">
        <div class="font-medium text-4xl text-grey-800">
            LEADERBOARD
        </div>
    </div>
    <div class="grow flex flex-row gap-x-4 place-self-start ml-[4vw] bg-[#03050d] mb-4">
        <div class="grow flex flex-col justify-end ml-[2vw]">
            <div class=" flex flex-col mx-2 my-3 gap-2">
                <div>
                    <p class="text-white font-bold font-['MerriWeather']">Rank: </p>
                    <div></div>
                </div>
                <div>
                    <p class="text-white font-bold font-['MerriWeather']">Vault: </p>
                </div>
            </div>
            <div class="grow">

            </div>
            <img src={leader} class="w-[18.02vw]" alt="" />
        </div>
        <div class="bg-zinc-600 grow flex flex-col w-[60vw] jutsify-center text-center max-h-[67.5vh]">
            <div class="flex flex-row text-black bg-[#F88379]" style="font-family:'Overpass Mono';">
                <div class="m-4">
                    RANK
                </div>
                <div class="grow m-4">
                    PLAYER
                </div>
                <div class="m-4">
                    COIN
                </div>
            </div>
            <div class="grow flex flex-col" style="overflow-y: auto;">
                <div class="flex flex-row" style="font-family:'Overpass Mono';">
                    <div class="m-4">
                        0
                    </div>
                    <div class="grow m-4">
                        lmao
                    </div>
                    <div class="m-4">
                        0
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>