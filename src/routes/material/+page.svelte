<script>
    import study from "../../assets/study.png";
    import assess from "../../assets/assess.png";
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
    #hollowcirc {
        border: 5px solid #796060;
        background-color: #000000;
        height: 13.07vw;
        border-radius:50%;
        width: 13.07vw;
        z-index: 1;
    }
    #hollowcircl {
        border: 5px solid #D0F3FF;
        background-color: #000000;
        height: 13.07vw;
        border-radius:50%;
        width: 13.07vw;
        z-index: 1;
    }
</style>
<main class="flex flex-col grow items-center">
    <div id="material" class=" flex flex-row h-[12.222vh] my-[2vh] w-[72vw] justify-center items-center">
        <div class="font-medium text-4xl text-grey-800 text-center">
            STUDY MATERIAL
        </div>
    </div>
    <div class="grow flex flex-col gap-y-[4vh]">
        <div id="study" class="flex flex-row items-center">
            <a href="/coursemat" class="z-[2] relative w-[18.75vw] h-auto bottom-[1vh] left-[16vw]"><img src={study} alt=""  /></a>
            <a id="hollowcirc" href="/coursemat">

            </a>
            <a class="w-[48.54vw] h-[20vh] bg-[#796060] rounded-xl relative right-[7vw] z-0 flex flex-row-reverse" href="/coursemat">
                <div class="m-[1vw] w-[16vw] justify-self-center text-center place-self-center">
                    <div class="text-black font-medium">
                        Here you will be able to access matrial provided to you  by your instructor
                    </div>
                    <div>
                        Material •  Slides • PYQs
                    </div>
                </div>
                <div class="w-[0.25vw] bg-black">
    
                </div>
                <p class="text-black text-[3vw] w-[15vw] text-right mr-[3vw] place-self-center" style="font-family:'Ruslan Display';">
                    Access Material
                </p>
            </a>
        </div>
        <div id="study" class="flex flex-row items-center">
            <a class="w-[48.54vw] h-[20vh] bg-[#D0F3FF] rounded-xl relative left-[7vw] z-0 flex flex-row" href="/assess">
                <div class="m-[1vw] w-[16vw] justify-self-center text-center place-self-center ">
                    <div class="text-black font-medium">
                        Assess your preparedness with topic-wise challenges.
                    </div>
                    <div class="text-black">
                        Self assessment• 1v1s • Contests
                    </div>
                </div>
                <div class="w-[0.25vw] bg-black">
    
                </div>
                <p class="text-black text-[3vw] w-[15vw] text-left ml-[3vw] place-self-center" style="font-family:'Ruslan Display';">
                    Assess yourself
                </p>
            </a>
            <a id="hollowcircl" href="/assess">
                
            </a>
            <a href="/assess" class="z-[2] relative w-[16vw] bottom-[7vh] right-[12vw]"><img src={assess} alt=""  /></a>
        </div>
    </div>
</main>