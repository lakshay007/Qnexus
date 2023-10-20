<script>
    import study from "../../assets/study.png";
</script>
<style>
    @import url('https://fonts.googleapis.com/css2?family=Acme&family=DM+Sans:opsz@9..40&family=Exo&family=K2D&family=Kaisei+Tokumin&family=Karma:wght@500&family=KoHo:wght@500&family=Merriweather&family=Offside&family=Ruslan+Display&display=swap');
    #material {
        background: url("../../assets/material.png"), linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,1));
        background-size: auto 100%;
        background-repeat: no-repeat;
        background-position: center left;
        font-family: "Acme";
    }
</style>
<main class="flex flex-col grow items-center">
    <div id="material" class=" flex flex-row h-[12.222vh] my-[4vh] w-[72vw] justify-center items-center">
        <div class="font-medium text-4xl text-grey-800 text-center">
            STUDY MATERIAL
        </div>
    </div>
    <a href="/coursemat" id="study" class="flex flex-row bg-slate-500">
        course material
    </a>
    <a href="/assess" id="assess" class="flex flex-row bg-blue-500">
        assess yourself
    </a>
</main>